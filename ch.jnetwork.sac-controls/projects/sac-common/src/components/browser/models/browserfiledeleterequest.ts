/**
 * Klasse für API Request zum löschen eines Files
 */
export class BrowserFileDeleteRequest {
    // #region Properties

    /**
     * Erlaubte Dateitypen
     */
    public AllowedTypes: string;

    /**
     * Pfad
     */
    public Path: string;

    // #endregion Properties

    // #region Constructors

    /**
     * Konstruktor
     * @param init Initale Werte der Klasse
     */
    constructor(init?: Partial<BrowserFileDeleteRequest>) {
        Object.assign(this, init);
    }

    // #endregion Constructors
}
