import { Directive, HostBinding } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SacFormCommon } from '@simpleangularcontrols/sac-common';

/**
 * Extension / hooking for automatisms in the form. Required as container for all controls.
 *
 * @example Example using div container
 *
 * <div ngForm></div>
 *
 * @example Example using form tag
 *
 * <form></form>
 */
/* eslint @angular-eslint/directive-selector: 0 */
@Directive({
    selector: 'form:not([ngNoForm]):not([formGroup]),[ngForm]',
    exportAs: 'sacform',
    standalone: true,
})
export class SacFormDirective extends SacFormCommon {
    // #region Properties

    /**
     * Sets the standard CSS class for forms on the form container
     */
    @HostBinding('class.form')
    public cssClassForm = true;

    /**
     * Sets the default CSS class for horizontal forms on the form container
     */
    @HostBinding('class.form-horizontal')
    public cssClassHorizontal = true;

    // #endregion Properties

    // #region Constructors

    /**
     * Constructor
     * @param form Instance of NgForm for own automatic form logic
     */
    constructor(form: NgForm) {
        super(form);
    }

    // #endregion Constructors
}
