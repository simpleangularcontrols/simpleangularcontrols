/**
 * Klasse für API Request zum anlegen eines neuen Nodes
 */
export class BrowserNodeNewRequest {
    // #region Properties

    /**
     * Name des neuen Nodes
     */
    public NewFoldername: string;

    /**
     * Pfad
     */
    public Path: string;

    // #endregion Properties

    // #region Constructors

    /**
     * Konstruktor
     * @param init Initiale Werte
     */
    constructor(init?: Partial<BrowserNodeNewRequest>) {
        Object.assign(this, init);
    }

    // #endregion Constructors
}
