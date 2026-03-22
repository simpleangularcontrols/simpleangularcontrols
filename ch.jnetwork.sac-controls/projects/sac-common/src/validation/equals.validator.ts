import { CreateValidationError } from './validationerrorcreator';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// #region Exported Functions

/**
 * Returns a validator that checks if the control value equals a required value.
 *
 * @param requiredvalue Value that control must equal.
 * @param validationMessage Message shown when validation fails.
 * @param validationMessageSummary Summary message shown when validation fails.
 * @returns Validator function to validate equality.
 */
export function equalsValueValidator(
    requiredvalue: any,
    validationMessage: string,
    validationMessageSummary: string
): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        if (control.value !== requiredvalue) {
            const parameters: Map<string, any> = new Map<string, any>();
            parameters.set('EQUALSVALUE', requiredvalue);

            return CreateValidationError('equals', validationMessage, validationMessageSummary, parameters);
        } else {
            return null;
        }
    };
}

// #endregion Exported Functions
