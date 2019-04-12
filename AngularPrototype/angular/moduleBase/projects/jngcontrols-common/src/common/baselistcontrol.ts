import { Input, TemplateRef } from '@angular/core';
import { NgBaseModelControl } from './basemodelcontrol';

export abstract class NgBaseListControl<VALUE> extends NgBaseModelControl<VALUE> {

  _options: any[];

  // Template für Value Element
  @Input("optionlabeltemplate")
  displayValueTemplate: TemplateRef<any>;

  // Definiert das Label für das Option Element
  @Input("optionlabel") _fieldLabel: string = 'label';
  // Definiert den Wert für das Option Element
  @Input("optionvalue") _fieldValue: string = 'value';
  // Definiert, ob das Option Element aktiv ist
  @Input("optionenabled") _fieldEnabled: string = '';

  // Definiert das Control als Required
  @Input("isrequired") _isrequired: boolean = false;

  /**
   * Style Breite für List Control Element
   */
  @Input("width") _width: string = null;

  @Input("options") get options(): any[] {
    return this._options;
  }
  set options(val: any[]) {
    this._options = val;
  }
}
