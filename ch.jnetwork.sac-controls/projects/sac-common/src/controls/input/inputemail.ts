import { Validation } from '../../validation';
import { SacInputCommon } from './input';
import { Directive, Input } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

/**
 * Base component for SacInputEmail
 */
@Directive()
export class SacInputEmailCommon extends SacInputCommon {
    // #region Properties

    /**
     * Resource key for validation message email in Control
     */
    @Input() public validationmessageemail: string = this.validationKeyService.ValidationErrorEmail;

    /**
     * Resource key for the validation message email in the validation summary
     */
    @Input() public validationmessagesummaryemail: string = this.validationKeyService.ValidationErrorSummaryEmail;

    // #endregion Properties

    // #region Public Methods

    /**
     * Method validates whether the value meets the given criteria
     */
    public validateData(c: AbstractControl): ValidationErrors | null {
        let error: ValidationErrors | null = super.validateData(c);

        if (error === null) {
            error = Validation.email(this.validationmessageemail, this.validationmessagesummaryemail)(c);
        }

        return error;
    }

    // #endregion Public Methods
}
