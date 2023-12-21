import { Directive, ElementRef, forwardRef } from '@angular/core';
import { SacContextMenuContrainerCommon } from '@simpleangularcontrols/sac-common';

/**
 * Marker Komponente für Context Menü
 */
@Directive({
  selector: '[sacMultilanguageMenuContainer]',
  providers: [
    {
      provide: SacContextMenuContrainerCommon,
      useExisting: forwardRef(() => SacMultilanguagemenuContainerDirective),
    },
  ],
})
export class SacMultilanguagemenuContainerDirective extends SacContextMenuContrainerCommon {
  /**
   * Konstruktor
   * @param _elementRef Referenz auf DOM Element
   */
  constructor(_elementRef: ElementRef<HTMLElement>) {
    super(_elementRef);
  }
}
