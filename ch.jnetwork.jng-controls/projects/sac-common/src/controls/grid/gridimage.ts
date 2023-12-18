import { Input, Directive } from '@angular/core';

/**
 * Basis Komponente für NgGridImage
 */
@Directive()
export class NgGridImageCommon {

  /**
   * das Input property akypetiert string value für style des Icon
   */
  @Input()
  public iconstyle: string;

}
