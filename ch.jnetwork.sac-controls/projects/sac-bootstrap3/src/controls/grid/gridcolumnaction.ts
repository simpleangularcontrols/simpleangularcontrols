import {
  Component,
  ElementRef,
  Injector,
  forwardRef
} from '@angular/core';
import {
  SacGridColumnActionCommon,
  SacGridColumnBaseCommon,
} from '@simpleangularcontrols/sac-common';
import { SacGridComponent } from './grid';

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
  constructor(grid: SacGridComponent, injector: Injector, el: ElementRef) {
    super(grid, injector, el);

    this.width = '52px';
  }
}
