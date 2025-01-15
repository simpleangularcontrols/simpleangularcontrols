import { ControlHeight } from '../enums/ControlHeight';

/**
 * interface for service which provides global configuration settings to components
 */
export interface ISacConfigurationService {
  // #region Public Getters And Setters

  /**
   * Defines the default display for a checkbox. You can choose between a checkbox and a switch.
   */
  CheckboxStyle: 'checkbox' | 'switch';
  /**
   * Defines the standard height of the components
   */
  get ComponentHeight(): ControlHeight | null;
  /**
   * Defines the standard text for currencies. e.g. $, €, CHF
   */
  get CurrencyText(): string;
  /**
   * Mode for display helptext
   */
  HelptextMode: 'tooltip' | 'text';
  /**
   * Activates the error messages below the controls
   */
  InlineErrorEnabled: boolean;
  /**
   * Defines if InputSearch uses an icon at the button or the text
   */
  InputSearchIconMode: 'text' | 'icon' | 'mixed';
  /**
   * default labe size for large devices
   */
  get LabelSizeLg(): number | null;
  /**
   * default label size for medium devices
   */
  get LabelSizeMd(): number | null;
  /**
   * default label size for small devices
   */
  get LabelSizeSm(): number | null;
  /**
   * default label size for extra large devices
   */
  get LabelSizeXl(): number | null;
  /**
   * default label column size
   */
  get LabelSizeXs(): number | null;
  /**
   * default label size for extra extra large devices
   */
  get LabelSizeXxl(): number | null;

  // #endregion Public Getters And Setters
}
