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

  // Definiert das Label für das Option Element
  @Input("optionlabel") _fieldLabel: string = 'label';
  // Definiert den Wert für das Option Element
  @Input("optionvalue") _fieldValue: string = 'value';
  // Definiert, ob das Option Element aktiv ist
  @Input("optionenabled") _fieldEnabled: string = '';

  // Definiert das Label für das Group Element
  @Input("grouplabel") _fieldGroupLabel: string = 'label';
  // Definiert die Collection der Items im Group Element
  @Input("groupitems") _fieldGroupItems: string = '';

  @Input("options") get options(): any[] {
    return this._options;
  }

  // Label Text für Empty Item
  @Input("emptylabel") _emptylabel: string = '';
  // Option Value für Empty Item
  private _emptyoptionvalue: object = null;

  // Definiert das Control als Required
  @Input("isrequired") _isrequired: boolean = false;

  set options(val: any[]) {
    this._options = val;
  }
}
