import { Component, Renderer2, ElementRef, OnInit, forwardRef } from '@angular/core';
import { NgGridColumnCommon, NgGridColumnBaseCommon } from '@jnetwork/jngcontrols-common';
import { NgGrid } from './grid';

@Component({
  selector: 'ngGridColumn,[ngGridColumn]',
  templateUrl: './gridcolumn.html',
  providers: [{ provide: NgGridColumnBaseCommon, useExisting: forwardRef(() => NgGridColumn) }],
})
export class NgGridColumn extends NgGridColumnCommon {
  constructor(grid: NgGrid, el: ElementRef) {
    super(grid, el);
  }
}
