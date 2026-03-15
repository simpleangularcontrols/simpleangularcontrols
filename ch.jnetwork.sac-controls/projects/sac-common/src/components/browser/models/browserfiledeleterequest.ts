/**
 * Class for API request to delete a file
 */
export class BrowserFileDeleteRequest {
    // #region Properties

    /**
     * Allowed file types
     */
    public AllowedTypes: string;

    /**
     * Path
     */
    public Path: string;

    // #endregion Properties

    // #region Constructors

    /**
     * Constructor
     * @param init Initial values for the class
     */
    constructor(init?: Partial<BrowserFileDeleteRequest>) {
        Object.assign(this, init);
    }

    // #endregion Constructors
}
