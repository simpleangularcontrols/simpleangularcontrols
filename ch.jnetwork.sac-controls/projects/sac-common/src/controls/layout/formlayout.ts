import { Directive, Input } from '@angular/core';
import { ControlHeight } from '../../enums/ControlHeight';

/***
 * base component for form options
 */
@Directive()
export class SacFormLayoutCommon {
  // #region Properties

  /**
   * Defines the default display for a checkbox. You can choose between a checkbox and a switch. If no style is defined, the global style or the style on the control is used.
   */
  @Input()
  public checkboxstyle: 'checkbox' | 'switch' | null = null;
  /**
   * Defines the standard height of the components
   */
  @Input() public componentHeight: ControlHeight | null = null;
  /**
   * Mode for display helptext
   */
  @Input()
  public helptextmode: 'tooltip' | 'text' | null;
  /**
   * defines that error messages are displayed under the controls
   */
  @Input() public inlineError: boolean | null = null;
  /**
   * Defines if InputSearch uses an icon at the button or the text
   */
  @Input()
  public inputsearchiconmode: 'text' | 'icon' | 'mixed' | null = null;
  /**
   * defines that the labels are displayed as adaptive labels
   */
  @Input() public isAdaptiveLabel: boolean = false;
  /**
   * default labe size for large devices
   */
  @Input()
  public labelSizeLg: number | null = null;
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
   * default label size for extra large devices
   */
  @Input()
  public labelSizeXl: number | null = null;
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

  // #endregion Properties

  // #region Public Getters And Setters

  /**
   * Returns whether the inline error messages for the form are active.
   */
  public get IsInlineErrorEnabled(): boolean {
    return this.inlineError;
  }

  // #endregion Public Getters And Setters
}
