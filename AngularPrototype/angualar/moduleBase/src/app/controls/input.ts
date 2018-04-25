import { Component, Input, Host, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ControlContainer, FormControl } from '@angular/forms';
import { NgBaseModelControl } from '../base/basemodelcontrol';
import { NgFormular } from './form';
import { NgRequiredInput } from '../validation/required';


@Component({
  selector: 'ngInput',
  templateUrl: './input.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: NgInput
    }
  ],
  // View Provider, damit das Formular an das Control gebunden werden kann
  viewProviders: [{ provide: ControlContainer, useExisting: NgFormular }]
})
export class NgInput extends NgBaseModelControl {

  // #region Properties

  // Definiert das Control als Required
  @Input("isrequired") _isrequired: boolean = false;
  // TextBox Placeholder
  @Input("placeholder") _placeholder: string = null;

  // #endregion
}

