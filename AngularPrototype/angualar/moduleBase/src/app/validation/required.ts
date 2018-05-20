import { NG_VALIDATORS, RequiredValidator, AbstractControl, ValidationErrors } from '@angular/forms';
import { Directive, Input, forwardRef, AfterViewInit, Inject, Injector } from '@angular/core';
import { NgBaseModelControl } from '../base/basemodelcontrol';
import {
  NgInput, NgInputDecimal, NgInputInteger, NgInputCurrency, NgInputEmail, NgInputPassword, NgInputArea,
  NgDropdown, NgListbox, NgDate
} from '../controls';

// #region Base


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

// #endregion

// #region Input

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

// #endregion

// #region Decimal

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

// #endregion

// #region Integer

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

// #endregion

// #region Currency

@Directive({
  selector: 'input[ngRequiredCurrency][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => NgRequiredInputCurrency), multi: true },
    { provide: NgBaseModelControl, useExisting: NgInputCurrency, multi: true }
  ]
})
export class NgRequiredInputCurrency extends NgRequiredBase<number> {
  constructor(controlItem: NgBaseModelControl<number>) {
    super(controlItem);
  }

  @Input("ngRequiredCurrency")
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

// #endregion

// #region Email

@Directive({
  selector: 'input[ngRequiredEmail][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => NgRequiredInputEmail), multi: true },
    { provide: NgBaseModelControl, useExisting: NgInputEmail, multi: true }
  ]
})
export class NgRequiredInputEmail extends NgRequiredBase<number> {
  constructor(controlItem: NgBaseModelControl<number>) {
    super(controlItem);
  }

  @Input("ngRequiredEmail")
  set isRequired(v: boolean | string) {
    this.required = v;
  }
}

// #endregion

// #region Password

@Directive({
  selector: 'input[ngRequiredPassword][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => NgRequiredInputPassword), multi: true },
    { provide: NgBaseModelControl, useExisting: NgInputPassword, multi: true }
  ]
})
export class NgRequiredInputPassword extends NgRequiredBase<number> {
  constructor(controlItem: NgBaseModelControl<number>) {
    super(controlItem);
  }

  @Input("ngRequiredPassword")
  set isRequired(v: boolean | string) {
    this.required = v;
  }
}

// #endregion

// #region InputArea

@Directive({
  selector: 'textarea[ngRequiredArea][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => NgRequiredInputArea), multi: true },
    { provide: NgBaseModelControl, useExisting: NgInputArea, multi: true }
  ]
})
export class NgRequiredInputArea extends NgRequiredBase<number> {
  constructor(controlItem: NgBaseModelControl<number>) {
    super(controlItem);
  }

  @Input("ngRequiredArea")
  set isRequired(v: boolean | string) {
    this.required = v;
  }
}

// #endregion

// #region Date

@Directive({
  selector: 'input[ngRequiredDate][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => NgRequiredDate), multi: true },
    { provide: NgBaseModelControl, useExisting: NgDate, multi: true }
  ]
})
export class NgRequiredDate extends NgRequiredBase<Date> {
  constructor(controlItem: NgBaseModelControl<Date>) {
    super(controlItem);
  }

  @Input("ngRequiredDate")
  set isRequired(v: boolean | string) {
    this.required = v;
  }
}

// #endregion

// #region Dropdown

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

// #endregion

// #region Listbox

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

// #endregion


