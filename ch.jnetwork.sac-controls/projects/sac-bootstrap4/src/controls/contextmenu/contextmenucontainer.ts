import { Directive, ElementRef, forwardRef } from '@angular/core';
import { SacContextMenuContrainerCommon } from '@simpleangularcontrols/sac-common';

/**
 * Marker Komponente für Context Menü
 */
@Directive({
  selector: '[sacContextMenuContainer]',
  providers: [
    {
      provide: SacContextMenuContrainerCommon,
      useExisting: forwardRef(() => SacContextmenuContainerDirective),
    },
  ],
  standalone: true,
})
export class SacContextmenuContainerDirective extends SacContextMenuContrainerCommon {
  // #region Constructors

  /**
   * Konstruktor
   * @param elementRef Referenz auf DOM Element
   */
  constructor(elementRef: ElementRef<HTMLElement>) {
    super(elementRef);
  }

  // #endregion Constructors
}
