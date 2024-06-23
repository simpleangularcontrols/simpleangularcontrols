/**
 * Klasse für API Request zum umbenennen eines Nodes
 */
export class BrowserNodeRenameRequest {
  /**
   * Konstruktor
   * @param init Initiale Werte
   */
  constructor(init?: Partial<BrowserNodeRenameRequest>) {
    Object.assign(this, init);
  }

  /**
   * Pfad
   */
  Path: string;
  /**
   * Neuer Name des Nodes
   */
  NewFoldername: string;
}
