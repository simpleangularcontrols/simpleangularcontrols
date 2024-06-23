import { Directive, ElementRef } from '@angular/core';

/**
 * Common Marker Klasse für den Menü Container
 */
@Directive()
export class SacContextMenuContrainerCommon {
  // #region Properties

  /**
   * Referenz auf das HTML Element des Menü Containers
   */
  public nativeElement: HTMLElement;

  // #endregion Properties

  // #region Constructors

  /**
   * Konstruktor
   * @param elementRef Referenz auf das HTML Element mit der Marker Direktive
   */
  constructor(elementRef: ElementRef<HTMLElement>) {
    this.nativeElement = elementRef.nativeElement;
  }

  // #endregion Constructors
}
