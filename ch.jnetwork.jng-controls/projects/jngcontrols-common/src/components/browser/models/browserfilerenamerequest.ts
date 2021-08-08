/**
 * Klasse für den API Request zum umbenennen einer Datei
 */
export class BrowserFileRenameRequest {
  /**
   * Konstruktor
   * @param init Initiale Werte
   */
  constructor(init?: Partial<BrowserFileRenameRequest>) {
    Object.assign(this, init);
  }

  /**
   * Pfad zu Datei
   */
  Path: string;
  /**
   * Neuer Dateiname
   */
  NewFilename: string;
  /**
   * Erlaubte Dateierweiterungen
   */
  AllowedTypes: string;
}
