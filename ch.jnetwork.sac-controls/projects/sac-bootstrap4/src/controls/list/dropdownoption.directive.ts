import { DROPDOWN_TOKEN } from './list.token';
import { Directive, ElementRef, Inject, Optional, Renderer2 } from '@angular/core';
import { SacDropdownOptionCommon } from '@simpleangularcontrols/sac-common';

/**
 * Direktive für Dropdown Option List
 */
@Directive({ selector: '[sacOption],option' })
export class SacDropdownOptionDirective extends SacDropdownOptionCommon {
    // #region Constructors

    /**
     * Konstruktor
     * @param elementRef Referenz auf HTML DOM Element
     * @param renderer Angular Rendering Engine
     * @param dropdownList Referenz auf DropDown Komponente
     */
    constructor(elementRef: ElementRef, renderer: Renderer2, @Optional() @Inject(DROPDOWN_TOKEN) dropdownList: any) {
        super(elementRef, renderer, dropdownList);
    }

    // #endregion Constructors
}
