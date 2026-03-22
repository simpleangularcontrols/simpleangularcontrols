import { SacFormLayoutDirective } from '../layout/formlayout.directive';
import { Component, Host, Injector, Optional, forwardRef } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SacInputDecimalCommon } from '@simpleangularcontrols/sac-common';

/**
 * Decimal input component with number formatting.
 */
@Component({
    selector: 'sac-inputdecimal',
    templateUrl: './inputdecimal.html',
    // Register Value Access Provider so the value can be written and read via model
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: SacInputDecimalComponent,
        },
        {
            provide: NG_VALIDATORS,
            multi: true,
            useExisting: forwardRef(() => SacInputDecimalComponent),
        },
    ],
})
export class SacInputDecimalComponent extends SacInputDecimalCommon {
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
