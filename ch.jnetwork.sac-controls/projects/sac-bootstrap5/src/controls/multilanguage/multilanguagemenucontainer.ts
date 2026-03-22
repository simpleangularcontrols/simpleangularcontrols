import { Directive, ElementRef, forwardRef } from '@angular/core';
import { SacContextMenuContrainerCommon } from '@simpleangularcontrols/sac-common';

/**
 * Marker component for context menu
 */
@Directive({
    selector: '[sacMultilanguageMenuContainer]',
    providers: [
        {
            provide: SacContextMenuContrainerCommon,
            useExisting: forwardRef(() => SacMultilanguagemenuContainerDirective),
        },
    ],
    standalone: true,
})
export class SacMultilanguagemenuContainerDirective extends SacContextMenuContrainerCommon {
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
