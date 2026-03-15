import { IBrowserFile } from './browserfile';

/**
 * Interface für Node in File Browser Component
 */
export interface IBrowserNode {
    // #region Properties

    /**
     * Child Nodes
     */
    ChildNodes: IBrowserNode[];

    /**
     * File Items in diesem Node
     */
    Files: IBrowserFile[];

    /**
     * Node wird bearbeitet
     */
    IsEditMode: boolean;

    /**
     * Node ist ausgeklappt
     */
    IsExpanded: boolean;

    /**
     * Node wurde erzeugt aber noch nicht gespeichert
     */
    IsNewNode: boolean;

    /**
     * Name des Nodes
     */
    Name: string;

    /**
     * Pfad für diesen Node
     */
    Path: string;

    // #endregion Properties
}
