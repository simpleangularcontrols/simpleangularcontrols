import { Component, Input, Host, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ControlContainer, FormControl, ValidationErrors, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { NgBaseModelControl } from '../../base/basemodelcontrol';
import { NgFormular } from '../form/form';


@Component({
  selector: 'ngCheckbox',
  templateUrl: './checkbox.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: NgCheckbox },
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => NgCheckbox), multi: true }
  ],
  // View Provider, damit das Formular an das Control gebunden werden kann
  viewProviders: [{ provide: ControlContainer, useExisting: NgFormular }]
})
export class NgCheckbox extends NgBaseModelControl<boolean> {

  // Control hat keinen Validator
  validateData(c: AbstractControl): ValidationErrors | null {
    return null
  }

}

