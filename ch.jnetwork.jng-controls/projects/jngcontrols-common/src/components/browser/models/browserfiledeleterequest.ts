/**
 * Klasse für API Request zum löschen eines Files
 */
export class BrowserFileDeleteRequest {
  /**
   * Konstruktor
   * @param init Initale Werte der Klasse
   */
  constructor(init?: Partial<BrowserFileDeleteRequest>) {
    Object.assign(this, init);
  }

  /**
   * Pfad
   */
  Path: string;
  /**
   * Erlaubte Dateitypen
   */
  AllowedTypes: string;
}
