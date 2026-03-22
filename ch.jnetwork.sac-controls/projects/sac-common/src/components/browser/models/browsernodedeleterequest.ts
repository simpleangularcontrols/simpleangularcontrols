/**
 * Class for API request to delete a node
 */
export class BrowserNodeDeleteRequest {
    // #region Properties

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
    constructor(init?: Partial<BrowserNodeDeleteRequest>) {
        Object.assign(this, init);
    }

    // #endregion Constructors
}
