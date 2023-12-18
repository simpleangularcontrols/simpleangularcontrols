import { Input, EventEmitter, Output, TemplateRef, Component, forwardRef, ElementRef } from '@angular/core';
import { SacGridColumnActionCommon, SacGridColumnBaseCommon } from '@jnetwork/sac-common';
import { SacGridComponent } from './grid';

@Component({
  selector: 'sac-gridcolumnaction',
  templateUrl: './gridcolumnaction.html',
  providers: [{ provide: SacGridColumnBaseCommon, useExisting: forwardRef(() => SacGridColumnActionComponent) }]
})
export class SacGridColumnActionComponent extends SacGridColumnActionCommon {

  constructor(grid: SacGridComponent, el: ElementRef) {
    super(grid, el);

    this.width = '52px';
  }
}
