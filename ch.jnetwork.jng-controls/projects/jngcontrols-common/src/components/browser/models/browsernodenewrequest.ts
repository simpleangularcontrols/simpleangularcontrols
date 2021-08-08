/**
 * Klasse für API Request zum anlegen eines neuen Nodes
 */
export class BrowserNodeNewRequest {
  /**
   * Konstruktor
   * @param init Initiale Werte
   */
  constructor(init?: Partial<BrowserNodeNewRequest>) {
    Object.assign(this, init);
  }

  /**
   * Pfad
   */
  Path: string;
  /**
   * Name des neuen Nodes
   */
  NewFoldername: string;
}
