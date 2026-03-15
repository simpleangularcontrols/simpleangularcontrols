import { NgIf } from '@angular/common';
import { Component, forwardRef } from '@angular/core';
import { SacContextmenuItemButtonCommon, SacContextmenuItemCommon } from '@simpleangularcontrols/sac-common';

/**
 * Component for menu entry in context menu
 */
@Component({
    selector: 'sac-multilanguagemenubutton',
    templateUrl: './multilanguagemenuitembutton.html',
    providers: [
        {
            provide: SacContextmenuItemCommon,
            useExisting: forwardRef(() => SacMultilanguagemenuItemButtonComponent),
        },
    ],
    standalone: true,
    imports: [NgIf],
})
export class SacMultilanguagemenuItemButtonComponent extends SacContextmenuItemButtonCommon {
    // #region Constructors

    /**
     * Constructor
     * @param contextmenu Instance of context menu
     */
    constructor() {
        super();
    }

    // #endregion Constructors
}
