import { CreateValidationError } from './validationerrorcreator';
import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

// #region Exported Functions

/**
 * Returns a validator that ensures the control value is present.
 *
 * @param validationMessage Message shown for the field when validation fails.
 * @param validationMessageSummary Message shown in summary for the field when validation fails.
 * @returns Validator function to validate required values.
 */
export function requiredValidator(validationMessage: string, validationMessageSummary: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        if (Validators.required(control) !== null) {
            return CreateValidationError('required', validationMessage, validationMessageSummary);
        } else {
            return null;
        }
    };
}

// #endregion Exported Functions
