import { LISTBOX_TOKEN } from './list.token';
import { Directive, ElementRef, Inject, Optional, Renderer2 } from '@angular/core';
import { SacListboxOptionCommon } from '@simpleangularcontrols/sac-common';

@Directive({ selector: 'option,[sacOption]' })
export class SacListboxOptionDirective extends SacListboxOptionCommon {
    // #region Constructors

    /**
     * Constructor
     * @param elementRef Reference to HTML DOM element
     * @param renderer Angular rendering engine
     * @param listboxComponent Reference to dropdown component
     */
    constructor(elementRef: ElementRef, renderer: Renderer2, @Optional() @Inject(LISTBOX_TOKEN) listboxComponent: any) {
        super(elementRef, renderer, listboxComponent);
    }

    // #endregion Constructors
}
