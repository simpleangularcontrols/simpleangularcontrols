import { LISTBOX_TOKEN } from './list.token';
import { Directive, ElementRef, Inject, Optional, Renderer2 } from '@angular/core';
import { SacListboxOptionCommon } from '@simpleangularcontrols/sac-common';

/**
 * Option Item in Listbox
 */
@Directive({ selector: '[sacOption],option' })
export class SacListboxOptionDirective extends SacListboxOptionCommon {
    // #region Constructors

    /**
     * Konstruktor
     * @param elementRef Referenz auf DOM Element
     * @param renderer Angular Rendering Engine
     * @param listbox Referenz auf Listbox Komponente
     */
    constructor(elementRef: ElementRef, renderer: Renderer2, @Optional() @Inject(LISTBOX_TOKEN) listbox: any) {
        super(elementRef, renderer, listbox);
    }

    // #endregion Constructors
}
