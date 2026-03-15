import { Directive, ElementRef, forwardRef } from '@angular/core';
import { SacContextMenuContrainerCommon } from '@simpleangularcontrols/sac-common';

/**
 * Marker component for context menu
 */
@Directive({
    selector: '[sacContextMenuContainer]',
    providers: [
        {
            provide: SacContextMenuContrainerCommon,
            useExisting: forwardRef(() => SacContextmenuContainerDirective),
        },
    ],
    standalone: true,
})
export class SacContextmenuContainerDirective extends SacContextMenuContrainerCommon {
    // #region Constructors

    /**
     * Constructor
     * @param elementRef Reference to DOM element
     */
    constructor(elementRef: ElementRef<HTMLElement>) {
        super(elementRef);
    }

    // #endregion Constructors
}
