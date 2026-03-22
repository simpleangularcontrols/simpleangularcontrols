import { SacFormLayoutDirective } from '../layout/formlayout.directive';
import { ChangeDetectorRef, Component, ElementRef, Host, Injector, Optional, forwardRef } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SacDateCommon } from '@simpleangularcontrols/sac-common';
import * as moment_ from 'moment';

// #region Variables

/**
 * Moment.js instance used for date parsing/formatting with UTC/local conversion.
 */
const moment = moment_['default'];

// #endregion Variables

// #region Exported Classes

/**
 * Date input component for Bootstrap 3.
 * Provides date picker integration and validation through SacDateCommon base class.
 */
@Component({
    selector: 'sac-date',
    templateUrl: './date.html',
    // Register Value Access Provider so the value can be written and read via model
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: forwardRef(() => SacDateComponent),
        },
        {
            provide: NG_VALIDATORS,
            multi: true,
            useExisting: forwardRef(() => SacDateComponent),
        },
    ],
})
export class SacDateComponent extends SacDateCommon {
    // #region Constructors

    /**
     * Constructor
     * @param formLayout SacFormLayout to define scoped layout settings
     * @param injector Injector for injecting services
     * @param elementRef Reference to html dom element
     * @param cdRef  Change Detection Service
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

// #endregion Exported Classes
