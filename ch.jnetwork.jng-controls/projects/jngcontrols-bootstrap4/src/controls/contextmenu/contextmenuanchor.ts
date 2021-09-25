import { Directive, ElementRef, forwardRef } from '@angular/core';
import {
  NgContextmenuAnchorCommon,
  NgContextmenuCommon,
} from '@jnetwork/jngcontrols-common';

/**
 * Anker Komponente für Context Menü. Wird zum positionieren des Context Menü in der Page benötigt.
 */
@Directive({
  selector: '[ng-contextmenuanchor],[ngContextmenuAnchor]',
  providers: [
    {
      provide: NgContextmenuAnchorCommon,
      useExisting: forwardRef(() => NgContextmenuAnchorDirective),
    },
  ],
})
export class NgContextmenuAnchorDirective extends NgContextmenuAnchorCommon {
  /**
   * Konstruktor
   * @param _elementRef HTML DOM Referenz
   */
  constructor(_elementRef: ElementRef<HTMLElement>) {
    super(_elementRef);
  }
}
