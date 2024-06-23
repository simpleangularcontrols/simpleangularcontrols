import {
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { CreateValidationError } from './validationerrorcreator';

export function requiredValidator(
  validationMessage: string,
  validationMessageSummary: string
): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (Validators.required(control) !== null) {
      return CreateValidationError(
        'required',
        validationMessage,
        validationMessageSummary
      );
    } else {
      return null;
    }
  };
}
