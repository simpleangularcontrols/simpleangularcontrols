import { Directive, ElementRef, forwardRef } from '@angular/core';
import { SacContextMenuContrainerCommon } from '@jnetwork/sac-common';

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
})
export class SacContextmenuContainerDirective extends SacContextMenuContrainerCommon {
  /**
   * Konstruktor
   * @param _elementRef Referenz auf DOM Element
   */
  constructor(_elementRef: ElementRef<HTMLElement>) {
    super(_elementRef);
  }
}
