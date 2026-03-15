/**
 * Class for the request of a node
 */
export class BrowserNodeRequest {
    // #region Properties

    /**
     * Allowed file types
     */
    public AllowedTypes: string;

    /**
     * Path of the node
     */
    public Path: string;

    // #endregion Properties

    // #region Constructors

    /**
     * Constructor
     * @param init Initial values for the instance
     */
    constructor(init?: Partial<BrowserNodeRequest>) {
        Object.assign(this, init);
    }

    // #endregion Constructors
}
