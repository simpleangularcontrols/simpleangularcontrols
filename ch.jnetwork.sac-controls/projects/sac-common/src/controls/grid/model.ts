// #region Classes

/**
 * GridResponse class
 */
export class GridResponse<T> {
  // #region Properties

  /**
   * Data
   */
  public Data: T[];
  /**
   * Total number of data records
   */
  public TotalRowCount: number;

  // #endregion Properties
}

/**
 * Model for pager settings
 */
export class PagerData {
  // #region Properties

  /**
   * Current index of the page
   */
  public CurrentPageIndex = 0;
  /**
   * Number of elements on the page
   */
  public PageSize = 20;
  /**
   * Total number of data records
   */
  public TotalRowCount = 0;

  // #endregion Properties

  // #region Constructors

  /**
   * Constructor
   * @param PageSize Number of elements per page
   * @param CurrentPageIndex Current page
   * @param TotalRowCount Total Rows in database
   */
  constructor(
    PageSize: number,
    CurrentPageIndex: number,
    TotalRowCount: number
  ) {
    this.PageSize = PageSize;
    this.CurrentPageIndex = CurrentPageIndex;
    this.TotalRowCount = TotalRowCount;
  }

  // #endregion Constructors
}

/**
 * Model if page is to be changed
 */
export class PagerRequest {
  // #region Properties

  /**
   * Index of the page to which you want to switch
   */
  public NewPageIndex: number = 0;
  /**
   * Number of elements on the page
   */
  public PageSize: number = 0;

  // #endregion Properties

  // #region Constructors

  /**
   * Constructor
   * @param PageSize Page size / number of elements per page
   * @param NewPageIndex New page index
   */
  constructor(PageSize: number, NewPageIndex: number) {
    this.PageSize = PageSize;
    this.NewPageIndex = NewPageIndex;
  }

  // #endregion Constructors
}

/**
 * Model for sorting
 */
export class SortDescriptor {
  // #region Properties

  /**
   * Description / Key for sorting
   */
  public SortColumn: string;
  /**
   * Sort order
   */
  public SortOrder: SortOrder;

  // #endregion Properties

  // #region Constructors

  /**
   * Constructor
   * @param sortcolumn Column by which to sort
   * @param sortorder Type of sorting
   */
  constructor(sortcolumn?: string, sortorder?: SortOrder) {
    this.SortColumn = sortcolumn;
    this.SortOrder = sortorder;
  }

  // #endregion Constructors
}

// #endregion Classes

// #region Enums

/**
 * Enum for sorting
 */
export enum SortOrder {
  /**
   * No sorting
   */
  None = 0,
  /**
   * Ascending
   */
  Ascending = 1,
  /**
   * Descending
   */
  Descending = 2,
}

// #endregion Enums
