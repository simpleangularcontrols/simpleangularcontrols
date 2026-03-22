/**
 * Interface to extend FormControl with a label property used for form field labeling.
 */
export interface IAbstractControlLabelExtension {
    // #region Properties

    /**
     * Label text of the control, used for aria-labels and display labels.
     */
    controllabel: string;

    // #endregion Properties
}
