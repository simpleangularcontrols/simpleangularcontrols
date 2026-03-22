import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, Injector, NgZone, Renderer2, forwardRef } from '@angular/core';
import { SacContextmenuCommon } from '@simpleangularcontrols/sac-common';

/**
 * Component for context menu
 */
@Component({
    selector: '[sac-multilanguagemenu]', // eslint-disable-line @angular-eslint/component-selector -- bootstrap requires append-items direct behind the previews element
    templateUrl: './multilanguagemenu.html',
    providers: [
        {
            provide: SacContextmenuCommon,
            useExisting: forwardRef(() => SacMultilanguagemenuComponent),
        },
    ],
})
export class SacMultilanguagemenuComponent extends SacContextmenuCommon {
    // #region Constructors

    /**
     * Constructor
     * @param document Reference to HTML document
     * @param ngZone Angular Zone Service
     * @param elementRef Reference to HTML element of the current component
     * @param renderer Angular Render Service
     * @param injector injector to resolve services in base component
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
