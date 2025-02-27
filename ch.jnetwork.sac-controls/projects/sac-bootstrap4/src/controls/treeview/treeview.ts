import { NgIf } from '@angular/common';
import { Component, Injector } from '@angular/core';
import { SacTreeviewCommon } from '@simpleangularcontrols/sac-common';

/**
 * Treeview Compomnent
 */
@Component({
    selector: 'sac-treeview',
    templateUrl: './treeview.html',
    standalone: true,
    imports: [NgIf],
})
export class SacTreeviewComponent extends SacTreeviewCommon {
    // #region Constructors

    /**
     * Constructor
     * @param injector Component Injector
     */
    constructor(injector: Injector) {
        super(injector);
    }

    // #endregion Constructors
}
