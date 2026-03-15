import { Directive, ElementRef } from '@angular/core';

/**
 * Base context menu anchor component for open/close event
 */
@Directive()
export class SacContextmenuAnchorCommon {
    // #region Properties

    /**
     * Reference to the native HTML element
     */
    public nativeElement: HTMLElement;

    // #endregion Properties

    // #region Constructors

    /**
     * Constructor
     * @param elementRef Reference to the HTML element used as anchor for the context menu
     */
    constructor(elementRef: ElementRef<HTMLElement>) {
        this.nativeElement = elementRef.nativeElement;
    }

    // #endregion Constructors
}
