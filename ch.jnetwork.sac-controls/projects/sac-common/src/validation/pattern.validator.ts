import { CreateValidationError } from './validationerrorcreator';
import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

// #region Exported Functions

/**
 * Returns a validator that checks if the control value matches a RegExp pattern.
 *
 * @param pattern Regular expression string that the value must match.
 * @param validationMessage Message shown when pattern validation fails.
 * @param validationMessageSummary Summary message shown when pattern validation fails.
 * @returns Validator function for pattern validation.
 */
export function patternValidator(
    pattern: string,
    validationMessage: string,
    validationMessageSummary: string
): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const validator: ValidatorFn = Validators.pattern(pattern);

        if (validator(control) !== null) {
            const parameters: Map<string, any> = new Map<string, any>();
            parameters.set('PATTERN', pattern);

            return CreateValidationError('pattern', validationMessage, validationMessageSummary, parameters);
        } else {
            return null;
        }
    };
}

// #endregion Exported Functions
