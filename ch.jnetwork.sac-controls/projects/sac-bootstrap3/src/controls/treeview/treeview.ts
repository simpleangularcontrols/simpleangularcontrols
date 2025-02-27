import { SacFormLayoutDirective } from '../layout/formlayout.directive';
import { Component, Host, Injector, Optional } from '@angular/core';
import { SacTreeviewCommon } from '@simpleangularcontrols/sac-common';

/**
 * Treeview Compomnent
 */
@Component({
    selector: 'sac-treeview',
    templateUrl: './treeview.html',
})
export class SacTreeviewComponent extends SacTreeviewCommon {
    // #region Constructors

    /**
     * Constructor
     * @param formLayout SacFormLayout to define scoped layout settings
     * @param injector Component Injector
     */
    constructor(@Host() @Optional() formLayout: SacFormLayoutDirective, injector: Injector) {
        super(formLayout, injector);
    }

    // #endregion Constructors
}
