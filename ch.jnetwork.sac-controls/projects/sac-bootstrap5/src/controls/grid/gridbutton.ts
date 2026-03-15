import { Component, Injector } from '@angular/core';
import { SacGridButtonCommon } from '@simpleangularcontrols/sac-common';

/**
 * Grid Action Button
 */
@Component({
    selector: 'sac-gridbutton',
    templateUrl: './gridbutton.html',
    standalone: true,
})
export class SacGridButtonComponent extends SacGridButtonCommon {
    // #region Constructors

    /**
     * Constructor
     *
     * @param injector Injector to resolve icons
     */
    constructor(injector: Injector) {
        super(injector);
    }

    // #endregion Constructors
}
