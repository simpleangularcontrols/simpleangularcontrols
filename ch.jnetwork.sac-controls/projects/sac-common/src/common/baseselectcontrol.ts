import { Input, Directive } from '@angular/core';
import { SacBaseListControl } from './baselistcontrol';

/**
 * Abstract Klasse für SacBaseSelectControl. Extendes SacBaseListControl
 */
@Directive()
export abstract class SacBaseSelectControl<VALUE> extends SacBaseListControl<VALUE> {

  /**
   * Definiert das Label für das Group Element
   */
  @Input() grouplabel: string = 'label';

  /**
   * Definiert die Collection der Items im Group Element
   */
  @Input() groupitems: string = '';

}
