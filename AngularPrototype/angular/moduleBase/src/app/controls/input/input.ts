import { Component, Input, Host, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ControlContainer, FormControl, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';
import { NgBaseModelControl } from '../../base/basemodelcontrol';
import { NgFormular } from '../form/form';
import { Validation } from '../../validation';
import { error } from 'util';
import { NgInputBase } from '../../base/baseinputcontrol';

@Component({
  selector: 'ngInput',
  templateUrl: './input.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: NgInput },
    { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => NgInput) }
  ],
  // View Provider, damit das Formular an das Control gebunden werden kann
  viewProviders: [{ provide: ControlContainer, useExisting: NgFormular }]
})

export class NgInput extends NgInputBase<string> {
  // TextBox Placeholder
  @Input("maxlength") _maxlength: number = null;

  validateData(c: AbstractControl): ValidationErrors | null {
    let error: ValidationErrors|null = null;

    if (this._isrequired) {
      error = Validation.required(c, this._label);
    }

    return error;
  }
}
