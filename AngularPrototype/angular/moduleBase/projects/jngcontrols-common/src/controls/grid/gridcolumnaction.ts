import { ElementRef, Directive } from '@angular/core';
import { NgGridCommon } from './grid';
import { NgGridColumnBaseCommon } from './gridcolumnbase';

/**
 * Komponente für NgGridColumnActionCommon. Extends NgGridColumnBaseCommon
 */
@Directive()
export class NgGridColumnActionCommon extends NgGridColumnBaseCommon {

  /**
  * Konstruktor
  * @param el Element Referenz
  * @param grid NgGridCommon
  */
  constructor(grid: NgGridCommon, el: ElementRef) {
    super(grid, el);
  }
}
