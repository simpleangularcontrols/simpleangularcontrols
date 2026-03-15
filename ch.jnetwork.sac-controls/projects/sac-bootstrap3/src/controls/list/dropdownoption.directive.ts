import { DROPDOWN_TOKEN } from './list.token';
import { Directive, ElementRef, Inject, Optional, Renderer2 } from '@angular/core';
import { SacDropdownOptionCommon } from '@simpleangularcontrols/sac-common';

@Directive({ selector: 'option,[sacOption]' })
export class SacDropdownOptionDirective extends SacDropdownOptionCommon {
    // #region Constructors

    /**
     * Constructor
     * @param elementRef Reference to HTML DOM element
     * @param renderer Angular Rendering Engine
     * @param dropdownComponent Reference to Dropdown component
     */
    constructor(
        elementRef: ElementRef,
        renderer: Renderer2,
        @Optional() @Inject(DROPDOWN_TOKEN) dropdownComponent: any
    ) {
        super(elementRef, renderer, dropdownComponent);
    }

    // #endregion Constructors
}
