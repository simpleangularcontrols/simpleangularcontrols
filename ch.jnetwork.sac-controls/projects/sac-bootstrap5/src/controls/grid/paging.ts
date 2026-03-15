import { Component, Injector, forwardRef } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SacPagingCommon } from '@simpleangularcontrols/sac-common';

/**
 * Paging component
 */
@Component({
    selector: 'sac-paging',
    templateUrl: './paging.html',
    // Register value access provider so that value can be written and read via model
    providers: [
        { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: SacPagingComponent },
        {
            provide: NG_VALIDATORS,
            multi: true,
            useExisting: forwardRef(() => SacPagingComponent),
        },
    ],
})
export class SacPagingComponent extends SacPagingCommon {
    // #region Constructors

    /**
     * Constructor
     * @param injector Angular Dependency Injection Service
     */
    constructor(injector: Injector) {
        super(injector);
    }

    // #endregion Constructors
}
