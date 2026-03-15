import { SacInputBase } from '../../common/baseinputcontrol';
import { Validation } from '../../validation';
import { Directive, Input } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

/**
 * Base component for SacInput
 */
@Directive()
export class SacInputCommon extends SacInputBase<string> {
    // #region Properties

    /**
     * Define fixed width for the control.
     */
    @Input() public controlwidth: string = null;

    /**
     * Max length of characters for input field
     */
    @Input() public maxtextlength: number = null;

    /**
     * Resource key for validation message pattern at control
     */
    @Input() public validationmessagepattern: string = this.validationKeyService.ValidationErrorPattern;

    /**
     * Resource key for validation message required at control
     */
    @Input() public validationmessagerequired: string = this.validationKeyService.ValidationErrorRequired;

    /**
     * Resource key for validation message pattern in validation summary
     */
    @Input() public validationmessagesummarypattern: string = this.validationKeyService.ValidationErrorSummaryPattern;

    /**
     * Resource key for validation message required in validation summary
     */
    @Input() public validationmessagesummaryrequired: string = this.validationKeyService.ValidationErrorSummaryRequired;

    // #endregion Properties

    // #region Public Methods

    /**
     * Method validates whether the value meets the given criteria
     */
    public validateData(c: AbstractControl): ValidationErrors | null {
        let error: ValidationErrors | null = null;

        if (this.isrequired) {
            error = Validation.required(this.validationmessagerequired, this.validationmessagesummaryrequired)(c);
        }

        if (error === null && this.regexvalidation !== undefined && this.regexvalidation !== null) {
            error = Validation.pattern(
                this.regexvalidation,
                this.validationmessagepattern,
                this.validationmessagesummarypattern
            )(c);
        }
        return error;
    }

    // #endregion Public Methods
}
