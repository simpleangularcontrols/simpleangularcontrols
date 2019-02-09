import { Component, Directive, TemplateRef } from "@angular/core";
import { PagerData, SortDescriptor } from '@jnetwork/jngcontrols-common';

@Directive({
  selector: '[gridTemplate]'
})
export class Temp {
  constructor(public template: TemplateRef<any>) {
  }
}

@Component({
  selector: 'ngExampleGrid',
  templateUrl: './grid.html'
})
export class ExampleGrid {
  TableData: any[] = [
    { title: "Bild 1", userid: "Hans Meiser", id: 1 },
    { title: "Bild 2", userid: "Thomas Gottschalk", id: 2 },
    { title: "Bild 3", userid: "Mike Müller", id: 3 },
    { title: "Bild 4", userid: "James Bond", id: 4 },
    { title: "Bild 5", userid: "Max Muster", id: 5 },
    { title: "Bild 6", userid: "Ben Hur", id: 6 }
  ];
  pagerData: PagerData = { TotalRowCount: 123, CurrentPageIndex: 1, PageSize: 20 };
  SortDescriptor: SortDescriptor;

  pagingSkip(skipCount) {
  }

  public action(value: any) {
    console.log("ExampleGrid: action -> " + JSON.stringify(value));

    this.pagerData.CurrentPageIndex++;
    this.pagerData = this.pagerData;

  }
}
