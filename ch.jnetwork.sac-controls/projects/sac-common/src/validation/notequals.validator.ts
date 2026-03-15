import { CreateValidationError } from './validationerrorcreator';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// #region Exported Functions

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
