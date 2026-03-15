import { SacFormLayoutDirective } from '../layout/formlayout.directive';
import { Component, Host, Injector, Optional, forwardRef } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SacInputCommon } from '@simpleangularcontrols/sac-common';

/**
 * Input component
 */
@Component({
    selector: 'sac-input',
    templateUrl: './input.html',
    // Register value access provider so that value can be written and read via model
    providers: [
        { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: SacInputComponent },
        {
            provide: NG_VALIDATORS,
            multi: true,
            useExisting: forwardRef(() => SacInputComponent),
        },
    ],
})
export class SacInputComponent extends SacInputCommon {
    // #region Constructors

    /**
     * Constructor
     * @param formLayout SacFormLayout to define scoped layout settings
     * @param injector Injector for injecting services
     */
    constructor(@Host() @Optional() formLayout: SacFormLayoutDirective, injector: Injector) {
        super(formLayout, injector);
    }

    // #endregion Constructors
}
