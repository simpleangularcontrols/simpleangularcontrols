import { DROPDOWN_TOKEN } from './list.token';
import { Directive, ElementRef, Inject, Optional, Renderer2 } from '@angular/core';
import { SacDropdownOptionCommon } from '@simpleangularcontrols/sac-common';

/**
 * Directive for dropdown option list
 */
@Directive({ selector: '[sacOption],option' })
export class SacDropdownOptionDirective extends SacDropdownOptionCommon {
    // #region Constructors

    /**
     * Constructor
     * @param elementRef Reference to HTML DOM element
     * @param renderer Angular rendering engine
     * @param dropdownList Reference to dropdown component
     */
    constructor(elementRef: ElementRef, renderer: Renderer2, @Optional() @Inject(DROPDOWN_TOKEN) dropdownList: any) {
        super(elementRef, renderer, dropdownList);
    }

    // #endregion Constructors
}
