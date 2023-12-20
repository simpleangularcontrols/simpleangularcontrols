import {
    AbstractControl,
    ValidationErrors,
    ValidatorFn,
    Validators,
} from '@angular/forms';
import { CreateValidationError } from './validationerrorcreator';

export function minLengthValidator(
  minlength: number,
  validationMessage: string,
  validationMessageSummary: string
): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const validator: ValidatorFn = Validators.minLength(minlength);

    if (
      minlength !== null &&
      minlength !== undefined &&
      control.value !== '' &&
      control.value !== undefined &&
      control.value != null &&
      validator(control) != null
    ) {
      const parameters: Map<string, any> = new Map<string, any>();
      parameters.set('MINLENGTH', minlength);

      return CreateValidationError(
        'minlength',
        validationMessage,
        validationMessageSummary,
        parameters
      );
    } else {
      return null;
    }
  };
}
