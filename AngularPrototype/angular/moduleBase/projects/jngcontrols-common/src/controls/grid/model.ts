/**
 * Model für Pager Settings
 */
export class PagerData {

    /**
     * Konstruktor
     * 
     * @param PageSize Anzahl Elemente pro Seite
     * @param CurrentPageIndex Aktuelle Seite
     * @param TotalRowCount Total Rows in Datenbank
     */
    constructor(PageSize?: number, CurrentPageIndex?: number, TotalRowCount?: number) {
        this.PageSize = PageSize;
        this.CurrentPageIndex = CurrentPageIndex;
        this.TotalRowCount = TotalRowCount;
    }

    /**
     * Gesamte Anzahl der Zeilen
    */
    TotalRowCount: number = 0;

    /**
     * Aktueller Index der Seite
     */
    CurrentPageIndex: number = 0;

    /**
     * PageSize
     */
    PageSize: number = 0;
}

/**
 * GridResponse-Klasse
 */
export class GridResponse<T> {
    /**
     * Gesamte Anzahl der Zeilen
     */
    TotalRowCount: number;
    /**
     * Data
     */
    Data: T[]
}

/**
 * Model für Sortierung
 */
export class SortDescriptor {
  /**
   * Konstruktor
   * 
   * @param SortColumn Column die Sortiert wird
   * @param SortOrder Art der Sortierung
   */
  constructor(SortColumn?: string, SortOrder?: SortOrder) {
    this.SortColumn = SortColumn;
    this.SortOrder = SortOrder;
  }

  /**
   * Bezeichnung / Key für Sortierung
   */
  SortColumn: string;

  /**
   * Sortierung
   */
  SortOrder: SortOrder;
}

/**
 * Enum für Sortierung
 */
export enum SortOrder {
    None = 0,
    Ascending = 1,
    Descending = 2
}
