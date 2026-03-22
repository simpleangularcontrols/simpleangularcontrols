import { IBrowserFile } from './browserfile';

/**
 * Interface for node in file browser component
 */
export interface IBrowserNode {
    // #region Properties

    /**
     * Child Nodes
     */
    ChildNodes: IBrowserNode[];

    /**
     * File items in this node
     */
    Files: IBrowserFile[];

    /**
     * Node is being edited
     */
    IsEditMode: boolean;

    /**
     * Node is expanded
     */
    IsExpanded: boolean;

    /**
     * Node was created but not yet saved
     */
    IsNewNode: boolean;

    /**
     * Name of the node
     */
    Name: string;

    /**
     * Path for this node
     */
    Path: string;

    // #endregion Properties
}
