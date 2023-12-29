import {
  Component,
  ElementRef,
  Injector,
  forwardRef
} from '@angular/core';
import {
  SacGridColumnBaseCommon,
  SacGridColumnCommon,
} from '@simpleangularcontrols/sac-common';
import { SacGridComponent } from './grid';

@Component({
  selector: 'sac-gridcolumn',
  templateUrl: './gridcolumn.html',
  providers: [
    {
      provide: SacGridColumnBaseCommon,
      useExisting: forwardRef(() => SacGridColumnComponent),
    },
  ],
})
export class SacGridColumnComponent extends SacGridColumnCommon {
  constructor(grid: SacGridComponent, injector: Injector, el: ElementRef) {
    super(grid, injector, el);
  }
}
