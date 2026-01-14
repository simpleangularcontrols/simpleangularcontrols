import { LISTBOX_TOKEN } from './list.token';
import { Directive, ElementRef, Inject, Optional, Renderer2 } from '@angular/core';
import { SacListboxOptionCommon } from '@simpleangularcontrols/sac-common';

@Directive({ selector: 'option,[sacOption]' })
export class SacListboxOptionDirective extends SacListboxOptionCommon {
    // #region Constructors

    /**
     * Konstruktor
     * @param elementRef Referenz auf HTML DOM Element
     * @param renderer Angular Rendering Engine
     * @param listboxComponent Referenz auf DropDown Komponente
     */
    constructor(elementRef: ElementRef, renderer: Renderer2, @Optional() @Inject(LISTBOX_TOKEN) listboxComponent: any) {
        super(elementRef, renderer, listboxComponent);
    }

    // #endregion Constructors
}
