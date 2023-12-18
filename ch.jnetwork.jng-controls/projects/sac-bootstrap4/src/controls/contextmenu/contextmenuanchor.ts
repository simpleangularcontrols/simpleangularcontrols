import { Directive, ElementRef, forwardRef } from '@angular/core';
import {
  SacContextmenuAnchorCommon,
  SacContextmenuCommon,
} from '@jnetwork/sac-common';

/**
 * Anker Komponente für Context Menü. Wird zum positionieren des Context Menü in der Page benötigt.
 */
@Directive({
  selector: '[sacContextMenuAnchor]',
  providers: [
    {
      provide: SacContextmenuAnchorCommon,
      useExisting: forwardRef(() => SacContextmenuAnchorDirective),
    },
  ],
})
export class SacContextmenuAnchorDirective extends SacContextmenuAnchorCommon {
  /**
   * Konstruktor
   * @param _elementRef HTML DOM Referenz
   */
  constructor(_elementRef: ElementRef<HTMLElement>) {
    super(_elementRef);
  }
}
