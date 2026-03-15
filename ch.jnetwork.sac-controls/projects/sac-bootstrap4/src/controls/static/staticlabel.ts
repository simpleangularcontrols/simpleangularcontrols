import { SacFormLayoutDirective } from '../layout/formlayout.directive';
import { Component, Host, Injector, Optional, forwardRef } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SacStaticLabelCommon } from '@simpleangularcontrols/sac-common';

/**
 * Component for static text in a form
 */
@Component({
    selector: 'sac-staticlabel',
    templateUrl: './staticlabel.html',
    // Register Value Access Provider so the value can be written and read via model
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: SacStaticLabelComponent,
        },
        {
            provide: NG_VALIDATORS,
            multi: true,
            useExisting: forwardRef(() => SacStaticLabelComponent),
        },
    ],
})
export class SacStaticLabelComponent extends SacStaticLabelCommon {
    // #region Constructors

    /**
     *
     * @param formLayout SacFormLayout to define scoped layout settings
     * @param injector Injector for injecting services
     */
    constructor(@Host() @Optional() formLayout: SacFormLayoutDirective, injector: Injector) {
        super(formLayout, injector);
    }

    // #endregion Constructors
}
