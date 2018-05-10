import { NG_VALIDATORS, RequiredValidator, AbstractControl, ValidationErrors } from '@angular/forms';
import { Directive, Input, forwardRef, AfterViewInit, Inject, Injector } from '@angular/core';
import { NgBaseModelControl } from '../base/basemodelcontrol';
import { NgInput } from '../controls/input';
import { NgDropdown } from '../controls/dropdown';
import { NgListbox } from '../controls/listbox';
import { NgInputDecimal } from '../controls/inputdecimal';
import { NgInputInteger } from '../controls/inputinteger';


class NgRequiredBase<VALUE> extends RequiredValidator {

  protected controlItem: NgBaseModelControl<VALUE>;

  // #region Constructor

  // Konstruktor
  // Inject des Formulars
  constructor(controlItem: NgBaseModelControl<VALUE>) {
    super();
    this.controlItem = controlItem;
  }

  // #endregion

  get isRequired(): boolean | string {
    return this.required;
  }

  validate(c: AbstractControl): ValidationErrors | null {
    if (super.validate(c) != null) {
      return { 'required': true, 'required_message': 'Feld "' + this.controlItem[0]._label + '" ist erforderlich' };
    } else {
      return null;
    }
  }

}

@Directive({
  selector: 'input[ngRequired][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => NgRequiredInput), multi: true },
    { provide: NgBaseModelControl, useExisting: NgInput, multi: true }
  ]
})
export class NgRequiredInput extends NgRequiredBase<string> {
  constructor(controlItem: NgBaseModelControl<string>) {
    super(controlItem);
  }

  @Input("ngRequired")
  set isRequired(v: boolean | string) {
    this.required = v;
  }
}

@Directive({
  selector: 'input[ngRequiredDecimal][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => NgRequiredInputDecimal), multi: true },
    { provide: NgBaseModelControl, useExisting: NgInputDecimal, multi: true }
  ]
})
export class NgRequiredInputDecimal extends NgRequiredBase<number> {
  constructor(controlItem: NgBaseModelControl<number>) {
    super(controlItem);
  }

  @Input("ngRequiredDecimal")
  set isRequired(v: boolean | string) {
    this.required = v;
  }

  validate(c: AbstractControl): ValidationErrors | null {
    if (c.value === '-') {
      return { 'required': true, 'required_message': 'Feld "' + this.controlItem[0]._label + '" ist kein gültiger Wert' };
    }

    return super.validate(c);
  }
}

@Directive({
  selector: 'input[ngRequiredInteger][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => NgRequiredInputInteger), multi: true },
    { provide: NgBaseModelControl, useExisting: NgInputInteger, multi: true }
  ]
})
export class NgRequiredInputInteger extends NgRequiredBase<number> {
  constructor(controlItem: NgBaseModelControl<number>) {
    super(controlItem);
  }

  @Input("ngRequiredInteger")
  set isRequired(v: boolean | string) {
    this.required = v;
  }

  validate(c: AbstractControl): ValidationErrors | null {
    if (c.value === '-') {
      return { 'required': true, 'required_message': 'Feld "' + this.controlItem[0]._label + '" ist kein gültiger Wert' };
    }

    return super.validate(c);
  }
}

@Directive({
  selector: 'select:not([multiple])[ngRequired][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => NgRequiredDropdown), multi: true, },
    { provide: NgBaseModelControl, useExisting: NgDropdown, multi: true }
  ]
})
export class NgRequiredDropdown extends NgRequiredBase<string> {
  constructor(controlItem: NgBaseModelControl<string>) {
    super(controlItem);
  }

  @Input("ngRequired")
  set isRequired(v: boolean | string) {
    this.required = v;
  }
}

@Directive({
  selector: ':select[multiple][ngRequired][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => NgRequiredListbox), multi: true, },
    { provide: NgBaseModelControl, useExisting: NgListbox, multi: true }
  ]
})
export class NgRequiredListbox extends NgRequiredBase<string> {
  constructor(controlItem: NgBaseModelControl<string>) {
    super(controlItem);
  }

  @Input("ngRequired")
  set isRequired(v: boolean | string) {
    this.required = v;
  }
}



