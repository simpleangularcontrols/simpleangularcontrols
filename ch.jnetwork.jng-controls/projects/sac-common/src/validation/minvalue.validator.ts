import {
    AbstractControl,
    ValidationErrors,
    ValidatorFn,
    Validators,
} from '@angular/forms';
import { CreateValidationError } from './validationerrorcreator';

export function minValueValidator(
  minvalue: number,
  validationMessage: string,
  validationMessageSummary: string
): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const validator: ValidatorFn = Validators.min(minvalue);

    if (validator(control) !== null) {
      const parameters: Map<string, any> = new Map<string, any>();
      parameters.set('MINVALUE', minvalue);

      return CreateValidationError(
        'minvalue',
        validationMessage,
        validationMessageSummary,
        parameters
      );
    } else {
      return null;
    }
  };
}
