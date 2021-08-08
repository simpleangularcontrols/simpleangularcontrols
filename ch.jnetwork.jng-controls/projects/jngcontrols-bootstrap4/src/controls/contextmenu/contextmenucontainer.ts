import { Directive, ElementRef, forwardRef } from '@angular/core';
import { NgContextMenuContrainerCommon } from '@jnetwork/jngcontrols-common';

/**
 * Marker Komponente für Context Menü
 */
@Directive({
  selector: '[ng-contextmenucontainer],[ngContextmenuContainer]',
  providers: [
    {
      provide: NgContextMenuContrainerCommon,
      useExisting: forwardRef(() => NgContextmenuContainerDirective),
    },
  ],
})
export class NgContextmenuContainerDirective extends NgContextMenuContrainerCommon {
  constructor(_elementRef: ElementRef<HTMLElement>) {
    super(_elementRef);
  }
}
