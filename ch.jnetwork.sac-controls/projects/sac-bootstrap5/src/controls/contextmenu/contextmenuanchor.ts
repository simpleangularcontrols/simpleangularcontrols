import { Directive, ElementRef, forwardRef } from '@angular/core';
import { SacContextmenuAnchorCommon } from '@simpleangularcontrols/sac-common';

/**
 * Anchor component for context menu. Required for positioning the context menu on the page.
 */
@Directive({
    selector: '[sacContextMenuAnchor]',
    providers: [
        {
            provide: SacContextmenuAnchorCommon,
            useExisting: forwardRef(() => SacContextmenuAnchorDirective),
        },
    ],
    standalone: true,
})
export class SacContextmenuAnchorDirective extends SacContextmenuAnchorCommon {
    // #region Constructors

    /**
     * Constructor
     * @param elementRef HTML DOM reference
     */
    constructor(elementRef: ElementRef<HTMLElement>) {
        super(elementRef);
    }

    // #endregion Constructors
}
