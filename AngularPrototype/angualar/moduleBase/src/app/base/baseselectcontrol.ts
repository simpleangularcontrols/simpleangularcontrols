import { Input } from '@angular/core';
import { NgBaseModelControl } from '../base/basemodelcontrol';

export class NgBaseSelectControl extends NgBaseModelControl<string> {

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

  // Definiert das Control als Required
  @Input("isrequired") _isrequired: boolean = false;

  set options(val: any[]) {
    this._options = val;
  }
}
