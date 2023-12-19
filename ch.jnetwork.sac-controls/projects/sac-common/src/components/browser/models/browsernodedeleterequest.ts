/**
 * Klasse für API Request zum löschen eines Nodes
 */
export class BrowserNodeDeleteRequest {
  /**
   * Konstruktor
   * @param init Initiale Werte
   */
  constructor(init?: Partial<BrowserNodeDeleteRequest>) {
    Object.assign(this, init);
  }

  /**
   * Pfad
   */
  Path: string;
}
