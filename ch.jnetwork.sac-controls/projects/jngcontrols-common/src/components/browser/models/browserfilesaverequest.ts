/**
 * Request zum speichern einer hochgeladenen Datei
 */
export class BrowserFileSaveRequest {
  /**
   * Constructor
   * @param init Initale Parameter
   */
  constructor(init?: Partial<BrowserFileSaveRequest>) {
    Object.assign(this, init);
  }

  /**
   * Pfad in welchem der Upload gespeichert werden soll
   */
  public Path: string;
  /**
   * Upload ID
   */
  public UploadId: string;
  /**
   * Erlaubte Dateitypen
   */
  public AllowedTypes: string;
}
