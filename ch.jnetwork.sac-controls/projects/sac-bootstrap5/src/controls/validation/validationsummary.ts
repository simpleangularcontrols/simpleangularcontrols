import { SacFormDirective } from '../form';
import { Component, Host, Injector, Optional } from '@angular/core';
import { ControlContainer, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SacValidationSummaryCommon } from '@simpleangularcontrols/sac-common';

/**
 * Validation summary component
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
    // View provider so that the form can be bound to the control
    viewProviders: [{ provide: ControlContainer, useExisting: SacFormDirective }],
})
export class SacValidationSummaryComponent extends SacValidationSummaryCommon {
    // #region Constructors

    /**
     * Constructor
     * @param formControl Instance of Form Component to receive invalid form controls
     * @param injector Injector for injecting services
     */
    constructor(@Host() @Optional() formControl: SacFormDirective, injector: Injector) {
        super(formControl, injector);
    }

    // #endregion Constructors
}
