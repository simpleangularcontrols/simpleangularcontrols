/**
 * Interface für Datei Items in File Browser Component
 */
export interface IBrowserFile {
    // #region Properties

    /**
     * Dateiname
     */
    Filename: string;

    /**
     * Item wird bearbeitet
     */
    IsEditMode: boolean;

    /**
     * Grösse der Datei
     */
    Size: number;

    // #endregion Properties
}
