/**
 * Class for API request to create a new node
 */
export class BrowserNodeNewRequest {
    // #region Properties

    /**
     * Name of the new node
     */
    public NewFoldername: string;

    /**
     * Path
     */
    public Path: string;

    // #endregion Properties

    // #region Constructors

    /**
     * Constructor
     * @param init Initial values
     */
    constructor(init?: Partial<BrowserNodeNewRequest>) {
        Object.assign(this, init);
    }

    // #endregion Constructors
}
