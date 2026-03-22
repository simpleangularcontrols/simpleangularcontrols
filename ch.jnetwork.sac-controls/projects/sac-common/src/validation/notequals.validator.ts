import { CreateValidationError } from './validationerrorcreator';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// #region Exported Functions

/**
 * Returns a validator that checks the control value is different from invalidValue.
 *
 * @param invalidValue Value that is not allowed.
 * @param validationMessage Message shown when control value matches invalid value.
 * @param validationMessageSummary Summary message shown when control value matches invalid value.
 * @returns Validator function for not-equals validation.
 */
export function notEqualsValueValidator(
    invalidValue: any,
    validationMessage: string,
    validationMessageSummary: string
): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        if (control.value === invalidValue) {
            const parameters: Map<string, any> = new Map<string, any>();
            parameters.set('EQUALSVALUE', invalidValue);

            return CreateValidationError('notequals', validationMessage, validationMessageSummary, parameters);
        } else {
            return null;
        }
    };
}

// #endregion Exported Functions
