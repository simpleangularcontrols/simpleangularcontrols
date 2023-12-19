import { Component, Renderer2, ElementRef, OnInit, forwardRef } from '@angular/core';
import { SacGridColumnCommon, SacGridColumnBaseCommon } from '@simpleangularcontrols/sac-common';
import { SacGridComponent } from './grid';

@Component({
  selector: 'sac-gridcolumn',
  templateUrl: './gridcolumn.html',
  providers: [{ provide: SacGridColumnBaseCommon, useExisting: forwardRef(() => SacGridColumnComponent) }],
})
export class SacGridColumnComponent extends SacGridColumnCommon {
  constructor(grid: SacGridComponent, el: ElementRef) {
    super(grid, el);
  }
}
