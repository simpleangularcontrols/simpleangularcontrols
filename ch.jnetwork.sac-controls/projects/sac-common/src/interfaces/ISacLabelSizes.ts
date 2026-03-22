/**
 * Interface defining responsive label column sizes for various device breakpoints.
 */
export interface ISacLabelSizes {
    // #region Getters And Setters

    /**
     * Default label size for large devices (lg breakpoint).
     */
    get labelSizeLg(): number;

    /**
     * Default label size for medium devices (md breakpoint).
     */
    get labelSizeMd(): number;

    /**
     * Default label size for small devices (sm breakpoint).
     */
    get labelSizeSm(): number;

    /**
     * Default label size for extra large devices (xl breakpoint).
     */
    get labelSizeXl(): number;

    /**
     * Default label size for extra small devices (xs breakpoint).
     */
    get labelSizeXs(): number;

    /**
     * Default label size for extra extra large devices (xxl breakpoint).
     */
    get labelSizeXxl(): number;

    // #endregion Getters And Setters
}
