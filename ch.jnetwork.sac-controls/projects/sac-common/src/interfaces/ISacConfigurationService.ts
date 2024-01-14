/**
 * interface for service which provides global configuration settings to components
 */
export interface ISacConfigurationService {
  // #region Public Getters And Setters

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
