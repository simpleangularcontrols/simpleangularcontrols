import { Directive, ElementRef, Injector } from '@angular/core';
import { SacGridCommon } from './grid';
import { SacGridColumnBaseCommon } from './gridcolumnbase';

/**
 * Component for SacGridColumnActionCommon. Extends SacGridColumnBaseCommon
 */
@Directive()
export class SacGridColumnActionCommon extends SacGridColumnBaseCommon {
  // #region Constructors

  /**
   * Constructor
   * @param el Element reference
   * @param injector di inector to resolve icon service
   * @param grid SacGridCommon
   */
  constructor(grid: SacGridCommon, injector: Injector, el: ElementRef) {
    super(grid, injector, el);
  }

  // #endregion Constructors
}
