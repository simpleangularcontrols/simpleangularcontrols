import { Validation } from '../../validation';
import { SacInputCommon } from './input';
import { Directive, Input } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

/**
 * Basis Komponente für SacInputPassword
 */
@Directive()
export class SacInputPasswordCommon extends SacInputCommon {
    // #region Properties

    /**
     * Checks the minimum length of the password
     */
    @Input() public mintextlength: number = 5;

    /**
     * Resource key for validation message MinTextLength for control
     */
    @Input() public validationmessagemintextlength: string = this.validationKeyService.ValidationErrorMinTextLength;

    /**
     * Resource key for validation message MinTextLength in validation summary
     */
    @Input() public validationmessagesummarymintextlength: string =
        this.validationKeyService.ValidationErrorSummaryMinTextLength;

    // #endregion Properties

    // #region Public Methods

    /**
     * Methode validiert, ob der Wert den gegebenen Kriteriten entspricht
     */
    public validateData(c: AbstractControl): ValidationErrors | null {
        let error: ValidationErrors | null = super.validateData(c);

        if (error === null) {
            error = Validation.minTextLength(
                this.mintextlength,
                this.validationmessagemintextlength,
                this.validationmessagesummarymintextlength
            )(c);
        }

        return error;
    }

    // #endregion Public Methods
}
