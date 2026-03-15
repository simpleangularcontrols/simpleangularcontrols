import { IDateTimeControl } from '../interfaces/idatetimecontrol';
import { isDateValid } from './isDateValid';
import { CreateValidationError } from './validationerrorcreator';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// #region Exported Functions

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
