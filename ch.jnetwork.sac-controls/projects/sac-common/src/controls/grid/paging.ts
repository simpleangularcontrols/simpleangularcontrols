import {
  Directive,
  EventEmitter,
  Injector,
  Input,
  Output,
} from '@angular/core';
import { Observable } from 'rxjs';
import { ISacLocalisationService } from '../../interfaces/isaclocalisationservice';
import {
  InternalSacLocalisationService,
  SACLOCALISATION_SERVICE,
} from '../../services/sac-localisation.service';
import { PagerData, PagerRequest } from './model';

/**
 * Basiskomponente für Paging
 */
@Directive()
export abstract class SacPagingCommon {
  /**
   * Service für Error Localisation
   */
  protected lngResourceService: ISacLocalisationService;

  // #region Constructor

  /**
   * Konstruktor
   * Inject des Formulars
   * @parent SacFormCommon
   * @injector Injector
   */
  constructor(private injector: Injector) {
    this.lngResourceService = injector.get(
      SACLOCALISATION_SERVICE,
      new InternalSacLocalisationService()
    );
  }

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
   * Anzahl Elemente pro Seite
   */
  pageSize: number = 20;

  //#region Input and Outputs

  /**
   * Property für Pager Data
   */
  @Input()
  set pagerdata(p: PagerData) {
    if (p != null) {
      this.totalRowCount = p.TotalRowCount;
      this.activePageIndex = p.CurrentPageIndex;
      this.pageSize = p.PageSize;
    }

    this.createPager();
  }

  /**
   * Text in Pager für 'Seite x von y'.
   * Folgende Interpolation Texte sind vorhanden:
   * {{CURRENTPAGE}}: Aktuelle Seite
   * {{TOTALPAGES}}: Anzahl Seiten
   */
  @Input()
  public pagingtext: string = 'PAGING_PAGEOFTEXT';

  /**
   * Text in Page für Anzahl Seitenelemente pro Seite
   * Folgende Interpolation Texte sind vorhanden:
   * {{PAGESIZE}}: Anzahl Elemente pro Seite
   */
  @Input()
  public pagesizetext: string = 'PAGING_PAGEENTRIESTEXT';

  /**
   * Text in Page für Anzahl Seitenelemente pro Seite
   * Folgende Interpolation Texte sind vorhanden:
   * {{PAGESIZE}}: Anzahl Elemente pro Seite
   */
  @Input()
  public pagesizes: string = '20|50|100';

  /**
   * Auswahl der Seitengrösse deaktivieren
   */
  @Input()
  public pagesizedisabled: boolean = false;

  /**
   * Gibt die Page Sizes als Number Array zurück
   */
  public get getPageSizes(): number[] {
    return this.pagesizes.split('|').map((itm) => Number(itm));
  }

  /**
   * Name des Grids. Wird für ID und Name Bezeichnungen verwendet
   */
  @Input()
  public name: string;

  /**
   * Event wenn im Grid die Seite geändert wird. Als Parameter wird der neue PageIndex mitgegeben.
   */
  @Output()
  paging: EventEmitter<PagerRequest> = new EventEmitter<PagerRequest>();

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

      // Index Fix wenn Aktive Seite grösser als letze Seite
      if (this.activePageIndex > this.lastPageIndex) {
        this.activePageIndex = this.lastPageIndex;
      }

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
    const pagerData: PagerRequest = new PagerRequest(
      this.pageSize,
      newPageIndex
    );
    this.paging.emit(pagerData);
  }

  /**
   * Gibt den Start Index zurück
   * @param totalPageCount Total Anzahl Seiten
   */
  protected getStartPageIndex(totalPageCount: number): number {
    let startingPageToDisplay: number = 0;
    startingPageToDisplay = this.activePageIndex - 2;

    if (totalPageCount - this.activePageIndex - 1 < 2) {
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
    const maxEndingPageIndex = 4 > totalPageCount - 1 ? totalPageCount - 1 : 4;

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
   * Ändert die Seitengrösse im Pager
   * @param newSize Neue Anzahl Elemente pro Seite
   */
  public changePageSize(newSize: number) {
    const pagerData: PagerRequest = new PagerRequest(
      newSize,
      this.activePageIndex
    );
    this.paging.emit(pagerData);
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
   * Text mit Aktueller Seite und Total Seiten
   */
  public get PagingText(): Observable<string> {
    return this.lngResourceService.GetString(this.pagingtext, {
      CURRENTPAGE: this.getCurrentPageNumber(),
      TOTALPAGES: this.getTotalPageNumber(),
    });
  }

  /**
   * Property mit Text für Total Einträge in Seite
   */
  public get PageSizeText(): Observable<string> {
    return this.lngResourceService.GetString(this.pagesizetext);
  }

  //#endregion
}
