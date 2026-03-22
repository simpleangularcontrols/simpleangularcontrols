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
 *
 */
@Directive({
    selector: 'form:not([ngNoForm]):not([formGroup]),[ngForm]', // eslint-disable-line @angular-eslint/directive-selector -- required as extension to form
    exportAs: 'sacform',
    standalone: true,
})
export class SacFormDirective extends SacFormCommon {
    // #region Properties

    /**
     * Sets the standard CSS class on the form container
     */
    @HostBinding('class.form')
    public cssClassForm = true;

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
