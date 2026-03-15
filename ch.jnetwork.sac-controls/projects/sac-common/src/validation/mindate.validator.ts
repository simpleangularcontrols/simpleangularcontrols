import { IDateTimeControl } from '../interfaces/idatetimecontrol';
import { isDateValid } from './isDateValid';
import { CreateValidationError } from './validationerrorcreator';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import moment from 'moment';

// #region Exported Functions

export function minDateValidator(
    minDate: Date,
    validationMessage: string,
    validationMessageSummary: string
): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const ctl = control as unknown as IDateTimeControl;

        // Cancel check if no valid date
        if (!isDateValid(ctl.value, ctl.datetimeformatstring) || minDate === null) {
            return null;
        }

        if (ctl.value !== null && minDate > ctl.value) {
            const parameters: Map<string, any> = new Map<string, any>();
            parameters.set('MINDATE', moment(minDate).format(ctl.datetimeformatstring));

            return CreateValidationError('datemin', validationMessage, validationMessageSummary, parameters);
        } else {
            return null;
        }
    };
}

// #endregion Exported Functions
