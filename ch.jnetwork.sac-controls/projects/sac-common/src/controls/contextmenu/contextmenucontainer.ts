import { Directive, ElementRef } from '@angular/core';

/**
 * Common marker class for the menu container
 */
@Directive()
export class SacContextMenuContrainerCommon {
    // #region Properties

    /**
     * Reference to the HTML element of the menu container
     */
    public nativeElement: HTMLElement;

    // #endregion Properties

    // #region Constructors

    /**
     * Constructor
     * @param elementRef Reference to the HTML element with the marker directive
     */
    constructor(elementRef: ElementRef<HTMLElement>) {
        this.nativeElement = elementRef.nativeElement;
    }

    // #endregion Constructors
}
