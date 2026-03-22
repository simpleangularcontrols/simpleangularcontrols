/**
 * Class for API request to rename a node
 */
export class BrowserNodeRenameRequest {
    // #region Properties

    /**
     * New name of the node
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
    constructor(init?: Partial<BrowserNodeRenameRequest>) {
        Object.assign(this, init);
    }

    // #endregion Constructors
}
