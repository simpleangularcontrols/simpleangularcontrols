import { Component } from "@angular/core";
import { PagerData, SortDescriptor } from '@jnetwork/jngcontrols-common';

@Component({
  selector: 'ngExampleGrid',
  templateUrl: './grid.html'
})
export class ExampleGrid {
  TableData: any[];
  pagerData: PagerData;
  SortDescriptor: SortDescriptor;

  pagingSkip(skipCount) {
  }
}
