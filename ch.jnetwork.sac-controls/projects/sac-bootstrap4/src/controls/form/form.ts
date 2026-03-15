import { Directive, HostBinding } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SacFormCommon } from '@simpleangularcontrols/sac-common';

/**
 * Extension/hooking for automatic form logic. Required as container for all form controls.
 *
 * @example Example using div container
 *
 * <div ngForm></div>
 *
 * @example Example using form tag
 *
 * <form></form>
 *
 */
@Directive({
    selector: 'form:not([ngNoForm]):not([formGroup]),[ngForm]', // eslint-disable-line @angular-eslint/directive-selector -- required as extension to form
    exportAs: 'sacform',
})
export class SacFormDirective extends SacFormCommon {
    // #region Properties

    /**
     * Set the standard CSS class on the form container
     */
    @HostBinding('class.form')
    public cssClassForm: boolean = true;

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
