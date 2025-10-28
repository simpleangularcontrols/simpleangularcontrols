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
     * Password Eye Button is enabled
     */
    @Input() public passwordeye = false;

    /**
     * Password Eye is visible
     */
    public passwordeyevisible = false;

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

    // #region Public Getters And Setters

    /**
     *Icon used by InputPassword to hide the password in the input field
     */
    public get PasswordEyeHiddenIcon(): string {
        return this.iconService.InputPasswordEyeVisibleIcon;
    }

    /**
     * Icon used by InputPassword to display the password in plain text during input
     */
    public get PasswordEyeVisibleIcon(): string {
        return this.iconService.InputPasswordEyeHiddenIcon;
    }

    // #endregion Public Getters And Setters

    // #region Public Methods

    /**
     * Toggle Password Eye Visible Property
     */
    public onTogglePasswordEye(): void {
        if (this.disabled || !this.passwordeye) {
            return;
        }

        this.passwordeyevisible = !this.passwordeyevisible;
    }

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
