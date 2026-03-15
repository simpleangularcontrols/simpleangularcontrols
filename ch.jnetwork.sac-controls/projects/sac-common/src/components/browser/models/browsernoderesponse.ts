import { IBrowserNode } from './browsernode';

/**
 * Interface für Antworten an den Browser Service
 */
export interface IBrowserNodeResponse {
    // #region Properties

    /**
     * Node
     */
    Node: IBrowserNode;

    // #endregion Properties
}
