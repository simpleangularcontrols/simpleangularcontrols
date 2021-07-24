import { Directive, ElementRef } from '@angular/core';

/**
 * Base Context Menu Anchor Component für Open/Close Event
 */
@Directive()
export class NgContextmenuAnchorCommon {
  nativeElement: HTMLElement;
  constructor(_elementRef: ElementRef<HTMLElement>) {
    this.nativeElement = _elementRef.nativeElement;
  }
}
