import { CreateValidationError } from './validationerrorcreator';
import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

// #region Exported Functions

/**
 * Returns a validator that checks if the control value is a valid email.
 *
 * @param validationMessage Message shown for the field when validation fails.
 * @param validationMessageSummary Message shown in summary when validation fails.
 * @returns Validator function to validate email format.
 */
export function emailValidator(validationMessage: string, validationMessageSummary: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        if (Validators.email(control) !== null) {
            return CreateValidationError('email', validationMessage, validationMessageSummary);
        } else {
            return null;
        }
    };
}

// #endregion Exported Functions
