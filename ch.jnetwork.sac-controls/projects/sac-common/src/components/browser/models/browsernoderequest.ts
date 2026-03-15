/**
 * Klasse für den Request eines Nodes
 */
export class BrowserNodeRequest {
    // #region Properties

    /**
     * Erlaubte Dateitypen
     */
    public AllowedTypes: string;

    /**
     * Pfad des Nodes
     */
    public Path: string;

    // #endregion Properties

    // #region Constructors

    /**
     * Konstruktor
     * @param init Initale Werte für die Instanz
     */
    constructor(init?: Partial<BrowserNodeRequest>) {
        Object.assign(this, init);
    }

    // #endregion Constructors
}
