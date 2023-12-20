import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import moment from 'moment';
import { IDateTimeControl } from '../interfaces/idatetimecontrol';
import { CreateValidationError } from './validationerrorcreator';
import { isDateValid } from './isDateValid';

export function minDateValidator(
  minDate: Date,
  validationMessage: string,
  validationMessageSummary: string
): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const ctl = control as unknown as IDateTimeControl;

    // Check abbrechen, wenn kein gültiges Datum
    if (!isDateValid(ctl.value, ctl.datetimeformatstring) || minDate === null) {
      return null;
    }

    if (ctl.value !== null && minDate > ctl.value) {
      const parameters: Map<string, any> = new Map<string, any>();
      parameters.set(
        'MINDATE',
        moment(minDate).format(ctl.datetimeformatstring)
      );

      return CreateValidationError(
        'datemin',
        validationMessage,
        validationMessageSummary,
        parameters
      );
    } else {
      return null;
    }
  };
}
