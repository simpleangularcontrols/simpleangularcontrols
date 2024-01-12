import { Directive, Input } from '@angular/core';

/***
 * base component for form options
 */
@Directive()
export class SacFormLayoutCommon {
  // #region Properties

  /**
   * defines that error messages are displayed under the controls
   */
  @Input() public inlineError: boolean = true;
  /**
   * defines that the labels are displayed as adaptive labels
   */
  @Input() public isAdaptiveLabel: boolean = false;
  /**
   * default label size for medium devices
   */
  @Input()
  public labelSizeMd: number | null = null;
  /**
   * default label size for small devices
   */
  @Input()
  public labelSizeSm: number | null = null;
  /**
   * default label column size
   */
  @Input()
  public labelSizeXs: number | null = null;
  /**
   * default label size for extra extra large devices
   */
  @Input()
  public labelSizeXxl: number | null = null;
  /**
   * default labe size for large devices
   */
  @Input()
  public labelSizeLg: number | null = null;
  /**
   * default label size for extra large devices
   */
  @Input()
  public labelSizeXl: number | null = null;

  // #endregion Properties

  // #region Public Getters And Setters

  /**
   * Returns whether the inline error messages for the form are active.
   */
  public get IsInlineErrorEnabled(): boolean {
    return this.inlineError !== false;
  }

  // #endregion Public Getters And Setters
}
