import {
    AbstractControl,
    ValidationErrors,
    ValidatorFn,
    Validators,
} from '@angular/forms';
import { CreateValidationError } from './validationerrorcreator';

export function patternValidator(
  pattern: string,
  validationMessage: string,
  validationMessageSummary: string
): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const validator: ValidatorFn = Validators.pattern(pattern);

    if (validator(control) !== null) {
      const parameters: Map<string, any> = new Map<string, any>();
      parameters.set('PATTERN', pattern);

      return CreateValidationError(
        'pattern',
        validationMessage,
        validationMessageSummary,
        parameters
      );
    } else {
      return null;
    }
  };
}
