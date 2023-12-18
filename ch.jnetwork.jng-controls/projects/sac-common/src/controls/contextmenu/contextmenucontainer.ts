import { Directive, ElementRef } from '@angular/core';

/**
 * Common Marker Klasse für den Menü Container
 */
@Directive()
export class SacContextMenuContrainerCommon {
  /**
   * Referenz auf das HTML Element des Menü Containers
   */
  nativeElement: HTMLElement;

  /**
   * Konstruktor
   * @param _elementRef Referenz auf das HTML Element mit der Marker Direktive
   */
  constructor(_elementRef: ElementRef<HTMLElement>) {
    this.nativeElement = _elementRef.nativeElement;
  }
}
