import { Input, Directive } from '@angular/core';

/**
 * Basis Komponente für SacGridImage
 */
@Directive()
export class SacGridImageCommon {

  /**
   * das Input property akypetiert string value für style des Icon
   */
  @Input()
  public iconstyle: string;

}
