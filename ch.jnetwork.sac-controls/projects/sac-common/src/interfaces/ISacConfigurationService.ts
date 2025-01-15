import { ControlHeight } from '../enums/ControlHeight';

/**
 * interface for service which provides global configuration settings to components
 */
export interface ISacConfigurationService {
  // #region Properties

  /**
   * Defines the standard height of the components
   */
  ComponentHeight: ControlHeight | null;
  /**
   * Defines the standard text for currencies. e.g. $, €, CHF
   */
  CurrencyText: string;
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
  LabelSizeLg: number | null;
  /**
   * default label size for medium devices
   */
  LabelSizeMd: number | null;
  /**
   * default label size for small devices
   */
  LabelSizeSm: number | null;
  /**
   * default label size for extra large devices
   */
  LabelSizeXl: number | null;
  /**
   * default label column size
   */
  LabelSizeXs: number | null;
  /**
   * default label size for extra extra large devices
   */
  LabelSizeXxl: number | null;

  // #endregion Properties
}
