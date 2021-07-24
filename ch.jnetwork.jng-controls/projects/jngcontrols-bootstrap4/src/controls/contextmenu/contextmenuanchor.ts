import { Directive, ElementRef, forwardRef } from '@angular/core';
import { NgContextmenuAnchorCommon } from '@jnetwork/jngcontrols-common';

/**
 * Anker Komponente für Context Menü. Wird zum positionieren des Context Menü in der Page benötigt.
 */
@Directive({
  selector: '[ng-contextmenuanchor],[ngContextmenuAnchor]',
  providers: [
    {
      provide: NgContextmenuAnchorCommon,
      useExisting: forwardRef(() => NgContextmenuAnchor),
    },
  ],
})
export class NgContextmenuAnchor extends NgContextmenuAnchorCommon {
  constructor(_elementRef: ElementRef<HTMLElement>) {
    super(_elementRef);
  }
}
