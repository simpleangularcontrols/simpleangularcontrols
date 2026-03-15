import { SacFormLayoutDirective } from '../layout/formlayout.directive';
import { ChangeDetectorRef, Component, ElementRef, Host, Injector, Optional, forwardRef } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SacDateTimeCommon } from '@simpleangularcontrols/sac-common';

@Component({
    selector: 'sac-datetime',
    templateUrl: './datetime.html',
    // Register Value Access Provider so the value can be written and read via model
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: forwardRef(() => SacDateTimeComponent),
        },
        {
            provide: NG_VALIDATORS,
            multi: true,
            useExisting: forwardRef(() => SacDateTimeComponent),
        },
    ],
})
export class SacDateTimeComponent extends SacDateTimeCommon {
    // #region Constructors

    /**
     * Constructor
     * @param formLayout SacFormLayout to define scoped layout settings
     * @param injector Injector for injecting services
     * @param elementRef Reference to html dom element
     * @param cdRef  Change Dectection Servie
     */
    constructor(
        @Host() @Optional() formLayout: SacFormLayoutDirective,
        injector: Injector,
        elementRef: ElementRef,
        cdRef: ChangeDetectorRef
    ) {
        super(formLayout, injector, elementRef, cdRef);
    }

    // #endregion Constructors
}
