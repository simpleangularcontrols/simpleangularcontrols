import { GridItemDto } from './models/GridItemDto';
import { GridRequestDto } from './models/GridRequestDto';
import { GridResultDto } from './models/GridResultDto';
import { GridService } from './services/GridService';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SACBootstrap5GridModule } from '@simpleangularcontrols/sac-bootstrap5';
import { PagerData, PagerRequest, SortDescriptor, SortOrder } from '@simpleangularcontrols/sac-common';

@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    standalone: true,
    imports: [SACBootstrap5GridModule, HttpClientModule],
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

    /**
     * Creates the grid demo component.
     * @param gridService Service used to load grid data.
     */
    constructor(private gridService: GridService) {}

    // #endregion Constructors

    // #region Public Methods

    /**
     * Handles an action triggered from a grid row.
     * @param value Action payload from the grid.
     */
    public action(value: any) {
        console.log('ExampleGrid: action -> ' + JSON.stringify(value));

        // this.dataDefault.CurrentPageIndex++;
        // this.dataDefault = this.dataDefault;
    }

    /**
     * Initializes all grid examples with their first data load.
     */
    public ngOnInit(): void {
        const request: PagerRequest = new PagerRequest(20, 0);
        this.loadDefault(request);
        this.loadPageSize(request);
        this.loadSorting(request, this.sortSorting);
        this.loadPagingDisabled(null);
        this.loadPageSizeDisabled({ ...request, PageSize: 10 });
    }

    /**
     * Handles paging changes for the default grid.
     * @param pageRequest Paging request from the pager.
     */
    public pagingDefault(pageRequest: PagerRequest) {
        this.loadDefault(pageRequest);
    }

    /**
     * Handles paging changes for the grid with disabled pager.
     * @param pageRequest Paging request from the pager.
     */
    public pagingDisabled(pageRequest: PagerRequest) {
        this.loadPagingDisabled(pageRequest);
    }

    /**
     * Handles paging changes for the page-size demo grid.
     * @param pageRequest Paging request from the pager.
     */
    public pagingPageSize(pageRequest: PagerRequest) {
        this.loadPageSize(pageRequest);
    }

    /**
     * Handles paging changes for the disabled page-size selector demo.
     * @param pageRequest Paging request from the pager.
     */
    public pagingPageSizeDisabled(pageRequest: PagerRequest) {
        this.loadPageSizeDisabled(pageRequest);
    }

    /**
     * Handles paging changes for the sorting demo grid.
     * @param pageRequest Paging request from the pager.
     */
    public pagingSorting(pageRequest: PagerRequest) {
        this.loadSorting(pageRequest, this.sortSorting);
    }

    /**
     * Handles sorting changes for the sorting demo grid.
     * @param sortRequest New sort descriptor from the grid header.
     */
    public sortingSort(sortRequest: SortDescriptor) {
        this.loadSorting(new PagerRequest(this.pagerSorting.PageSize, this.pagerSorting.CurrentPageIndex), sortRequest);
    }

    // #endregion Public Methods

    // #region Private Methods

    /**
     * Loads data for the default paging grid.
     * @param pageRequest Paging request with index and size.
     */
    private loadDefault(pageRequest: PagerRequest) {
        const request: GridRequestDto = new GridRequestDto();
        request.NewPageIndex = pageRequest.NewPageIndex;
        request.PageSize = pageRequest.PageSize;

        this.gridService.GetItems(request).subscribe((result: GridResultDto<GridItemDto>) => {
            this.dataDefault = result.Data;
            this.pagerDefault = {
                ...this.pagerDefault,
                TotalRowCount: result.TotalRowCount,
                CurrentPageIndex: request.NewPageIndex,
                PageSize: request.PageSize,
            };
        });
    }

    /**
     * Loads data for the page-size selector grid.
     * @param pageRequest Paging request with index and size.
     */
    private loadPageSize(pageRequest: PagerRequest) {
        const request: GridRequestDto = new GridRequestDto();
        request.NewPageIndex = pageRequest.NewPageIndex;
        request.PageSize = pageRequest.PageSize;

        this.gridService.GetItems(request).subscribe((result: GridResultDto<GridItemDto>) => {
            this.dataPageSize = result.Data;
            this.pagerPageSize = {
                ...this.pagerPageSize,
                TotalRowCount: result.TotalRowCount,
                CurrentPageIndex: request.NewPageIndex,
                PageSize: request.PageSize,
            };
        });
    }

    /**
     * Loads data for the grid with disabled page-size selector.
     * @param pageRequest Paging request with index and size.
     */
    private loadPageSizeDisabled(pageRequest: PagerRequest) {
        const request: GridRequestDto = new GridRequestDto();
        request.NewPageIndex = pageRequest.NewPageIndex;
        request.PageSize = pageRequest.PageSize;

        this.gridService.GetItems(request).subscribe((result: GridResultDto<GridItemDto>) => {
            this.dataPageSizeDisabled = result.Data;
            this.pagerPageSizeDisabled = {
                ...this.pagerPageSizeDisabled,
                TotalRowCount: result.TotalRowCount,
                CurrentPageIndex: request.NewPageIndex,
                PageSize: request.PageSize,
            };
        });
    }

    /**
     * Loads all rows for the paging-disabled grid.
     * @param pageRequest Paging request input (not used for this demo).
     */
    private loadPagingDisabled(pageRequest: PagerRequest) {
        const request: GridRequestDto = new GridRequestDto();
        request.NewPageIndex = 1;
        request.PageSize = 999999;

        this.gridService.GetItems(request).subscribe((result: GridResultDto<GridItemDto>) => {
            this.dataPagingDisabled = result.Data;
        });
    }

    /**
     * Loads data for the sorting grid using paging and sort settings.
     * @param pageRequest Paging request with index and size.
     * @param sortRequest Sort descriptor with column and direction.
     */
    private loadSorting(pageRequest: PagerRequest, sortRequest: SortDescriptor) {
        const request: GridRequestDto = new GridRequestDto();
        request.NewPageIndex = pageRequest.NewPageIndex;
        request.PageSize = pageRequest.PageSize;
        request.SortKey = sortRequest.SortColumn;
        request.SortDirection = sortRequest.SortOrder;

        this.gridService.GetItems(request).subscribe((result: GridResultDto<GridItemDto>) => {
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
