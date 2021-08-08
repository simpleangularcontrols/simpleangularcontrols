import { IBrowserFile } from './browserfile';

/**
 * Interface für Node in File Browser Component
 */
export interface IBrowserNode {
  /**
   * Name des Nodes
   */
  Name: string;
  /**
   * Child Nodes
   */
  ChildNodes: IBrowserNode[];
  /**
   * File Items in diesem Node
   */
  Files: IBrowserFile[];

  /**
   * Pfad für diesen Node
   */
  Path: string;
  /**
   * Node ist ausgeklappt
   */
  IsExpanded: boolean;
  /**
   * Node wird bearbeitet
   */
  IsEditMode: boolean;
  /**
   * Node wurde erzeugt aber noch nicht gespeichert
   */
  IsNewNode: boolean;
}
