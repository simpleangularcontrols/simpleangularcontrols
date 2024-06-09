import { Component, Renderer2, ElementRef, OnInit, forwardRef } from '@angular/core';
import { NgGridColumnCommon, NgGridColumnBaseCommon } from '@jnetwork/jngcontrols-common';
import { NgGridComponent } from './grid';

@Component({
  selector: 'ng-gridcolumn,ngGridColumn,[ngGridColumn]',
  templateUrl: './gridcolumn.html',
  providers: [{ provide: NgGridColumnBaseCommon, useExisting: forwardRef(() => NgGridColumnComponent) }],
})
export class NgGridColumnComponent extends NgGridColumnCommon {
  constructor(grid: NgGridComponent, el: ElementRef) {
    super(grid, el);
  }
}
