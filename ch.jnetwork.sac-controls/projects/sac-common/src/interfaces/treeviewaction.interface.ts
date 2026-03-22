/**
 * Represents a tree view action event payload.
 */
export interface TreeviewAction {
    // #region Properties

    /**
     * Action name, e.g., 'select', 'expand', 'collapse'.
     */
    action: string;

    /**
     * Node object associated with the action.
     */
    node: any;

    // #endregion Properties
}
