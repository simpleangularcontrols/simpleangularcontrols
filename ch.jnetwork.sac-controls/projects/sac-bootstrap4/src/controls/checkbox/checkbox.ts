import { SacFormLayoutDirective } from '../layout/formlayout.directive';
import { Component, Host, Injector, Optional, forwardRef } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SacCheckboxCommon } from '@simpleangularcontrols/sac-common';

/**
 * Checkbox Kompontente
 */
@Component({
    selector: 'sac-checkbox',
    templateUrl: './checkbox.html',
    styleUrls: ['./checkbox.scss'],
    // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: SacCheckboxComponent,
        },
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => SacCheckboxComponent),
            multi: true,
        },
    ],
})
export class SacCheckboxComponent extends SacCheckboxCommon {
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
