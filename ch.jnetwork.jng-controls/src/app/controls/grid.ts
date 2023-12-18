import { Component, Directive, TemplateRef, OnInit } from '@angular/core';
import { PagerData, SortDescriptor, SortOrder } from '@jnetwork/sac-common';
import { GridItemDto } from '../models/GridItemDto';
import { GridService } from '../services/GridService';
import { GridResultDto } from '../models/GridResultDto';
import { GridRequestDto } from '../models/GridRequestDto';
import { PagerRequest } from '@jnetwork/sac-common';

@Directive({
  selector: '[appGridTemplate]'
})
export class TempDirective {
  constructor(public template: TemplateRef<any>) {
  }
}

@Component({
  selector: 'app-example-grid',
  templateUrl: './grid.html'
})
export class ExampleGridComponent implements OnInit {

  dataDefault: GridItemDto[] = [];
  pagerDefault: PagerData = { TotalRowCount: 0, CurrentPageIndex: 0, PageSize: 20 };

  dataPageSize: GridItemDto[] = [];
  pagerPageSize: PagerData = { TotalRowCount: 0, CurrentPageIndex: 0, PageSize: 20 };

  dataPageSizeDisabled: GridItemDto[] = [];
  pagerPageSizeDisabled: PagerData = { TotalRowCount: 0, CurrentPageIndex: 0, PageSize: 10 };

  dataSorting: GridItemDto[] = [];
  pagerSorting: PagerData = { TotalRowCount: 0, CurrentPageIndex: 0, PageSize: 20 };
  sortSorting: SortDescriptor = { SortColumn: 'Id', SortOrder: SortOrder.Ascending };

  constructor(private gridService: GridService) { }

  pagingDefault(pageRequest: PagerRequest) {
    this.loadDefault(pageRequest);
  }

  pagingPageSize(pageRequest: PagerRequest) {
    this.loadPageSize(pageRequest);
  }

  pagingPageSizeDisabled(pageRequest: PagerRequest) {
    this.loadPageSizeDisabled(pageRequest);
  }

  pagingSorting(pageRequest: PagerRequest) {
    this.loadSorting(pageRequest, this.sortSorting);
  }

  sortingSort(sortRequest: SortDescriptor) {
    this.loadSorting(new PagerRequest(this.pagerSorting.PageSize, this.pagerSorting.CurrentPageIndex), sortRequest);
  }

  ngOnInit(): void {
    const request: PagerRequest = new PagerRequest(20, 0);
    this.loadDefault(request);
    this.loadPageSize(request);
    this.loadSorting(request, this.sortSorting);
    this.loadPageSizeDisabled({ ...request, PageSize: 10 });
  }

  private loadDefault(pageRequest: PagerRequest) {
    const request: GridRequestDto = new GridRequestDto();
    request.NewPageIndex = pageRequest.NewPageIndex;
    request.PageSize = pageRequest.PageSize;

    this.gridService.GetItems(request).subscribe((result: GridResultDto<GridItemDto>) => {
      this.dataDefault = result.Data;
      this.pagerDefault = { ...this.pagerDefault, TotalRowCount: result.TotalRowCount, CurrentPageIndex: request.NewPageIndex, PageSize: request.PageSize };
    });
  }

  private loadPageSize(pageRequest: PagerRequest) {
    const request: GridRequestDto = new GridRequestDto();
    request.NewPageIndex = pageRequest.NewPageIndex;
    request.PageSize = pageRequest.PageSize;

    this.gridService.GetItems(request).subscribe((result: GridResultDto<GridItemDto>) => {
      this.dataPageSize = result.Data;
      this.pagerPageSize = { ...this.pagerPageSize, TotalRowCount: result.TotalRowCount, CurrentPageIndex: request.NewPageIndex, PageSize: request.PageSize };
    });
  }

  private loadPageSizeDisabled(pageRequest: PagerRequest) {
    const request: GridRequestDto = new GridRequestDto();
    request.NewPageIndex = pageRequest.NewPageIndex;
    request.PageSize = pageRequest.PageSize;

    this.gridService.GetItems(request).subscribe((result: GridResultDto<GridItemDto>) => {
      this.dataPageSizeDisabled = result.Data;
      this.pagerPageSizeDisabled = { ...this.pagerPageSizeDisabled, TotalRowCount: result.TotalRowCount, CurrentPageIndex: request.NewPageIndex, PageSize: request.PageSize };
    });
  }

  private loadSorting(pageRequest: PagerRequest, sortRequest: SortDescriptor) {
    const request: GridRequestDto = new GridRequestDto();
    request.NewPageIndex = pageRequest.NewPageIndex;
    request.PageSize = pageRequest.PageSize;
    request.SortKey = sortRequest.SortColumn;
    request.SortDirection = sortRequest.SortOrder;

    this.gridService.GetItems(request).subscribe((result: GridResultDto<GridItemDto>) => {
      this.dataSorting = result.Data;
      this.pagerSorting = { ...this.pagerSorting, TotalRowCount: result.TotalRowCount, CurrentPageIndex: request.NewPageIndex, PageSize: request.PageSize };
      this.sortSorting = { ...this.sortSorting, SortColumn: request.SortKey, SortOrder: request.SortDirection };
    });
  }

  public action(value: any) {
    console.log('ExampleGrid: action -> ' + JSON.stringify(value));

    // this.dataDefault.CurrentPageIndex++;
    // this.dataDefault = this.dataDefault;
  }
}
