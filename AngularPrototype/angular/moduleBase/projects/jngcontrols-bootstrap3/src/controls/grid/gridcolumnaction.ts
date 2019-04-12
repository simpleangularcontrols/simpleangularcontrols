import { Input, EventEmitter, Output, TemplateRef, Component, forwardRef, ElementRef } from '@angular/core';
import { NgGridColumnActionCommon, NgGridColumnBaseCommon } from '@jnetwork/jngcontrols-common';
import { NgGrid } from './grid';

@Component({
  selector: 'ngGridColumnAction,[ngGridColumnAction]',
  templateUrl: './gridcolumnaction.html',
  providers: [{ provide: NgGridColumnBaseCommon, useExisting: forwardRef(() => NgGridColumnAction) }]
})
export class NgGridColumnAction extends NgGridColumnActionCommon {

  constructor(grid: NgGrid, el: ElementRef) {
    super(grid, el);

    this.width = "52px";
  }
}
