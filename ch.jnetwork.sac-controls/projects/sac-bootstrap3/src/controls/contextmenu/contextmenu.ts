import { SacContextmenuAnchorDirective } from './contextmenuanchor';
import { SacContextmenuContainerDirective } from './contextmenucontainer';
import { DOCUMENT, NgClass, NgTemplateOutlet } from '@angular/common';
import { Component, ElementRef, Inject, Injector, NgZone, Renderer2 } from '@angular/core';
import { SacContextmenuCommon } from '@simpleangularcontrols/sac-common';

/**
 * Component for context menu
 */
@Component({
    selector: 'sac-contextmenu',
    templateUrl: './contextmenu.html',
    standalone: true,
    imports: [NgClass, NgTemplateOutlet, SacContextmenuContainerDirective, SacContextmenuAnchorDirective],
})
export class SacContextmenuComponent extends SacContextmenuCommon {
    // #region Constructors

    /**
     * Constructor
     * @param document Reference to HTML document
     * @param ngZone Angular Zone Service
     * @param elementRef Reference to HTML element of the current component
     * @param renderer Render Service from Angular
     * @param injector injector to resolve services
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
