import { Input, Directive } from '@angular/core';
import { NgBaseListControl } from './baselistcontrol';

/**
 * Abstract Klasse für NgBaseSelectControl. Extendes NgBaseListControl
 */
@Directive()
export abstract class NgBaseSelectControl<VALUE> extends NgBaseListControl<VALUE> {

  /**
   * Definiert das Label für das Group Element
   */
  @Input('grouplabel') _fieldGroupLabel: string = 'label';

  /**
   * Definiert die Collection der Items im Group Element
   */
  @Input('groupitems') _fieldGroupItems: string = '';

}
