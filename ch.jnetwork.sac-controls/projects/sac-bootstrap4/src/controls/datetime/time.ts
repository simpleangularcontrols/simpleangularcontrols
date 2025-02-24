import { SacFormLayoutDirective } from '../layout/formlayout.directive';
import { ChangeDetectorRef, Component, ElementRef, Host, Injector, Optional, forwardRef } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SacTimeCommon } from '@simpleangularcontrols/sac-common';

/**
 * Time Auswahl Komponente
 */
@Component({
    selector: 'sac-time',
    templateUrl: './time.html',
    // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: forwardRef(() => SacTimeComponent),
        },
        {
            provide: NG_VALIDATORS,
            multi: true,
            useExisting: forwardRef(() => SacTimeComponent),
        },
    ],
})
export class SacTimeComponent extends SacTimeCommon {
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
