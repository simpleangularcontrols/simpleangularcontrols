import {
    AbstractControl,
    ValidationErrors,
    ValidatorFn,
    Validators,
} from '@angular/forms';
import { CreateValidationError } from './validationerrorcreator';

export function maxValueValidator(
  maxvalue: number,
  validationMessage: string,
  validationMessageSummary: string
): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const validator: ValidatorFn = Validators.max(maxvalue);

    if (validator(control) !== null) {
      const parameters: Map<string, any> = new Map<string, any>();
      parameters.set('MAXVALUE', maxvalue);

      return CreateValidationError(
        'maxvalue',
        validationMessage,
        validationMessageSummary,
        parameters
      );
    } else {
      return null;
    }
  };
}
