import { Component, ElementRef, forwardRef } from '@angular/core';
import {
  SacGridColumnActionCommon,
  SacGridColumnBaseCommon,
} from '@simpleangularcontrols/sac-common';
import { SacGridComponent } from './grid';

/**
 * Grid Action Komponent
 */
@Component({
  selector: 'sac-gridcolumnaction',
  templateUrl: './gridcolumnaction.html',
  providers: [
    {
      provide: SacGridColumnBaseCommon,
      useExisting: forwardRef(() => SacGridColumnActionComponent),
    },
  ],
})
export class SacGridColumnActionComponent extends SacGridColumnActionCommon {
  /**
   * Konstruktor
   * @param grid Referenz auf Grid
   * @param el HTML Element Referenz
   */
  constructor(grid: SacGridComponent, el: ElementRef) {
    super(grid, el);

    this.width = '60px';
  }
}
