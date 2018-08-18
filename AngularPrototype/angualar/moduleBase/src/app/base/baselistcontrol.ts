import { Input } from '@angular/core';
import { NgBaseModelControl } from '../base/basemodelcontrol';

export class NgBaseListControl<VALUE> extends NgBaseModelControl<VALUE> {

  _options: any[];

  // Definiert das Label für das Option Element
  @Input("optionlabel") _fieldLabel: string = 'label';
  // Definiert den Wert für das Option Element
  @Input("optionvalue") _fieldValue: string = 'value';
  // Definiert, ob das Option Element aktiv ist
  @Input("optionenabled") _fieldEnabled: string = '';

  // Definiert das Control als Required
  @Input("isrequired") _isrequired: boolean = false;

  @Input("options") get options(): any[] {
    return this._options;
  }
  set options(val: any[]) {
    this._options = val;
  }
}
