/**
 * Klasse für API Request zum umbenennen eines Nodes
 */
export class BrowserNodeRenameRequest {
    // #region Properties

    /**
     * Neuer Name des Nodes
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
    constructor(init?: Partial<BrowserNodeRenameRequest>) {
        Object.assign(this, init);
    }

    // #endregion Constructors
}
