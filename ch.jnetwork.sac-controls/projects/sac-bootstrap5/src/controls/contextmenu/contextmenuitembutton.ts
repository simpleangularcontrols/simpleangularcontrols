import { NgClass, NgIf } from '@angular/common';
import { Component, forwardRef } from '@angular/core';
import { SacContextmenuItemButtonCommon, SacContextmenuItemCommon } from '@simpleangularcontrols/sac-common';

/**
 * Component for menu entry in context menu
 */
@Component({
    selector: 'sac-contextmenubutton',
    templateUrl: './contextmenuitembutton.html',
    providers: [
        {
            provide: SacContextmenuItemCommon,
            useExisting: forwardRef(() => SacContextmenuItemButtonComponent),
        },
    ],
    standalone: true,
    imports: [NgIf, NgClass],
})
export class SacContextmenuItemButtonComponent extends SacContextmenuItemButtonCommon {
    // #region Constructors

    /**
     * Constructor
     */
    constructor() {
        super();
    }

    // #endregion Constructors
}
