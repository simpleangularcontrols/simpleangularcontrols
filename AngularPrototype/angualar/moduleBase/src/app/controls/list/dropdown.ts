import { Component, Input, Host, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ControlContainer, FormControl, NG_VALIDATORS, ValidationErrors, AbstractControl } from '@angular/forms';
import { NgBaseSelectControl } from '../../base/baseselectcontrol';
import { NgFormular } from '../form/form';
import { Validation } from '../../validation';

@Component({
  selector: 'ngDropdown',
  templateUrl: './dropdown.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: NgDropdown },
    { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => NgDropdown) }
  ],
  // View Provider, damit das Formular an das Control gebunden werden kann
  viewProviders: [{ provide: ControlContainer, useExisting: NgFormular }]
})
export class NgDropdown extends NgBaseSelectControl<string> {

  // Label Text für Empty Item
  @Input("emptylabel") _emptylabel: string = '';
  // Option Value für Empty Item
  private _emptyoptionvalue: object = null;


  validateData(c: AbstractControl): ValidationErrors | null {
    let error: ValidationErrors | null = null;

    if (this._isrequired) {
      error = Validation.required(c, this._label);
    }

    return error;
  }
}
