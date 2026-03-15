import { IDateTimeControl } from '../interfaces/idatetimecontrol';
import { isDateValid } from './isDateValid';
import { CreateValidationError } from './validationerrorcreator';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import moment from 'moment';

// #region Exported Functions

export function minTimeValidator(
    minTime: Date,
    validationMessage: string,
    validationMessageSummary: string
): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const ctl = control as unknown as IDateTimeControl;

        // Cancel check if no valid date
        if (!isDateValid(ctl.value, ctl.datetimeformatstring) || minTime === null) {
            return null;
        }

        if (ctl.value !== null && minTime > ctl.value) {
            const parameters: Map<string, any> = new Map<string, any>();
            parameters.set('MINTIME', moment(minTime).format(ctl.datetimeformatstring));

            return CreateValidationError('timemin', validationMessage, validationMessageSummary, parameters);
        } else {
            return null;
        }
    };
}

// #endregion Exported Functions
