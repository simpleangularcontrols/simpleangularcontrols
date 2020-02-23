import { Component, Directive, TemplateRef, OnInit } from '@angular/core';
import { PagerData, SortDescriptor } from '@jnetwork/jngcontrols-common';
import { GridItemDto } from '../models/GridItemDto';
import { GridService } from '../services/GridService';
import { GridResultDto } from '../models/GridResultDto';
import { GridRequestDto } from '../models/GridRequestDto';
import { PagerRequest } from '@jnetwork/jngcontrols-common';

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

  data: GridItemDto[] = [];
  pagerData: PagerData = { TotalRowCount: 0, CurrentPageIndex: 1, PageSize: 20 };
  SortDescriptor: SortDescriptor;

  constructor(private gridService: GridService) { }

  pagingSkip(pageRequest: PagerRequest) {
    const request: GridRequestDto = new GridRequestDto();
    request.NewPageIndex = pageRequest.NewPageIndex;
    request.PageSize = pageRequest.PageSize;

    this.gridService.GetItems(request).subscribe((result: GridResultDto<GridItemDto>) => {
      this.data = result.Data;
      this.pagerData = { ...this.pagerData, TotalRowCount: result.TotalRowCount, CurrentPageIndex: request.NewPageIndex, PageSize: request.PageSize };
    });
  }

  public action(value: any) {
    console.log('ExampleGrid: action -> ' + JSON.stringify(value));

    this.pagerData.CurrentPageIndex++;
    this.pagerData = this.pagerData;

  }

  ngOnInit(): void {
    const request: GridRequestDto = new GridRequestDto();
    request.NewPageIndex = 0;
    request.PageSize = this.pagerData.PageSize;

    this.gridService.GetItems(request).subscribe((result: GridResultDto<GridItemDto>) => {
      this.data = result.Data;
      this.pagerData = { ...this.pagerData, TotalRowCount: result.TotalRowCount, CurrentPageIndex: request.NewPageIndex };
    });
  }
}
