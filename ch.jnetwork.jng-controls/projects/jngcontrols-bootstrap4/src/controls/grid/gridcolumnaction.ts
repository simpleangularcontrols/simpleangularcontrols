import { Component, ElementRef, forwardRef } from '@angular/core';
import {
  NgGridColumnActionCommon,
  NgGridColumnBaseCommon,
} from '@jnetwork/jngcontrols-common';
import { NgGridComponent } from './grid';

/**
 * Grid Action Komponent
 */
@Component({
  selector: 'sac-gridcolumnaction',
  templateUrl: './gridcolumnaction.html',
  providers: [
    {
      provide: NgGridColumnBaseCommon,
      useExisting: forwardRef(() => NgGridColumnActionComponent),
    },
  ],
})
export class NgGridColumnActionComponent extends NgGridColumnActionCommon {
  /**
   * Konstruktor
   * @param grid Referenz auf Grid
   * @param el HTML Element Referenz
   */
  constructor(grid: NgGridComponent, el: ElementRef) {
    super(grid, el);

    this.width = '60px';
  }
}
