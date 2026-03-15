import { SacInputBase } from '../../common/baseinputcontrol';
import { Validation } from '../../validation';
import { Directive, Input } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

/**
 * Base component for SacInputDecimal
 */
@Directive()
export class SacInputDecimalCommon extends SacInputBase<number> {
    // #region Properties

    /**
     * Defines whether negative values are allowed
     */
    @Input() public allownegativ = false;

    /**
     * Defines the maximum value
     */
    @Input() public maxvalue: number = undefined;

    /**
     * Defines the minimum value
     */
    @Input() public minvalue: number = undefined;

    /**
     * Resource key for validation message MaxValue at control
     */
    @Input() public validationmessagemaxvalue: string = this.validationKeyService.ValidationErrorMaxValue;

    /**
     * Resource key for validation message MinValue at control
     */
    @Input() public validationmessageminvalue: string = this.validationKeyService.ValidationErrorMinValue;

    /**
     * Resource key for validation message Required at control
     */
    @Input() public validationmessagerequired: string = this.validationKeyService.ValidationErrorRequired;

    /**
     * Resource key for validation message MaxValue in validation summary
     */
    @Input() public validationmessagesummarymaxvalue: string = this.validationKeyService.ValidationErrorSummaryMaxValue;

    /**
     * Resource key for validation message MinValue in validation summary
     */
    @Input() public validationmessagesummaryminvalue: string = this.validationKeyService.ValidationErrorSummaryMinValue;

    /**
     * Resource key for validation message Required in validation summary
     */
    @Input() public validationmessagesummaryrequired: string = this.validationKeyService.ValidationErrorRequired;

    // #endregion Properties

    // #region Public Methods

    /**
     * Method validates whether the value meets the given criteria
     */
    public validateData(c: AbstractControl): ValidationErrors | null {
        /**
         * Error message shown when the criteria are not met
         */
        let error: ValidationErrors | null = null;

        if (this.isrequired) {
            error = Validation.required(this.validationmessagerequired, this.validationmessagesummaryrequired)(c);
        }

        if (error === null && this.minvalue !== undefined && this.minvalue !== null) {
            error = Validation.minValue(
                this.minvalue,
                this.validationmessageminvalue,
                this.validationmessagesummaryminvalue
            )(c);
        }

        if (error === null && this.maxvalue !== undefined && this.maxvalue !== null) {
            error = Validation.maxValue(
                this.maxvalue,
                this.validationmessagemaxvalue,
                this.validationmessagesummarymaxvalue
            )(c);
        }

        return error;
    }

    // #endregion Public Methods

    // #region Protected Methods

    /**
     * Converts the input value
     */
    protected ConvertInputValue(value: any): any {
        if (value === '' || value === null) {
            return null;
        } else {
            if (this.allownegativ === true && value === '-') {
                return '-';
            } else if (value === '.') {
                return '0.';
            } else {
                return parseFloat(value);
            }
        }
    }

    /**
     * Method that creates the control depending on whether negative values are allowed
     */
    protected OnClassInit(): void {
        super.OnClassInit();

        /**
         * Defines the allowed characters
         */
        this.allowedchars = '0123456789' + this.GetDecimalSymbol();

        if (this.allownegativ) {
            this.allowedchars = this.allowedchars + '-';
        }
    }

    /**
     * Method validates whether the value meets the given criteria when a key is pressed
     */
    protected OnKeyPressValidation(position: number, character: string): boolean {
        if (
            (this.allownegativ === false && character === '-') ||
            (this.allownegativ === true && position > 0 && character === '-')
        ) {
            return false;
        }

        // Preventing the entry of a colon (45..545)
        if (this._value !== null && this._value.toString().length < position && character === '.') {
            return false;
        }

        if (
            character === this.GetDecimalSymbol() &&
            this._value !== null &&
            this._value.toString().indexOf(this.GetDecimalSymbol()) >= 0
        ) {
            return false;
        } else {
            return true;
        }
    }

    // #endregion Protected Methods
}
