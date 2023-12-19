import {
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { CreateValidationError } from './validationerrorcreator';

export function emailValidator(
  validationMessage: string,
  validationMessageSummary: string
): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (Validators.email(control) !== null) {
      return CreateValidationError(
        'email',
        validationMessage,
        validationMessageSummary
      );
    } else {
      return null;
    }
  };
}
