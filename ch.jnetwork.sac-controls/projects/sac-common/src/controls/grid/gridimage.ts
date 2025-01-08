import { Directive, Input } from '@angular/core';

/**
 * Basic component for SacGridImage
 */
@Directive()
export class SacGridImageCommon {
  // #region Properties

  /**
   * Style of the icon
   */
  @Input()
  public iconstyle: string;

  // #endregion Properties
}
