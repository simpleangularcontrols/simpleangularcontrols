import { Input, EventEmitter, Output, TemplateRef, Component, forwardRef, ElementRef } from '@angular/core';
import { NgGridColumnActionCommon, NgGridColumnBaseCommon } from '@jnetwork/sac-common';
import { NgGridComponent } from './grid';

@Component({
  selector: 'sac-gridcolumnaction',
  templateUrl: './gridcolumnaction.html',
  providers: [{ provide: NgGridColumnBaseCommon, useExisting: forwardRef(() => NgGridColumnActionComponent) }]
})
export class NgGridColumnActionComponent extends NgGridColumnActionCommon {

  constructor(grid: NgGridComponent, el: ElementRef) {
    super(grid, el);

    this.width = '52px';
  }
}
