import { Input, Output, EventEmitter } from "@angular/core";
import { PagerData } from "./model";

/**
 * Basiskomponente für Paging
 */
export abstract class NgPagingCommon {

  /**
   * Konstruktor
   */
  constructor() { }

  /**
   * Item für jedes Paging Element (Seitenzahl)
   */
  public paginators: Array<any> = [];

  /**
   * Aktiver Seitenindex
   */
  public activePageIndex: number = 0;

  /**
   * Erster Seitenindex
   */
  public firstPageIndex: number = 0;

  /**
   * Letzter Seitenindex
   */
  public lastPageIndex: number = 0;

  /**
   * Total Anzahl Rows
   */
  protected totalRowCount: number = 0;

  /**
   * Anzahl Rows pro Seite
   */
  protected pageSize: number = 25;

  /**
   * Pager Data Settings
   */
  pagedata: PagerData;
  //#region Input and Outputs

  /**
   * Property für Pager Data
   */
  @Input("pagerdata")
  set PagerData(p: PagerData) {
    if (p != null) {
      this.totalRowCount = p.TotalRowCount;
      this.activePageIndex = p.CurrentPageIndex;
      this.pageSize = p.PageSize;
      this.pagedata = p;
    }

    this.createPager();
  }

  /**
   * Event wenn im Grid die Seite geändert wird. Als Parameter wird der neue PageIndex mitgegeben.
   */
  @Output("onpaging")
  _pagingEvent: EventEmitter<number> = new EventEmitter();

  /**
   * Name des Grids. Wird für ID und Name Bezeichnungen verwendet
   */
  @Input("name")
  public name: string

  //#endregion

  //#region Protected Methods

  /**
   * Erzeugt die Pager Daten
   */
  protected createPager() {
    this.paginators = [];

    if (this.totalRowCount > 0) {
      let totalPageCount = Math.ceil(this.totalRowCount / this.pageSize);

      // PageCount auf 1 stellen, wenn keine Records vorhanden sind.
      if (totalPageCount === 0)
        totalPageCount = 1;

      // PageIndex berechnen
      this.lastPageIndex = totalPageCount - 1;
      let startPageIndex = this.getStartPageIndex(totalPageCount);
      let endPageIndex = this.getEndPageIndex(totalPageCount);

      for (let i = startPageIndex; i <= endPageIndex; i++) {
        this.paginators.push(i);
      }
    }
    else {
      this.paginators.push(0);
    }
  }

  /**
   * Methode löst den Event aus, dass ein Paging stattgefunden hat
   */
  protected paged() {
    this._pagingEvent.emit(this.activePageIndex);
  }

  /**
   * Gibt den Start Index zurück
   * 
   * @param totalPageCount Total Anzahl Seiten
   */
  protected getStartPageIndex(totalPageCount: number): number {

    let startingPageToDisplay: number = 0;
    startingPageToDisplay = this.activePageIndex - 2;

    if ((totalPageCount - this.activePageIndex - 1) < 2) {
      startingPageToDisplay = totalPageCount - 5;
    }
    if (startingPageToDisplay < 0) {
      startingPageToDisplay = 0;
    }
    return startingPageToDisplay;
  }

  /**
   * Gibt den letzten Seitenindex zurück.
   * 
   * @param totalPageCount Total Anzahl Seiten
   */
  protected getEndPageIndex(totalPageCount: number): number {
    let endingPageToDisplay = this.activePageIndex + 2;
    let maxEndingPageIndex = (4 > (totalPageCount - 1)) ? (totalPageCount - 1) : 4;

    if (endingPageToDisplay > totalPageCount - 1) {
      endingPageToDisplay = totalPageCount - 1;
    }
    else if (this.activePageIndex < 2) {
      endingPageToDisplay = maxEndingPageIndex;
    }
    return endingPageToDisplay;
  }

  //#endregion

  //#region Public Methods

  /**
   * Andert die Seite auf den neuen Index
   * 
   * @param newPageIndex Seiten Index. Dies entspricht der Seitenzahl - 1.
   */
  public changePage(newPageIndex: number) {
    if (this.activePageIndex !== newPageIndex) {
      console.log("NgPagingCommon: change page to index " + newPageIndex);

      this.activePageIndex = newPageIndex;
      this.paged();
    }
  }

  /**
   * Paging auf nächste Seite
   */
  public nextPage() {
    if (this.activePageIndex != this.lastPageIndex) {
      console.log("NgPagingCommon: nextPage called");

      this.activePageIndex += 1;
      this.paged();
    }
  }

  /**
   * Paging eine Seite zurück
   */
  public previousPage() {
    if (this.activePageIndex != this.firstPageIndex) {
      console.log("NgPagingCommon: previousPage called");

      this.activePageIndex -= 1;
      this.paged();
    }
  }

  /**
   * Paging auf 1. Seite
   */
  public firstPage() {
    if (this.activePageIndex != this.firstPageIndex) {
      console.log("NgPagingCommon: firstPage called");

      this.activePageIndex = 0;
      this.paged();
    }
  }

  /**
   * Paging auf letzter Seite
   */
  public lastPage() {
    if (this.activePageIndex != this.lastPageIndex) {
      console.log("NgPagingCommon: lastPage called");

      this.activePageIndex = this.lastPageIndex;
      this.paged();
    }
  }

  /**
   * Gibt die aktuelle Seitenzahl zurück
   */
  public getCurrentPageNumber(): number {
    return this.activePageIndex + 1;
  }

  /**
   * Gibt die totale Anzahl Seiten zurück
   */
  public getTotalPageNumber(): number {
    return this.lastPageIndex + 1;
  }

  //#endregion
}

