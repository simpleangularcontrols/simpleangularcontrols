import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SACBootstrap3GridModule } from '@simpleangularcontrols/sac-bootstrap3';
import {
  PagerData,
  PagerRequest,
  SortDescriptor,
  SortOrder,
} from '@simpleangularcontrols/sac-common';
import { GridItemDto } from './models/GridItemDto';
import { GridRequestDto } from './models/GridRequestDto';
import { GridResultDto } from './models/GridResultDto';
import { GridService } from './services/GridService';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  standalone: true,
  imports: [SACBootstrap3GridModule, HttpClientModule],
})
export class DemoGridComponent implements OnInit {
  // #region Properties

  public dataDefault: GridItemDto[] = [];
  public dataPageSize: GridItemDto[] = [];
  public dataPageSizeDisabled: GridItemDto[] = [];
  public dataPagingDisabled: GridItemDto[] = [];
  public dataSorting: GridItemDto[] = [];
  public pagerDefault: PagerData = {
    TotalRowCount: 0,
    CurrentPageIndex: 0,
    PageSize: 20,
  };
  public pagerPageSize: PagerData = {
    TotalRowCount: 0,
    CurrentPageIndex: 0,
    PageSize: 20,
  };
  public pagerPageSizeDisabled: PagerData = {
    TotalRowCount: 0,
    CurrentPageIndex: 0,
    PageSize: 10,
  };
  public pagerSorting: PagerData = {
    TotalRowCount: 0,
    CurrentPageIndex: 0,
    PageSize: 20,
  };
  public sortSorting: SortDescriptor = {
    SortColumn: 'Id',
    SortOrder: SortOrder.Ascending,
  };

  // #endregion Properties

  // #region Constructors

  constructor(private gridService: GridService) {}

  // #endregion Constructors

  // #region Public Methods

  public action(value: any) {
    console.log('ExampleGrid: action -> ' + JSON.stringify(value));

    // this.dataDefault.CurrentPageIndex++;
    // this.dataDefault = this.dataDefault;
  }

  public ngOnInit(): void {
    const request: PagerRequest = new PagerRequest(20, 0);
    this.loadDefault(request);
    this.loadPageSize(request);
    this.loadSorting(request, this.sortSorting);
    this.loadPageSizeDisabled({ ...request, PageSize: 10 });
    this.loadPagingDisabled(null);
  }

  public pagingDefault(pageRequest: PagerRequest) {
    this.loadDefault(pageRequest);
  }

  public pagingDisabled(pageRequest: PagerRequest) {
    this.loadPagingDisabled(pageRequest);
  }

  public pagingPageSize(pageRequest: PagerRequest) {
    this.loadPageSize(pageRequest);
  }

  public pagingPageSizeDisabled(pageRequest: PagerRequest) {
    this.loadPageSizeDisabled(pageRequest);
  }

  public pagingSorting(pageRequest: PagerRequest) {
    this.loadSorting(pageRequest, this.sortSorting);
  }

  public sortingSort(sortRequest: SortDescriptor) {
    this.loadSorting(
      new PagerRequest(
        this.pagerSorting.PageSize,
        this.pagerSorting.CurrentPageIndex
      ),
      sortRequest
    );
  }

  // #endregion Public Methods

  // #region Private Methods

  private loadDefault(pageRequest: PagerRequest) {
    const request: GridRequestDto = new GridRequestDto();
    request.NewPageIndex = pageRequest.NewPageIndex;
    request.PageSize = pageRequest.PageSize;

    this.gridService
      .GetItems(request)
      .subscribe((result: GridResultDto<GridItemDto>) => {
        this.dataDefault = result.Data;
        this.pagerDefault = {
          ...this.pagerDefault,
          TotalRowCount: result.TotalRowCount,
          CurrentPageIndex: request.NewPageIndex,
          PageSize: request.PageSize,
        };
      });
  }

  private loadPageSize(pageRequest: PagerRequest) {
    const request: GridRequestDto = new GridRequestDto();
    request.NewPageIndex = pageRequest.NewPageIndex;
    request.PageSize = pageRequest.PageSize;

    this.gridService
      .GetItems(request)
      .subscribe((result: GridResultDto<GridItemDto>) => {
        this.dataPageSize = result.Data;
        this.pagerPageSize = {
          ...this.pagerPageSize,
          TotalRowCount: result.TotalRowCount,
          CurrentPageIndex: request.NewPageIndex,
          PageSize: request.PageSize,
        };
      });
  }

  private loadPageSizeDisabled(pageRequest: PagerRequest) {
    const request: GridRequestDto = new GridRequestDto();
    request.NewPageIndex = pageRequest.NewPageIndex;
    request.PageSize = pageRequest.PageSize;

    this.gridService
      .GetItems(request)
      .subscribe((result: GridResultDto<GridItemDto>) => {
        this.dataPageSizeDisabled = result.Data;
        this.pagerPageSizeDisabled = {
          ...this.pagerPageSizeDisabled,
          TotalRowCount: result.TotalRowCount,
          CurrentPageIndex: request.NewPageIndex,
          PageSize: request.PageSize,
        };
      });
  }

  private loadPagingDisabled(pageRequest: PagerRequest) {
    const request: GridRequestDto = new GridRequestDto();
    request.NewPageIndex = 1;
    request.PageSize = 999999;

    this.gridService
      .GetItems(request)
      .subscribe((result: GridResultDto<GridItemDto>) => {
        this.dataPagingDisabled = result.Data;
      });
  }

  private loadSorting(pageRequest: PagerRequest, sortRequest: SortDescriptor) {
    const request: GridRequestDto = new GridRequestDto();
    request.NewPageIndex = pageRequest.NewPageIndex;
    request.PageSize = pageRequest.PageSize;
    request.SortKey = sortRequest.SortColumn;
    request.SortDirection = sortRequest.SortOrder;

    this.gridService
      .GetItems(request)
      .subscribe((result: GridResultDto<GridItemDto>) => {
        this.dataSorting = result.Data;
        this.pagerSorting = {
          ...this.pagerSorting,
          TotalRowCount: result.TotalRowCount,
          CurrentPageIndex: request.NewPageIndex,
          PageSize: request.PageSize,
        };
        this.sortSorting = {
          ...this.sortSorting,
          SortColumn: request.SortKey,
          SortOrder: request.SortDirection,
        };
      });
  }

  // #endregion Private Methods
}
