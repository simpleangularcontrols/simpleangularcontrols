import { CreateValidationError } from './validationerrorcreator';
import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

// #region Exported Functions

/**
 * Returns a validator that checks if the control value is <= maxvalue.
 *
 * @param maxvalue Maximum allowed numeric value.
 * @param validationMessage Message shown when value is too large.
 * @param validationMessageSummary Summary message shown when value is too large.
 * @returns Validator function for maximum value validation.
 */
export function maxValueValidator(
    maxvalue: number,
    validationMessage: string,
    validationMessageSummary: string
): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const validator: ValidatorFn = Validators.max(maxvalue);

        if (validator(control) !== null) {
            const parameters: Map<string, any> = new Map<string, any>();
            parameters.set('MAXVALUE', maxvalue);

            return CreateValidationError('maxvalue', validationMessage, validationMessageSummary, parameters);
        } else {
            return null;
        }
    };
}

// #endregion Exported Functions
