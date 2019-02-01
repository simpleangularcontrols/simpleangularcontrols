import { Input, ElementRef, Host, Renderer2, OnDestroy, ɵlooseIdentical as looseIdentical, Injector } from '@angular/core';
import { ValidationErrors, AbstractControl } from '@angular/forms';
import { NgBaseSelectControl } from '../../common/baseselectcontrol';
import { Validation } from '../../validation';
import { NgFormularCommon } from '../form/form';


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


export class NgDropdownCommon extends NgBaseSelectControl<any> {

  _optionIdCounter: number = 0;
  _optionMap: Map<string, any> = new Map<string, any>();
  private _compareWith: (o1: any, o2: any) => boolean = looseIdentical;

  // Label Text für Empty Item
  @Input("emptylabel") _emptylabel: string = '';
  // Option Value für Empty Item
  @Input("emptyvalue") _emptyoptionvalue: string = null;

  @Input("compareWith")
  set compareWith(fn: (o1: any, o2: any) => boolean) {
    if (typeof fn !== 'function') {
      throw new Error(`compareWith must be a function, but received ${JSON.stringify(fn)}`);
    }
    this._compareWith = fn;
  }

  constructor(@Host() parent: NgFormularCommon, injector: Injector, private _renderer: Renderer2, private _elementRef: ElementRef) {
    super(parent, injector);
  }

  setValue(value: string) {
    super.setValue(this.getOptionValue(value));
  }

  writeValue(value: any) {
    // Select Item aus Control lesen
    let selectItem: any = this._elementRef.nativeElement.getElementsByTagName("select")[0];

    let id: string | null = this.getOptionId(value);
    let valueString = _buildValueString(id, value);

    if (selectItem !== undefined)
      this._renderer.setProperty(selectItem, 'value', valueString);

    super.writeValue(value);
  }

  registerOption(): string {
    return (this._optionIdCounter++).toString();
  }

  private getOptionId(value: any): string | null {
    for (const id of Array.from(this._optionMap.keys())) {
      if (this._compareWith(this._optionMap.get(id), value)) return id;
    }
    return null;
  }

  private getOptionValue(valueString: string): any {
    const id: string = this.extractId(valueString);
    return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
  }

  private extractId(valueString: string): string {
    return valueString.split(':')[0];
  }

  validateData(c: AbstractControl): ValidationErrors | null {
    let error: ValidationErrors | null = null;

    if (this._isrequired) {
      error = Validation.required(c, this._label);
    }

    return error;
  }
}

export class NgDropdownOptionCommon implements OnDestroy {

  private id: string = null;

  constructor(private _element: ElementRef, private _renderer: Renderer2, private _dropdown: NgDropdownCommon) {

    if (this._dropdown)
      this.id = this._dropdown.registerOption();

  }

  @Input("ngValue")
  set ngValue(value: any) {

    // Cancel wenn kein Parent Dropdown vorhanden
    if (this._dropdown == null)
      return;

    this._dropdown._optionMap.set(this.id, value);
    this._setElementValue(_buildValueString(this.id, value));
  }

  @Input("value")
  set value(value: any) {
    this._setElementValue(value);
  }

  _setElementValue(value: string): void {
    this._renderer.setProperty(this._element.nativeElement, 'value', value);
  }

  ngOnDestroy(): void {
    if (this._dropdown) {
      this._dropdown._optionMap.delete(this.id);
    }
  }
}
