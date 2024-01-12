import { Directive, ElementRef, forwardRef } from '@angular/core';
import { SacContextmenuAnchorCommon } from '@simpleangularcontrols/sac-common';

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
  standalone: true,
})
export class SacMultilanguagemenuAnchorDirective extends SacContextmenuAnchorCommon {
  // #region Constructors

  /**
   * Konstruktor
   * @param elementRef HTML DOM Referenz
   */
  constructor(elementRef: ElementRef<HTMLElement>) {
    super(elementRef);
  }

  // #endregion Constructors
}
