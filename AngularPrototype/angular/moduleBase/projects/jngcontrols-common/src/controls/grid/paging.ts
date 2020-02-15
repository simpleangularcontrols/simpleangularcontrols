import { Input, Output, EventEmitter, Directive } from '@angular/core';
import { PagerData } from './model';
import { Interpolation } from '../../utilities/interpolation';

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
  protected pageSize: number = 20;

  /**
   * Pager Data Settings
   */
  pagedata: PagerData;
  //#region Input and Outputs

  /**
   * Property für Pager Data
   */
  @Input('pagerdata')
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
   * Text in Pager für 'Seite x von y'.
   * Folgende Interpolation Texte sind vorhanden:
   * {{CURRENTPAGE}}: Aktuelle Seite
   * {{TOTALPAGES}}: Anzahl Seiten
   */
  @Input('pagingtext')
  public pagingText: string = 'Seite {{CURRENTPAGE}} von {{TOTALPAGES}}';

  /**
   * Text in Page für Anzahl Seitenelemente pro Seite
   * Folgende Interpolation Texte sind vorhanden:
   * {{PAGESIZE}}: Anzahl Elemente pro Seite
   */
  @Input('pagesizetext')
  public pageSizeText: string = 'Einträge pro Seite {{PAGESIZE}}';

  /**
  * Name des Grids. Wird für ID und Name Bezeichnungen verwendet
  */
  @Input('name')
  public name: string;

  /**
   * Event wenn im Grid die Seite geändert wird. Als Parameter wird der neue PageIndex mitgegeben.
   */
  @Output('onpaging')
  _pagingEvent: EventEmitter<PagerData> = new EventEmitter<PagerData>();

  /**
   * Event wenn im Pager die PageSize geändert wird
   */
  @Output('onpagesizechanged')
  _pagesizeChangedEvent: EventEmitter<number> = new EventEmitter<number>();

  /**
   * Getter für pagesize. returns String
   */
  public GetPageSizeText(): string {
    const interpolation: Interpolation = new Interpolation();

    const data = {
      PAGESIZE: this.getPageSize()
    };

    return interpolation.interpolateString(this.pageSizeText, data);
  }

  /**
   * Die Methode erstellt den Text, der auf den Pager renderierrt wird. Current page und TotalPage
   */
  public GetPagingText(): string {
    const interpolation: Interpolation = new Interpolation();

    const data = {
      CURRENTPAGE: this.getCurrentPageNumber(),
      TOTALPAGES: this.getTotalPageNumber()
    };

    return interpolation.interpolateString(this.pagingText, data);
  }

  /**
   * Ändert die Seitegrösse
   * @param newSize: Neue Page Size
   */
  public changePageSize(newSize: number): void {
    this.pageSize = newSize;

    // Parent Controls über neue Page Size informieren
    this._pagesizeChangedEvent.emit(newSize);
  }



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
      if (totalPageCount === 0) {
        totalPageCount = 1;
      }

      // PageIndex berechnen
      this.lastPageIndex = totalPageCount - 1;
      const startPageIndex = this.getStartPageIndex(totalPageCount);
      const endPageIndex = this.getEndPageIndex(totalPageCount);

      for (let i = startPageIndex; i <= endPageIndex; i++) {
        this.paginators.push(i);
      }
    } else {
      this.paginators.push(0);
    }
  }

  /**
   * Methode löst den Event aus, dass ein Paging stattgefunden hat
   */
  protected paged(newPageIndex: number) {
    const pagerData: PagerData = new PagerData(this.pagedata.PageSize, newPageIndex, this.pagedata.TotalRowCount);
    this._pagingEvent.emit(pagerData);
  }

  /**
   * Gibt den Start Index zurück
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
   * @param totalPageCount Total Anzahl Seiten
   */
  protected getEndPageIndex(totalPageCount: number): number {
    let endingPageToDisplay = this.activePageIndex + 2;
    const maxEndingPageIndex = (4 > (totalPageCount - 1)) ? (totalPageCount - 1) : 4;

    if (endingPageToDisplay > totalPageCount - 1) {
      endingPageToDisplay = totalPageCount - 1;
    } else if (this.activePageIndex < 2) {
      endingPageToDisplay = maxEndingPageIndex;
    }
    return endingPageToDisplay;
  }

  //#endregion

  //#region Public Methods

  /**
   * Andert die Seite auf den neuen Index
   * @param newPageIndex Seiten Index. Dies entspricht der Seitenzahl - 1.
   */
  public changePage(newPageIndex: number) {
    if (this.activePageIndex !== newPageIndex) {
      this.paged(newPageIndex);
    }
  }

  /**
   * Paging auf nächste Seite
   */
  public nextPage() {
    if (this.activePageIndex !== this.lastPageIndex) {
      this.paged(this.activePageIndex + 1);
    }
  }

  /**
   * Paging eine Seite zurück
   */
  public previousPage() {
    if (this.activePageIndex !== this.firstPageIndex) {
      this.paged(this.activePageIndex - 1);
    }
  }

  /**
   * Paging auf 1. Seite
   */
  public firstPage() {
    if (this.activePageIndex !== this.firstPageIndex) {
      this.paged(0);
    }
  }

  /**
   * Paging auf letzter Seite
   */
  public lastPage() {
    if (this.activePageIndex !== this.lastPageIndex) {
      this.paged(this.lastPageIndex);
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

  /**
   * Gibt die aktuelle Pager Size zurück
   */
  public getPageSize(): number {
    return this.pageSize;
  }

  //#endregion
}

