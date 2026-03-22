import { CreateValidationError } from './validationerrorcreator';
import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

// #region Exported Functions

/**
 * Returns a validator that checks if the control value is >= minvalue.
 *
 * @param minvalue Minimum allowed numeric value.
 * @param validationMessage Message shown when value is too small.
 * @param validationMessageSummary Summary message shown when value is too small.
 * @returns Validator function for minimum value validation.
 */
export function minValueValidator(
    minvalue: number,
    validationMessage: string,
    validationMessageSummary: string
): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const validator: ValidatorFn = Validators.min(minvalue);

        if (validator(control) !== null) {
            const parameters: Map<string, any> = new Map<string, any>();
            parameters.set('MINVALUE', minvalue);

            return CreateValidationError('minvalue', validationMessage, validationMessageSummary, parameters);
        } else {
            return null;
        }
    };
}

// #endregion Exported Functions
