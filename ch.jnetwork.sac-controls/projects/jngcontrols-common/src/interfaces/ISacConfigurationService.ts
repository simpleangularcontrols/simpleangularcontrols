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
