import { Component, Input, Output, EventEmitter, HostListener } from "@angular/core";
import { PagerData } from "./model";

export abstract class NgPagingCommon {
  constructor() { }

  public paginators: Array<any> = [];
  public activePageIndex: number = 0;
  public firstPageIndex: number = 0;
  public lastPageIndex: number = 0;
  protected totalRowCount: number = 0;
  protected pageSize: number = 25;

  //#region Input and Outputs

  @Input("pagerdata")
  set PagerData(p: PagerData) {
    if (p != null) {
      this.totalRowCount = p.TotalRowCount;
      this.activePageIndex = p.CurrentPageIndex;
      this.pageSize = p.PageSize;
    }

    this.createPager();
  }

  @Output("onpaging")
  _pagingEvent: EventEmitter<any> = new EventEmitter();

  @Input("name")
  public name: string

  //#endregion

  //#region Protected Methods

  protected createPager() {
    this.paginators = [];

    if (this.totalRowCount > 0) {
      this.lastPageIndex = Math.floor(this.totalRowCount / this.pageSize);
      let totalPageCount = Math.floor(((this.totalRowCount - 1) / this.pageSize) + 1);

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

  protected paged() {
    let newStartIndex = this.activePageIndex + 1
    this._pagingEvent.emit(newStartIndex);
  }

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

  public changePage(newPageIndex: number) {
    if (this.activePageIndex !== newPageIndex) {
      console.log("NgPagingCommon: change page to index " + newPageIndex);

      this.activePageIndex = newPageIndex;
      this.paged();
    }
  }

  public nextPage() {
    if (this.activePageIndex != this.lastPageIndex) {
      console.log("NgPagingCommon: nextPage called");

      this.activePageIndex += 1;
      this.paged();
    }
  }

  public previousPage() {
    if (this.activePageIndex != this.firstPageIndex) {
      console.log("NgPagingCommon: previousPage called");

      this.activePageIndex -= 1;
      this.paged();
    }
  }

  public firstPage() {
    if (this.activePageIndex != this.firstPageIndex) {
      console.log("NgPagingCommon: firstPage called");

      this.activePageIndex = 0;
      this.paged();
    }
  }

  public lastPage() {
    if (this.activePageIndex != this.lastPageIndex) {
      console.log("NgPagingCommon: lastPage called");

      this.activePageIndex = this.lastPageIndex;
      this.paged();
    }
  }

  public getCurrentPageNumber(): number {
    return this.activePageIndex + 1;
  }

  public getTotalPageNumber(): number {
    return this.lastPageIndex + 1;
  }

  //#endregion
}

