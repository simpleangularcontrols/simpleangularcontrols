import { SacContextmenuAnchorDirective } from './contextmenuanchor';
import { SacContextmenuContainerDirective } from './contextmenucontainer';
import { DOCUMENT, NgClass, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, Inject, Injector, NgZone, Renderer2 } from '@angular/core';
import { SacContextmenuCommon, SacTestingAttributePipe } from '@simpleangularcontrols/sac-common';

/**
 * Context menu component
 */
@Component({
    selector: 'sac-contextmenu',
    templateUrl: './contextmenu.html',
    standalone: true,
    imports: [
        NgClass,
        NgTemplateOutlet,
        SacContextmenuContainerDirective,
        SacContextmenuAnchorDirective,
        SacTestingAttributePipe,
    ],
})
export class SacContextmenuComponent extends SacContextmenuCommon {
    // #region Constructors

    /**
     * Constructor
     * @param document Reference to HTML document
     * @param ngZone Angular Zone Service
     * @param elementRef Reference to HTML element of the current component
     * @param renderer Angular rendering service
     * @param cdr Change Detection service
     * @param injector injector to resolve services
     */
    constructor(
        @Inject(DOCUMENT) document: any,
        ngZone: NgZone,
        elementRef: ElementRef<HTMLElement>,
        renderer: Renderer2,
        cdr: ChangeDetectorRef,
        injector: Injector
    ) {
        super(document, ngZone, elementRef, renderer, cdr, injector);
    }

    // #endregion Constructors
}
