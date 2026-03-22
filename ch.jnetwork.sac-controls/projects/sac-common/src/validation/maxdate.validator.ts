import { IDateTimeControl } from '../interfaces/idatetimecontrol';
import { isDateValid } from './isDateValid';
import { CreateValidationError } from './validationerrorcreator';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import moment from 'moment';

// #region Exported Functions

/**
 * Returns a validator that checks if the control date is <= maxDate.
 *
 * @param maxDate Maximum allowed date.
 * @param validationMessage Message shown when date is too late.
 * @param validationMessageSummary Summary message shown when date is too late.
 * @returns Validator function for maximum date validation.
 */
export function maxDateValidator(
    maxDate: Date,
    validationMessage: string,
    validationMessageSummary: string
): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const ctl = control as unknown as IDateTimeControl;

        // Cancel check if no valid date
        if (!isDateValid(ctl.value, ctl.datetimeformatstring) || maxDate === null) {
            return null;
        }

        if (ctl.value !== null && maxDate < ctl.value) {
            const parameters: Map<string, any> = new Map<string, any>();
            parameters.set('MAXDATE', moment(maxDate).format(ctl.datetimeformatstring));

            return CreateValidationError('datemax', validationMessage, validationMessageSummary, parameters);
        } else {
            return null;
        }
    };
}

// #endregion Exported Functions
