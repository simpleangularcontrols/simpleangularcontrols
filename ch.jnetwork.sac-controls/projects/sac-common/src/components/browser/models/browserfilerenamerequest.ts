/**
 * Class for API request to rename a file
 */
export class BrowserFileRenameRequest {
    // #region Properties

    /**
     * Allowed file extensions
     */
    public AllowedTypes: string;

    /**
     * New file name
     */
    public NewFilename: string;

    /**
     * Path to file
     */
    public Path: string;

    // #endregion Properties

    // #region Constructors

    /**
     * Constructor
     * @param init Initial values
     */
    constructor(init?: Partial<BrowserFileRenameRequest>) {
        Object.assign(this, init);
    }

    // #endregion Constructors
}
