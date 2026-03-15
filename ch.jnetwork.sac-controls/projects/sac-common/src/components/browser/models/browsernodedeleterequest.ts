/**
 * Klasse für API Request zum löschen eines Nodes
 */
export class BrowserNodeDeleteRequest {
    // #region Properties

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
    constructor(init?: Partial<BrowserNodeDeleteRequest>) {
        Object.assign(this, init);
    }

    // #endregion Constructors
}
