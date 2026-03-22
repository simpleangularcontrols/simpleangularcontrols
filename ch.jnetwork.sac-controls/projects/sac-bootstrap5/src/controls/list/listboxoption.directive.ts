import { LISTBOX_TOKEN } from './list.token';
import { Directive, ElementRef, Inject, Optional, Renderer2 } from '@angular/core';
import { SacListboxOptionCommon } from '@simpleangularcontrols/sac-common';

/**
 * Option item in listbox
 */
@Directive({ selector: '[sacOption],option' })
export class SacListboxOptionDirective extends SacListboxOptionCommon {
    // #region Constructors

    /**
     * Constructor
     * @param elementRef Reference to DOM element
     * @param renderer Angular rendering engine
     * @param listbox Reference to listbox component
     */
    constructor(elementRef: ElementRef, renderer: Renderer2, @Optional() @Inject(LISTBOX_TOKEN) listbox: any) {
        super(elementRef, renderer, listbox);
    }

    // #endregion Constructors
}
