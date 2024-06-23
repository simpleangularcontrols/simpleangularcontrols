/**
 * Klasse für den Request eines Nodes
 */
export class BrowserNodeRequest {
  /**
   * Konstruktor
   * @param init Initale Werte für die Instanz
   */
  constructor(init?: Partial<BrowserNodeRequest>) {
    Object.assign(this, init);
  }

  /**
   * Pfad des Nodes
   */
  public Path: string;
  /**
   * Erlaubte Dateitypen
   */
  public AllowedTypes: string;
}
