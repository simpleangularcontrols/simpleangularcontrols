import {
  ChangeDetectorRef,
  Directive,
  EventEmitter,
  Injector,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';
import { ISacValidationKeyService } from '../../interfaces/ISacValidationKeyService';
import {
  SACVALIDATIONKEY_SERVICE,
  SacDefaultValidationKeyService,
} from '../../services';
import { PagerData, PagerRequest, SortDescriptor, SortOrder } from './model';

/**
 * Basic component for SacGrid
 */
@Directive()
export abstract class SacGridCommon {
  // #region Properties

  /**
   * Page number of the active page.
   */
  protected activePage: number = 1;
  /**
   * Contains the number of the first page displayed in Pager.
   */
  protected firstPageNumber: number = 1;
  /**
   * Contains the number of the last page in Pager. The value is calculated automatically.
   */
  protected lastPageNumber: number;
  /**
   * Contains Array of Pages.
   */
  protected paginators: Array<any> = [];

  /**
   * Input property for Body.
   */
  @Input() public body: TemplateRef<any>;
  /**
   * Text which is displayed if no rows are available.
   */
  @Input()
  public emptytext: string;
  /**
   * Property for headers.
   */
  @Input() public headers: TemplateRef<any>;
  /**
   * Property for the maximum pages that are visible.
   */
  @Input() public maxvisiblepagenumbers: number;
  /**
   * Control Name. Used to generate the ID and names.
   */
  @Input()
  public name: string;
  /**
   * Pager configuration. Pager can be switched off by setting PagerData to `null`.
   */
  @Input()
  public pagerdata: PagerData;
  /**
   * Deactivates the selection of the PageSize in the pager
   */
  @Input()
  public pagesizedisabled: boolean = false;
  /**
   * Defines the number of elements per page that can be selected. The default is 20, 50 and 100. The values must be separated with a `|`.
   */
  @Input()
  public pagesizes: string = '20|50|100';
  /**
   * Text in Page for number of page elements per page. The following interpolation texts are available:
   *
   * {{PAGESIZE}}: Number of elements per page
   */
  @Input()
  public pagesizetext: string;
  /**
   * Text in pager for 'Page x of y'. The following interpolation texts are available:
   *
   * {{CURRENTPAGE}}: Current page
   *
   * {{TOTALPAGES}}: Number of pages
   */
  @Input()
  public pagingtext: string;
  /**
   * Grid data
   */
  @Input()
  public value: any;
  /**
   * Event when the pager is clicked.
   */
  @Output() public paging: EventEmitter<PagerRequest> =
    new EventEmitter<PagerRequest>();
  /**
   * Event when a header is clicked so that the grid is sorted.
   */
  @Output() public sorting: EventEmitter<SortDescriptor> =
    new EventEmitter<SortDescriptor>();

  /**
   * Number of columns in the grid
   */
  public ColumnCount: number = 0;
  /**
   * Column by which currently sorted.
   */
  public sortColumn: string = '';
  /**
   * Current direction of sorting
   */
  public sortDirection: SortOrder = SortOrder.None;
  /**
   * Service with the validation keys. Is required to load the default texts for the pager etc.
   */
  public validationKeyService: ISacValidationKeyService;

  // #endregion Properties

  // #region Constructors

  /**
   * Constructor
   * @param cd Change Detection Service
   * @param injector DI Injector
   */
  constructor(private cd: ChangeDetectorRef, injector: Injector) {
    this.validationKeyService = injector.get(
      SACVALIDATIONKEY_SERVICE,
      new SacDefaultValidationKeyService()
    );

    // Set Default Values from Injector
    this.pagesizetext = this.validationKeyService.PagingEntries;
    this.pagingtext = this.validationKeyService.PagingPageOf;
  }

  // #endregion Constructors

  // #region Public Getters And Setters

  /**
   * Model for sorting
   * @param sortDescription Settings for current sorting
   */
  @Input()
  public set sortdata(sortDescription: SortDescriptor) {
    this.sortColumn = sortDescription.SortColumn;
    this.sortDirection = sortDescription.SortOrder;
  }

  // #endregion Public Getters And Setters

  // #region Public Methods

  /**
   * The method increases the column elements by one
   */
  public RegisterColumn() {
    this.ColumnCount++;
    // Detect Changes, as ColumnChange is executed after OnInit.
    this.cd.detectChanges();
  }

  /**
   * Method for sorting the data.
   */
  public SortBy(command) {
    let direction: SortOrder;

    if (command === this.sortColumn) {
      switch (this.sortDirection) {
        case SortOrder.None:
        case SortOrder.Descending:
          direction = SortOrder.Ascending;
          break;
        case SortOrder.Ascending:
          direction = SortOrder.Descending;
          break;
      }
    } else {
      direction = SortOrder.Ascending;
    }

    const result: SortDescriptor = new SortDescriptor();
    result.SortColumn = command;
    result.SortOrder = direction;

    this.sorting.emit(result);
  }

  /**
   * The method reduces the column elements by one
   */
  public UnregisterColumn() {
    this.ColumnCount--;
  }

  /**
   * Method if Grid is to switch to a new page.
   * @param newStartIndex New Page Index (Zero-Based)
   */
  public pageChange(newStartIndex) {
    this.paging.emit(newStartIndex);
  }

  // #endregion Public Methods
}
