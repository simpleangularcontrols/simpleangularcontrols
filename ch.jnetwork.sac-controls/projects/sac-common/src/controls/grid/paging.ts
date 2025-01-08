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
 * Basic component for paging
 */
@Directive()
export abstract class SacPagingCommon {
  // #region Properties

  /**
   * Service to receive standard validation message keys and texts
   */
  private validationKeyService: ISacValidationKeyService;

  /**
   * Service for error localization
   */
  protected lngResourceService: ISacLocalisationService;
  /**
   * Total number of rows
   */
  protected totalRowCount: number = 0;

  /**
   * Name of the grid. Used for ID and name designations
   */
  @Input()
  public name: string;
  /**
   * Deactivate page size selection
   */
  @Input()
  public pagesizedisabled: boolean = false;
  /**
   * Text in Page for number of page elements per page. The following interpolation texts are available:
   *
   * {{PAGESIZE}}: Number of elements per page
   */
  @Input()
  public pagesizes: string = '20|50|100';
  /**
   * Text in Page for number of page elements per page. The following interpolation texts are available:
   *
   * {{PAGESIZE}}: Number of elements per page
   */
  @Input()
  public pagesizetext: string = '';
  /**
   * Text in pager for 'Page x of y'. The following interpolation texts are available:
   * {{CURRENTPAGE}}: Current page
   * {{TOTALPAGES}}: Number of pages
   */
  @Input()
  public pagingtext: string = '';
  /**
   * Event when the page is changed in the grid. The new PageIndex is given as a parameter.
   */
  @Output()
  public paging: EventEmitter<PagerRequest> = new EventEmitter<PagerRequest>();

  /**
   * Active page index
   */
  public activePageIndex: number = 0;
  /**
   * First page index
   */
  public firstPageIndex: number = 0;
  /**
   * Last page index
   */
  public lastPageIndex: number = 0;
  /**
   * Number of elements per page
   */
  public pageSize: number = 20;
  /**
   * Item for each paging element (page number)
   */
  public paginators: Array<any> = [];

  // #endregion Properties

  // #region Constructors

  /**
   * Constructor
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
   * Property for Pager Data
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
   * Property with text for total entries in page
   */
  public get PageSizeText(): Observable<string> {
    return this.lngResourceService.GetString(this.pagesizetext);
  }

  /**
   * Text with current page and total pages
   */
  public get PagingText(): Observable<string> {
    return this.lngResourceService.GetString(this.pagingtext, {
      CURRENTPAGE: this.getCurrentPageNumber(),
      TOTALPAGES: this.getTotalPageNumber(),
    });
  }

  /**
   * Returns the page sizes as a number array
   */
  public get getPageSizes(): number[] {
    return this.pagesizes.split('|').map((itm) => Number(itm));
  }

  // #endregion Public Getters And Setters

  // #region Public Methods

  /**
   * Changes the page to the new index
   * @param newPageIndex Page index. This corresponds to the page number - 1.
   */
  public changePage(newPageIndex: number) {
    if (this.activePageIndex !== newPageIndex) {
      this.paged(newPageIndex);
    }
  }

  /**
   * Changes the page size in the pager
   * @param newSize New number of elements per page
   */
  public changePageSize(newSize: number) {
    const pagerData: PagerRequest = new PagerRequest(
      newSize,
      this.activePageIndex
    );
    this.paging.emit(pagerData);
  }

  /**
   *Switch to 1st page
   */
  public firstPage() {
    if (this.activePageIndex !== this.firstPageIndex) {
      this.paged(0);
    }
  }

  /**
   * Returns the current page number
   */
  public getCurrentPageNumber(): number {
    return this.activePageIndex + 1;
  }

  /**
   * Returns the total number of pages
   */
  public getTotalPageNumber(): number {
    return this.lastPageIndex + 1;
  }

  /**
   * Paging on last page
   */
  public lastPage() {
    if (this.activePageIndex !== this.lastPageIndex) {
      this.paged(this.lastPageIndex);
    }
  }

  /**
   * Paging to next page
   */
  public nextPage() {
    if (this.activePageIndex !== this.lastPageIndex) {
      this.paged(this.activePageIndex + 1);
    }
  }

  /**
   * Paging one page back
   */
  public previousPage() {
    if (this.activePageIndex !== this.firstPageIndex) {
      this.paged(this.activePageIndex - 1);
    }
  }

  // #endregion Public Methods

  // #region Protected Methods

  /**
   * Generates the pager data
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
   * Returns the last page index.
   * @param totalPageCount Total number of pages
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
   * Returns the start index
   * @param totalPageCount Total number of pages
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
   * method triggers the event that paging has taken place
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
