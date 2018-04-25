import { NG_VALIDATORS, RequiredValidator, AbstractControl, ValidationErrors } from '@angular/forms';
import { Directive, Input, forwardRef, AfterViewInit, Inject, Injector } from '@angular/core';
import { NgBaseModelControl } from '../base/basemodelcontrol';
import { NgInput } from '../controls/input';
import { NgDropdown } from '../controls/dropdown';
import { NgListbox } from '../controls/listbox';


class NgRequiredBase extends RequiredValidator {

  private controlItem: NgBaseModelControl;

  // #region Constructor

  // Konstruktor
  // Inject des Formulars
  constructor(controlItem: NgBaseModelControl) {
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
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => NgRequiredInput), multi: true, },
    { provide: NgBaseModelControl, useExisting: NgInput, multi: true }
  ]
})
export class NgRequiredInput extends NgRequiredBase {
  constructor(controlItem: NgBaseModelControl) {
    super(controlItem);
  }

  @Input("ngRequired")
  set isRequired(v: boolean | string) {
    this.required = v;
  }
}

@Directive({
  selector: 'select:not([multiple])[ngRequired][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => NgRequiredDropdown), multi: true, },
    { provide: NgBaseModelControl, useExisting: NgDropdown, multi: true }
  ]
})
export class NgRequiredDropdown extends NgRequiredBase {
  constructor(controlItem: NgBaseModelControl) {
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
export class NgRequiredListbox extends NgRequiredBase {
  constructor(controlItem: NgBaseModelControl) {
    super(controlItem);
  }

  @Input("ngRequired")
  set isRequired(v: boolean | string) {
    this.required = v;
  }
}



