import { Component, ElementRef, forwardRef } from '@angular/core';
import {
  NgGridColumnBaseCommon,
  NgGridColumnCommon,
} from '@jnetwork/jngcontrols-common';
import { NgGridComponent } from './grid';

/**
 * Grid Column Komponente
 */
@Component({
  selector: 'ng-gridcolumn,ngGridColumn,[ngGridColumn]',
  templateUrl: './gridcolumn.html',
  providers: [
    {
      provide: NgGridColumnBaseCommon,
      useExisting: forwardRef(() => NgGridColumnComponent),
    },
  ],
})
export class NgGridColumnComponent extends NgGridColumnCommon {
  /**
   * Konstruktor
   * @param grid Grid Referenz
   * @param el HTML DOM Element
   */
  constructor(grid: NgGridComponent, el: ElementRef) {
    super(grid, el);
  }
}
