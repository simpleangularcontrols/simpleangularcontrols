import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import moment from 'moment';
import { IDateTimeControl } from '../interfaces/idatetimecontrol';
import { CreateValidationError } from './validationerrorcreator';
import { isDateValid } from './isDateValid';

export function minTimeValidator(
  minTime: Date,
  validationMessage: string,
  validationMessageSummary: string
): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const ctl = control as unknown as IDateTimeControl;

    // Check abbrechen, wenn kein gültiges Datum
    if (!isDateValid(ctl.value, ctl.datetimeformatstring) || minTime === null) {
      return null;
    }

    if (ctl.value !== null && minTime > ctl.value) {
      const parameters: Map<string, any> = new Map<string, any>();
      parameters.set(
        'MINTIME',
        moment(minTime).format(ctl.datetimeformatstring)
      );

      return CreateValidationError(
        'timemin',
        validationMessage,
        validationMessageSummary,
        parameters
      );
    } else {
      return null;
    }
  };
}
