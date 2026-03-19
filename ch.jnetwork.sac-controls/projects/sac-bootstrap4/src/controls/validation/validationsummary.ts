import { SacFormDirective } from '../form';
import { Component, Host, Injector, Optional } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { SacValidationSummaryCommon } from '@simpleangularcontrols/sac-common';

/**
 * Validation Summary component
 */
@Component({
    selector: 'sac-validationsummary',
    templateUrl: './validationsummary.html',
    // Register value access provider so that value can be written and read via model
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: SacValidationSummaryComponent,
        },
    ],
})
export class SacValidationSummaryComponent extends SacValidationSummaryCommon {
    // #region Constructors

    /**
     * Constructor
     * @param parentForm Instance of Form Component to receive invalid form controls
     * @param injector Injector for injecting services
     */
    constructor(@Host() @Optional() parentForm: SacFormDirective, injector: Injector) {
        super(parentForm, injector);
    }

    // #endregion Constructors
}
