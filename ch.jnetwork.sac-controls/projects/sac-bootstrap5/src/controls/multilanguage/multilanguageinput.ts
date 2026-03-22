import { SacFormLayoutDirective } from '../layout/formlayout.directive';
import { Component, Host, Injector, Optional, forwardRef } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IconType, SacMultilanguageInputCommon } from '@simpleangularcontrols/sac-common';

/**
 * Component for multilingual text
 */
@Component({
    selector: 'sac-multilanguageinput',
    templateUrl: './multilanguageinput.html',
    // Register value access provider so that value can be written and read via model
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: SacMultilanguageInputComponent,
        },
        {
            provide: NG_VALIDATORS,
            multi: true,
            useExisting: forwardRef(() => SacMultilanguageInputComponent),
        },
    ],
})
export class SacMultilanguageInputComponent extends SacMultilanguageInputCommon {
    // #region Properties

    /**
     * Enum for IconType in HTML template
     */
    public IconType = IconType;

    // #endregion Properties

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
