/**
 * Request to save an uploaded file
 */
export class BrowserFileSaveRequest {
    // #region Properties

    /**
     * Allowed file types
     */
    public AllowedTypes: string;

    /**
     * Path where the upload should be saved
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
     * @param init Initial parameters
     */
    constructor(init?: Partial<BrowserFileSaveRequest>) {
        Object.assign(this, init);
    }

    // #endregion Constructors
}
