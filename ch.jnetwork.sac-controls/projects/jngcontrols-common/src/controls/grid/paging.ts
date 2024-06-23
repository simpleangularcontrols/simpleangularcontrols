import {
  Directive,
  EventEmitter,
  Injector,
  Input,
  Output,
} from '@angular/core';
import { Observable } from 'rxjs';
import { ISacLocalisationService } from '../../interfaces/ISacLocalisationService';
import { ISacValidationKeyService } from '../../interfaces/ISacValidationKeyService';
import {
  SACLOCALISATION_SERVICE,
  SacDefaultLocalisationService,
} from '../../services/sac-localisation.service';
import {
  SACVALIDATIONKEY_SERVICE,
  SacDefaultValidationKeyService,
} from '../../services/sac-validationkey.service';
import { PagerData, PagerRequest } from './model';

/**
 * Basiskomponente für Paging
 */
@Directive()
export abstract class SacPagingCommon {
  // #region Properties

  /**
   * Service to receive standard validation message keys and texts
   */
  private validationKeyService: ISacValidationKeyService;

  /**
   * Service für Error Localisation
   */
  protected lngResourceService: ISacLocalisationService;
  /**
   * Total Anzahl Rows
   */
  protected totalRowCount: number = 0;

  /**
   * Name des Grids. Wird für ID und Name Bezeichnungen verwendet
   */
  @Input()
  public name: string;
  /**
   * Auswahl der Seitengrösse deaktivieren
   */
  @Input()
  public pagesizedisabled: boolean = false;
  /**
   * Text in Page für Anzahl Seitenelemente pro Seite
   * Folgende Interpolation Texte sind vorhanden:
   * {{PAGESIZE}}: Anzahl Elemente pro Seite
   */
  @Input()
  public pagesizes: string = '20|50|100';
  /**
   * Text in Page für Anzahl Seitenelemente pro Seite
   * Folgende Interpolation Texte sind vorhanden:
   * {{PAGESIZE}}: Anzahl Elemente pro Seite
   */
  @Input()
  public pagesizetext: string = '';
  /**
   * Text in Pager für 'Seite x von y'.
   * Folgende Interpolation Texte sind vorhanden:
   * {{CURRENTPAGE}}: Aktuelle Seite
   * {{TOTALPAGES}}: Anzahl Seiten
   */
  @Input()
  public pagingtext: string = '';
  /**
   * Event wenn im Grid die Seite geändert wird. Als Parameter wird der neue PageIndex mitgegeben.
   */
  @Output()
  public paging: EventEmitter<PagerRequest> = new EventEmitter<PagerRequest>();

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
   * Anzahl Elemente pro Seite
   */
  public pageSize: number = 20;
  /**
   * Item für jedes Paging Element (Seitenzahl)
   */
  public paginators: Array<any> = [];

  // #endregion Properties

  // #region Constructors

  /**
   * Konstruktor
   * Inject des Formulars
   * @parent SacFormCommon
   * @injector Injector
   */
  constructor(injector: Injector) {
    this.validationKeyService = injector.get(
      SACVALIDATIONKEY_SERVICE,
      new SacDefaultValidationKeyService()
    );

    // Set Default Values from Injector
    this.pagesizetext = this.validationKeyService.PagingEntries;
    this.pagingtext = this.validationKeyService.PagingPageOf;

    this.lngResourceService = injector.get(
      SACLOCALISATION_SERVICE,
      new SacDefaultLocalisationService(this.validationKeyService)
    );
  }

  // #endregion Constructors

  // #region Public Getters And Setters

  /**
   * Property für Pager Data
   */
  @Input()
  public set pagerdata(p: PagerData) {
    if (p != null) {
      this.totalRowCount = p.TotalRowCount;
      this.activePageIndex = p.CurrentPageIndex;
      this.pageSize = p.PageSize;
    }

    this.createPager();
  }

  /**
   * Property mit Text für Total Einträge in Seite
   */
  public get PageSizeText(): Observable<string> {
    return this.lngResourceService.GetString(this.pagesizetext);
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
   * Gibt die Page Sizes als Number Array zurück
   */
  public get getPageSizes(): number[] {
    return this.pagesizes.split('|').map((itm) => Number(itm));
  }

  // #endregion Public Getters And Setters

  // #region Public Methods

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
   * Paging auf 1. Seite
   */
  public firstPage() {
    if (this.activePageIndex !== this.firstPageIndex) {
      this.paged(0);
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
   * Paging auf letzter Seite
   */
  public lastPage() {
    if (this.activePageIndex !== this.lastPageIndex) {
      this.paged(this.lastPageIndex);
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

  // #endregion Public Methods

  // #region Protected Methods

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
   * Methode löst den Event aus, dass ein Paging stattgefunden hat
   */
  protected paged(newPageIndex: number) {
    const pagerData: PagerRequest = new PagerRequest(
      this.pageSize,
      newPageIndex
    );
    this.paging.emit(pagerData);
  }

  // #endregion Protected Methods
}
