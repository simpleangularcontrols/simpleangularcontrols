/**
 * Request zum speichern einer hochgeladenen Datei
 */
export class BrowserFileSaveRequest {
    // #region Properties

    /**
     * Erlaubte Dateitypen
     */
    public AllowedTypes: string;

    /**
     * Pfad in welchem der Upload gespeichert werden soll
     */
    public Path: string;

    /**
     * Upload ID
     */
    public UploadId: string;

    // #endregion Properties

    // #region Constructors

    /**
     * Constructor
     * @param init Initale Parameter
     */
    constructor(init?: Partial<BrowserFileSaveRequest>) {
        Object.assign(this, init);
    }

    // #endregion Constructors
}
