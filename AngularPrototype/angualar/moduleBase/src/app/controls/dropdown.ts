import { Component, Input, Host, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ControlContainer, FormControl } from '@angular/forms';
import { NgBaseModelControl } from '../base/basemodelcontrol';
import { NgFormular } from './form';


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
export class NgDropdown extends NgBaseModelControl {


  _options: any[];

  @Input("optionlabel") _fieldLabel: string = 'label';
  @Input("optionvalue") _fieldValue: string = 'value';

  @Input("options") get options(): any[] {
    return this._options;
  }

  set options(val: any[]) {
    this._options = val;
  }
}
