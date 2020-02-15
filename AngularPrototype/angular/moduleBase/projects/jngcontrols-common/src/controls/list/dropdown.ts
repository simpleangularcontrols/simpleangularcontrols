import { ElementRef, Host, Injector, Input, OnDestroy, Renderer2, ɵlooseIdentical as looseIdentical } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { NgBaseSelectControl } from '../../common/baseselectcontrol';
import { Validation } from '../../validation';
import { NgFormularCommon } from '../form/form';

/**
 * Function um ein Key Value Pair für das Dropdown zu erzeugen
 * @param id ID
 * @param value Wert der an das Element gebunden werden soll
 */
export function _buildValueString(id: string | null, value: any): string {
  // Wenn ID null ist Object zurückgeben
  if (id == null) {
    return `${value}`;
  }

  // Mapping Objekt zu String
  if (value && typeof value === 'object') {
    value = 'Object';
  }

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
  @Input('emptylabel') _emptylabel: string = '';
  /**
   * Option Value für Empty Item
   */
  @Input('emptyvalue') _emptyoptionvalue: string = null;
  /**
   * compareWith-Funktion
   */
  @Input('compareWith')
  set compareWith(fn: (o1: any, o2: any) => boolean) {
    if (typeof fn !== 'function') {
      throw new Error(`compareWith must be a function, but received ${JSON.stringify(fn)}`);
    }
    this._compareWith = fn;
  }

  /**
 * Resource Key für Validation Message Required bei Control
 */
  @Input('validationmessagerequired') _validationMessageRequired: string = 'VALIDATION_ERROR_REQUIRED';
  /**
   * Resource Key für Validation Message Required in Validation Summary
   */
  @Input('validationmessagesummaryrequired') _validationMessageRequiredSummary: string = 'VALIDATION_ERROR_SUMMARY_REQUIRED';

  /**
   * Konstruktor
   * @param parent Übergeordnetes HTML Element
   * @param injector Injector für Services
   * @param _renderer Render Engine
   * @param _elementRef Referenz von HTML Element
   */
  constructor( @Host() parent: NgFormularCommon, injector: Injector, private _renderer: Renderer2, private _elementRef: ElementRef) {
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
    this.setSelectedValue(value);
    super.writeValue(value);
  }
  /**
   * Registriert das OptionID-Counter als String
   */
  registerOption(): string {
    return (this._optionIdCounter++).toString();
  }

  /**
   * Methode die von Options aufgerufen wird, um das Mapping zwischen Dropdown Value und Value herzustellen.
   * @param id: Id aus Options
   * @param value: Value
   */
  public setOptionMap(id: string, value: any): void {
    this._optionMap.set(id, value);

    // Selected Value auf Control aktualisieren, wenn Value dem SelectedValue entspricht
    if (this.value === value) {
      this.setSelectedValue(value);
    }
  }

  /**
   * Setzt den Selected Value auf dem Control
   * @param value Value
   */
  private setSelectedValue(value: any): void {
    // Select Item aus Control lesen
    const selectItem: any = this._elementRef.nativeElement.getElementsByTagName('select')[0];
    /**
     * Id vom Select Item
     */
    const id: string | null = this.getOptionId(value);
    /**
     * Value String
     */
    const valueString = _buildValueString(id, value);

    if (selectItem !== undefined) {
      this._renderer.setProperty(selectItem, 'value', valueString);
    }
  }

  /**
   * Nimmt das ID vom Option
   * @param value
   */
  private getOptionId(value: any): string | null {
    for (const id of Array.from(this._optionMap.keys())) {
      if (this._compareWith(this._optionMap.get(id), value)) {
        return id;
      }
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
   * @param valueString String bei welchem die ID Extrahiert werden soll
   */
  private extractId(valueString: string): string {
    return valueString.split(':')[0];
  }
  /**
   * Validator
   * @param c Control Instanz
   */
  validateData(c: AbstractControl): ValidationErrors | null {
    let error: ValidationErrors | null = null;

    if (this._isrequired) {
      error = Validation.required(c, this._label, this._validationMessageRequired, this._validationMessageRequiredSummary);
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
   * @param _element Referenz auf HTML Element
   * @param _renderer Render Engine
   * @param _dropdown Dropdown Instanz
   */
  constructor(private _element: ElementRef, private _renderer: Renderer2, private _dropdown: NgDropdownCommon) {

    if (this._dropdown) {
      this.id = this._dropdown.registerOption();
    }
  }
  /**
   * Option ngValue
   */
  @Input('ngValue')
  set ngValue(value: any) {

    // Cancel wenn kein Parent Dropdown vorhanden
    if (this._dropdown == null) {
      return;
    }

    this._dropdown.setOptionMap(this.id, value);
    this._setElementValue(_buildValueString(this.id, value));

    this._dropdown.writeValue(this._dropdown.value);
  }
  /**
   * Wert-Setter
   */
  @Input('value')
  set value(value: any) {
    this._setElementValue(value);
  }
  /**
   * Den Wert vom Option-Element einstellen
   * @param value Wert
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
