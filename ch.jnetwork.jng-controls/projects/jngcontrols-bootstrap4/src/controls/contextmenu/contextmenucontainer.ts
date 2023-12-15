import { Directive, ElementRef, forwardRef } from '@angular/core';
import { NgContextMenuContrainerCommon } from '@jnetwork/jngcontrols-common';

/**
 * Marker Komponente für Context Menü
 */
@Directive({
  selector: '[sacContextMenuContainer]',
  providers: [
    {
      provide: NgContextMenuContrainerCommon,
      useExisting: forwardRef(() => NgContextmenuContainerDirective),
    },
  ],
})
export class NgContextmenuContainerDirective extends NgContextMenuContrainerCommon {
  /**
   * Konstruktor
   * @param _elementRef Referenz auf DOM Element
   */
  constructor(_elementRef: ElementRef<HTMLElement>) {
    super(_elementRef);
  }
}
