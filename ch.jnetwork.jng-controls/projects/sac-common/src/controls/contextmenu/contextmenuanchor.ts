import { Directive, ElementRef } from '@angular/core';

/**
 * Base Context Menu Anchor Component für Open/Close Event
 */
@Directive()
export class NgContextmenuAnchorCommon {
  /**
   * Referenz auf das Native HTML Element
   */
  nativeElement: HTMLElement;

  /**
   * Konstruktor
   * @param _elementRef Refernz auf das HTML welcher als Anker für das Context Menü verwendet wird
   */
  constructor(_elementRef: ElementRef<HTMLElement>) {
    this.nativeElement = _elementRef.nativeElement;
  }
}
