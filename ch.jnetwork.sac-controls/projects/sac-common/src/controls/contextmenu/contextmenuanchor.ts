import { Directive, ElementRef } from '@angular/core';

/**
 * Base Context Menu Anchor Component für Open/Close Event
 */
@Directive()
export class SacContextmenuAnchorCommon {
  // #region Properties

  /**
   * Referenz auf das Native HTML Element
   */
  public nativeElement: HTMLElement;

  // #endregion Properties

  // #region Constructors

  /**
   * Konstruktor
   * @param elementRef Refernz auf das HTML welcher als Anker für das Context Menü verwendet wird
   */
  constructor(elementRef: ElementRef<HTMLElement>) {
    this.nativeElement = elementRef.nativeElement;
  }

  // #endregion Constructors
}
