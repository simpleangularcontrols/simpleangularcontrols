/**
 * Interface for file items in the file browser component
 */
export interface IBrowserFile {
    // #region Properties

    /**
     * File name
     */
    Filename: string;

    /**
     * Item is being edited
     */
    IsEditMode: boolean;

    /**
     * File size
     */
    Size: number;

    // #endregion Properties
}
