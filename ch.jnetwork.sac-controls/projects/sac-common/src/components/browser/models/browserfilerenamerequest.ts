/**
 * Klasse für den API Request zum umbenennen einer Datei
 */
export class BrowserFileRenameRequest {
    // #region Properties

    /**
     * Erlaubte Dateierweiterungen
     */
    public AllowedTypes: string;

    /**
     * Neuer Dateiname
     */
    public NewFilename: string;

    /**
     * Pfad zu Datei
     */
    public Path: string;

    // #endregion Properties

    // #region Constructors

    /**
     * Konstruktor
     * @param init Initiale Werte
     */
    constructor(init?: Partial<BrowserFileRenameRequest>) {
        Object.assign(this, init);
    }

    // #endregion Constructors
}
