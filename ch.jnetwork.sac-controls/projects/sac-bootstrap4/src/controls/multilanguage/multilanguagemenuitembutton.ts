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
})
export class SacMultilanguagemenuItemButtonComponent extends SacContextmenuItemButtonCommon {
    // #region Constructors

    /**
     * Constructor
     */
    constructor() {
        super();
    }

    // #endregion Constructors
}
