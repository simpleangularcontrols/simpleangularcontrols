import { ElementRef, Directive } from '@angular/core';
import { SacGridCommon } from './grid';
import { SacGridColumnBaseCommon } from './gridcolumnbase';

/**
 * Komponente für SacGridColumnActionCommon. Extends SacGridColumnBaseCommon
 */
@Directive()
export class SacGridColumnActionCommon extends SacGridColumnBaseCommon {

  /**
  * Konstruktor
  * @param el Element Referenz
  * @param grid SacGridCommon
  */
  constructor(grid: SacGridCommon, el: ElementRef) {
    super(grid, el);
  }
}
