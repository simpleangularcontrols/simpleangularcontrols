/**
 * Interface für Datei Items in File Browser Component
 */
export interface IBrowserFile {
  /**
   * Dateiname
   */
  Filename: string;
  /**
   * Grösse der Datei
   */
  Size: number;
  /**
   * Item wird bearbeitet
   */
  IsEditMode: boolean;
}
