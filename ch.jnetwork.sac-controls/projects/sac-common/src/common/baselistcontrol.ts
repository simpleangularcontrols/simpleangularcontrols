import { Directive, Input, TemplateRef } from '@angular/core';
import { SacBaseModelControl } from './basemodelcontrol';

/**
 * Abstract Klasse für SacBaseListControl. Extendes SacBaseModelControl
 */
@Directive()
export abstract class SacBaseListControl<
  VALUE
> extends SacBaseModelControl<VALUE> {
  /**
   * options. Typ: any
   */
  _options: any[];

  /**
   * Template für Value Element
   */
  @Input()
  optionlabeltemplate: TemplateRef<any>;

  /**
   * Definiert das Label für das Option Element
   */
  @Input() optionlabel: string = 'label';

  /**
   * Definiert den Wert für das Option Element
   */
  @Input() optionvalue: string = 'value';

  /**
   * Definiert, ob das Option Element aktiv ist
   */
  @Input() optionenabled: string = '';

  /**
   * Definiert das Control als Required
   */
  @Input() isrequired: boolean = false;

  /**
   * Style Breite für List Control Element
   */
  @Input() width: string = null;

  /**
   * Input property für options
   */
  @Input() get options(): any[] {
    return this._options;
  }

  /**
   * setter für options
   */
  set options(val: any[]) {
    this._options = val;
  }
}
