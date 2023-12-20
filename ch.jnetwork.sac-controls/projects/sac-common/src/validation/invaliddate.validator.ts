import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { CreateValidationError } from './validationerrorcreator';
import { isDateValid } from './isDateValid';
import { IDateTimeControl } from '../interfaces/idatetimecontrol';

export function isValidDateValidator(
  validationMessage: string,
  validationMessageSummary: string
): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const ctl = control as unknown as IDateTimeControl;

    if (!isDateValid(control.value, ctl.datetimeformatstring)) {
      return CreateValidationError(
        'dateformat',
        validationMessage,
        validationMessageSummary
      );
    } else {
      return null;
    }
  };
}
