import { ElementRef, Directive, Injector } from '@angular/core';
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
   * @param injector di inector to resolve icon service
   * @param grid SacGridCommon
   */
  constructor(grid: SacGridCommon, injector: Injector, el: ElementRef) {
    super(grid, injector, el);
  }
}
