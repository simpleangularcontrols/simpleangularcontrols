import {
  Directive,
  ElementRef,
  Injector,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ISacIconService } from '../../interfaces/ISacIconService';
import { SACICON_SERVICE, SacDefaultIconService } from '../../services';
import { SacGridCommon } from './grid';
import { SortOrder } from './model';

/**
 * Base component for GridColumn
 */
@Directive()
export class SacGridColumnBaseCommon implements OnInit, OnDestroy {
  // #region Properties

  /**
   * icon service for reading the icons
   */
  protected iconService: ISacIconService;

  /**
   * Value of the cell if the type is `header`.
   */
  @Input()
  public header: string;
  /**
   * Name of the column
   */
  @Input()
  public name: any;
  /**
   * Key for sorting the column
   */
  @Input()
  public sortkey: string;
  /**
   * Type of column. Can contain the values `header`,`footer` and `body`.
   */
  @Input()
  public type: string;
  /**
   * Value of the cell if the type is `body`
   */
  @Input()
  public value: any;
  /**
   * Column width
   */
  @Input()
  public width: string;

  // #endregion Properties

  // #region Constructors

  /**
   * Constructor
   * @param grid  reference to grid component
   * @param injector di injector to resolve icon service
   * @param el reference to html element
   */
  constructor(
    private grid: SacGridCommon,
    protected injector: Injector,
    private el: ElementRef
  ) {
    this.iconService = injector.get(
      SACICON_SERVICE,
      new SacDefaultIconService()
    );
  }

  // #endregion Constructors

  // #region Public Getters And Setters

  /**
   * sort down icon for grid header
   */
  public get IconSortDown(): string {
    return this.iconService.GridComponentSortDown;
  }

  /**
   * sort up icon for grid header
   */
  public get IconSortUp(): string {
    return this.iconService.GridComponentSortUp;
  }

  // #endregion Public Getters And Setters

  // #region Public Methods

  /**
   * Indicates the direction of sorting. The possible values are `none`,`asc`,`desc`
   */
  public GetSortDirection(): string {
    switch (this.grid.sortDirection) {
      case SortOrder.None:
        return 'none';
      case SortOrder.Ascending:
        return 'asc';
      case SortOrder.Descending:
        return 'desc';
      default:
        return 'none';
    }
  }

  /**
   * Defines whether the element is a cell in the table.
   */
  public IsBody(): boolean {
    return this.type === 'body';
  }

  /**
   * Defines whether the element is a cell in the footer of the table
   */
  public IsFooter(): boolean {
    return this.type === 'footer';
  }

  /**
   * Defines whether the element is a cell in the table header
   */
  public IsHeader(): boolean {
    return this.type === 'header';
  }

  /**
   * Defines whether this column is sorted.
   */
  public IsSortedColumn(): boolean {
    return this.grid.sortColumn === this.sortkey;
  }

  /**
   * Triggers the events so that the table is sorted according to this column.
   */
  public SortByColumn() {
    if (
      this.sortkey !== undefined &&
      this.sortkey !== null &&
      this.sortkey !== ''
    ) {
      return this.grid.SortBy(this.sortkey);
    }
  }

  /**
   * Called when the component is destroyed.
   */
  public ngOnDestroy(): void {
    if (this.IsHeader()) {
      this.grid.UnregisterColumn();
    }
  }

  /**
   * Is called when the component is initialized.
   */
  public ngOnInit() {
    const rootElement: HTMLElement = this.el.nativeElement;
    const parentElement: HTMLElement = rootElement.parentElement;

    while (rootElement.firstChild) {
      parentElement.insertBefore(rootElement.firstChild, rootElement);
    }

    parentElement.removeChild(rootElement);

    if (this.IsHeader()) {
      this.grid.RegisterColumn();
    }
  }

  // #endregion Public Methods
}
