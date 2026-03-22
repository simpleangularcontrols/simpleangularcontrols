import { IDateTimeControl } from '../interfaces/idatetimecontrol';
import { isDateValid } from './isDateValid';
import { CreateValidationError } from './validationerrorcreator';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// #region Exported Functions

/**
 * Returns a validator that checks if the control value is a valid date.
 *
 * @param validationMessage Message shown when date format is invalid.
 * @param validationMessageSummary Summary message shown when date format is invalid.
 * @returns Validator function for date format validation.
 */
export function isValidDateValidator(validationMessage: string, validationMessageSummary: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const ctl = control as unknown as IDateTimeControl;

        if (!isDateValid(control.value, ctl.datetimeformatstring)) {
            return CreateValidationError('dateformat', validationMessage, validationMessageSummary);
        } else {
            return null;
        }
    };
}

// #endregion Exported Functions
