import { Component, Input, Host, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ControlContainer, FormControl } from '@angular/forms';
import { NgBaseSelectControl } from '../../base/baseselectcontrol';
import { NgFormular } from '../form/form';
import { NgRequiredDropdown } from '../../validation/required';

@Component({
  selector: 'ngDropdown',
  templateUrl: './dropdown.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: NgDropdown
    }
  ],
  // View Provider, damit das Formular an das Control gebunden werden kann
  viewProviders: [{ provide: ControlContainer, useExisting: NgFormular }]
})
export class NgDropdown extends NgBaseSelectControl {

  // Label Text für Empty Item
  @Input("emptylabel") _emptylabel: string = '';
  // Option Value für Empty Item
  private _emptyoptionvalue: object = null;

}
