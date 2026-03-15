import { SacFormDirective } from '../form/form';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, Host, Injector, Optional } from '@angular/core';
import { ControlContainer, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SacTestingAttributePipe, SacValidationSummaryCommon } from '@simpleangularcontrols/sac-common';

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
    // View Provider so that the form can be bound to the control
    viewProviders: [{ provide: ControlContainer, useExisting: SacFormDirective }],
    standalone: true,
    imports: [NgIf, NgFor, AsyncPipe, SacTestingAttributePipe],
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
