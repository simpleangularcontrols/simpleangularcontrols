import { CreateValidationError } from './validationerrorcreator';
import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

// #region Exported Functions

export function minTextLengthValidator(
    mintextlength: number,
    validationMessage: string,
    validationMessageSummary: string
): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const validator: ValidatorFn = Validators.minLength(mintextlength);

        if (
            mintextlength !== null &&
            mintextlength !== undefined &&
            control.value !== '' &&
            control.value !== undefined &&
            control.value != null &&
            validator(control) != null
        ) {
            const parameters: Map<string, any> = new Map<string, any>();
            parameters.set('MINTEXTLENGTH', mintextlength);

            return CreateValidationError('mintextlength', validationMessage, validationMessageSummary, parameters);
        } else {
            return null;
        }
    };
}

// #endregion Exported Functions
