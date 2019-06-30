import { Input, ElementRef, Host, Renderer2, OnDestroy, ɵlooseIdentical as looseIdentical, Injector } from '@angular/core';
import { ValidationErrors, AbstractControl } from '@angular/forms';
import { NgBaseSelectControl } from '../../common/baseselectcontrol';
import { Validation } from '../../validation';
import { NgFormularCommon } from '../form/form';

/**
 * Function um ein Key Value String für das Dropdown zu erzeugen
 * @param id ID 
 * @param value Wert der an das Element gebunden werden soll
 */
export function _buildValueString(id: string | null, value: any): string {
  // Wenn ID null ist Object zurückgeben
  if (id == null)
    return `${value}`;

  // Mapping Objekt zu String
  if (value && typeof value === 'object')
    value = 'Object';

  // String als ID
  return `${id}: ${value}`.slice(0, 50);
}

/**
 * Base Dropdown Komponente
 */
export class NgDropdownCommon extends NgBaseSelectControl<any> {
  /**
   * Counter vom OptionID; default Wert = 0
   */
  _optionIdCounter: number = 0;
  /**
   * OptionMap
   */
  _optionMap: Map<string, any> = new Map<string, any>();
  /**
   * compareWith-Funktion
   */
  private _compareWith: (o1: any, o2: any) => boolean = looseIdentical;

  /**
   * Label Text für Empty Item
   */
  @Input("emptylabel") _emptylabel: string = '';
  /**
   * Option Value für Empty Item
   */
  @Input("emptyvalue") _emptyoptionvalue: string = null;
  /**
   * compareWith-Funktion
   */
  @Input("compareWith")
  set compareWith(fn: (o1: any, o2: any) => boolean) {
    if (typeof fn !== 'function') {
      throw new Error(`compareWith must be a function, but received ${JSON.stringify(fn)}`);
    }
    this._compareWith = fn;
  }
  /**
   * Konstruktor
   * @param parent 
   * @param injector 
   * @param _renderer 
   * @param _elementRef 
   */
  constructor(@Host() parent: NgFormularCommon, injector: Injector, private _renderer: Renderer2, private _elementRef: ElementRef) {
    super(parent, injector);
  }
  /**
   * Wert einstellen
   * @param value - Wert
   */
  setValue(value: string) {
    super.setValue(this.getOptionValue(value));
  }
  /**
   * Wert schreiben
   * @param value - Wert
   */
  writeValue(value: any) {
    // Select Item aus Control lesen
    let selectItem: any = this._elementRef.nativeElement.getElementsByTagName("select")[0];

    let id: string | null = this.getOptionId(value);
    let valueString = _buildValueString(id, value);

    if (selectItem !== undefined)
      this._renderer.setProperty(selectItem, 'value', valueString);

    super.writeValue(value);
  }
  /**
   * Registriert das OptionID-Counter als String
   */
  registerOption(): string {
    return (this._optionIdCounter++).toString();
  }
  /**
   * Nimmt das ID vom Option
   * @param value 
   */
  private getOptionId(value: any): string | null {
    for (const id of Array.from(this._optionMap.keys())) {
      if (this._compareWith(this._optionMap.get(id), value)) return id;
    }
    return null;
  }
  /**
   * Nimmt den String-Wert vom Option
   * @param valueString
   */
  private getOptionValue(valueString: string): any {
    const id: string = this.extractId(valueString);
    return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
  }
  /**
   * ID extrahieren
   * @param valueString 
   */
  private extractId(valueString: string): string {
    return valueString.split(':')[0];
  }
  /**
   * Validator
   * @param c 
   */
  validateData(c: AbstractControl): ValidationErrors | null {
    let error: ValidationErrors | null = null;

    if (this._isrequired) {
      error = Validation.required(c, this._label);
    }

    return error;
  }
}

/**
 * ngDropdownOption-Klasse
 */
export class NgDropdownOptionCommon implements OnDestroy {
  /**
   * ID-String
   */
  private id: string = null;
  /**
   * Konstruktor
   * @param _element 
   * @param _renderer 
   * @param _dropdown 
   */
  constructor(private _element: ElementRef, private _renderer: Renderer2, private _dropdown: NgDropdownCommon) {

    if (this._dropdown)
      this.id = this._dropdown.registerOption();

  }
  /**
   * Option ngValue
   */
  @Input("ngValue")
  set ngValue(value: any) {

    // Cancel wenn kein Parent Dropdown vorhanden
    if (this._dropdown == null)
      return;

    this._dropdown._optionMap.set(this.id, value);
    this._setElementValue(_buildValueString(this.id, value));
  }
  /**
   * Wert-Setter
   */
  @Input("value")
  set value(value: any) {
    this._setElementValue(value);
  }
  /**
   * Den Wert vom Option-Element einstellen
   * @param value 
   */
  _setElementValue(value: string): void {
    this._renderer.setProperty(this._element.nativeElement, 'value', value);
  }
  /**
   * OnDestroy Event
   */
  ngOnDestroy(): void {
    if (this._dropdown) {
      this._dropdown._optionMap.delete(this.id);
    }
  }
}
