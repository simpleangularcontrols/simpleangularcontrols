import { SacBaseModelControl } from '../../common/basemodelcontrol';
import { convertToBoolean } from '../../utilities/convertion';
import { Directive, Input } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

/**
 * Common control for form item container.
 **/
@Directive()
export class SacStaticFormContainerCommon extends SacBaseModelControl<string> {
    // #region Properties

    /**
     * Defines the container as a required form item
     */
    private _isrequired = false;

    /**
     * Error message to be displayed
     */
    @Input()
    public errormessage = '';

    /**
     * Activates the error message on the container control
     */
    @Input()
    public isinvalid = false;

    // #endregion Properties

    // #region Public Getters And Setters

    /**
     * Defines the container as a required form item
     */
    public get isrequired(): boolean {
        return this._isrequired;
    }

    /**
     * Defines the container as a required form item
     */
    @Input()
    public set isrequired(v: boolean) {
        this._isrequired = convertToBoolean(v);
    }

    // #endregion Public Getters And Setters

    // #region Public Methods

    /**
     * Validation of the control
     *
     * @description Validation is not performed on the form container because there is no model binding.
     * @param c Control to be validated
     * @returns Error message from validation or null
     */
    public validateData(c: AbstractControl): ValidationErrors | null {
        // No validation, therefore always null
        return null;
    }

    // #endregion Public Methods
}
