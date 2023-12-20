/**
 * Model für Pager Settings
 */
export class PagerData {

  /**
   * Konstruktor
   * @param PageSize Anzahl Elemente pro Seite
   * @param CurrentPageIndex Aktuelle Seite
   * @param TotalRowCount Total Rows in Datenbank
   */
  constructor(PageSize: number, CurrentPageIndex: number, TotalRowCount: number) {
    this.PageSize = PageSize;
    this.CurrentPageIndex = CurrentPageIndex;
    this.TotalRowCount = TotalRowCount;
  }

  /**
   * Gesamte Anzahl der Zeilen
  */
  TotalRowCount = 0;

  /**
   * Aktueller Index der Seite
   */
  CurrentPageIndex = 0;

  /**
   * PageSize
   */
  PageSize = 20;
}

/**
 * Model wenn Seite geändert werden soll
 */
export class PagerRequest {

  /**
   * Konstruktor
   * @param PageSize Seitegrösse / Anzahl Elemente pro Seite
   * @param NewPageIndex Neuer Seitenindex
   */
  constructor(PageSize: number, NewPageIndex: number) {
    this.PageSize = PageSize;
    this.NewPageIndex = NewPageIndex;
  }

  /**
   * Aktueller Index der Seite
   */
  PageSize: number = 0;

  /**
   * PageSize
   */
  NewPageIndex: number = 0;

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
  Data: T[];
}

/**
 * Model für Sortierung
 */
export class SortDescriptor {
  /**
   * Konstruktor
   * @param sortcolumn Column die Sortiert wird
   * @param sortorder Art der Sortierung
   */
  constructor(sortcolumn?: string, sortorder?: SortOrder) {
    this.SortColumn = sortcolumn;
    this.SortOrder = sortorder;
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
