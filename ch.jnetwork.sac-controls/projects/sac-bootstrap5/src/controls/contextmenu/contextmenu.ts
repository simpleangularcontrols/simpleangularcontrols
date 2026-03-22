import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, Injector, NgZone, Renderer2 } from '@angular/core';
import { SacContextmenuCommon } from '@simpleangularcontrols/sac-common';

/**
 * Component for context menu
 */
@Component({
    selector: 'sac-contextmenu',
    templateUrl: './contextmenu.html',
})
export class SacContextmenuComponent extends SacContextmenuCommon {
    // #region Constructors

    /**
     * Constructor
     * @param document Reference to HTML document
     * @param ngZone Angular zone service
     * @param elementRef Reference to HTML element of the current component
     * @param renderer Angular render service
     * @param injector Injector to resolve services
     */
    constructor(
        @Inject(DOCUMENT) document: any,
        ngZone: NgZone,
        elementRef: ElementRef<HTMLElement>,
        renderer: Renderer2,
        injector: Injector
    ) {
        super(document, ngZone, elementRef, renderer, injector);
    }

    // #endregion Constructors
}
