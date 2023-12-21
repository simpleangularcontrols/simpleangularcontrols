import { Directive, ElementRef, forwardRef } from '@angular/core';
import {
  SacContextmenuAnchorCommon
} from '@simpleangularcontrols/sac-common';

/**
 * Anker Komponente für Context Menü. Wird zum positionieren des Context Menü in der Page benötigt.
 */
@Directive({
  selector: '[sacMultilanguageMenuAnchor]',
  providers: [
    {
      provide: SacContextmenuAnchorCommon,
      useExisting: forwardRef(() => SacMultilanguagemenuAnchorDirective),
    },
  ],
})
export class SacMultilanguagemenuAnchorDirective extends SacContextmenuAnchorCommon {
  /**
   * Konstruktor
   * @param _elementRef HTML DOM Referenz
   */
  constructor(_elementRef: ElementRef<HTMLElement>) {
    super(_elementRef);
  }
}
