import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { CreateValidationError } from './validationerrorcreator';

export function equalsValueValidator(
  requiredvalue: any,
  validationMessage: string,
  validationMessageSummary: string
): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value !== requiredvalue) {
      const parameters: Map<string, any> = new Map<string, any>();
      parameters.set('EQUALSVALUE', requiredvalue);

      return CreateValidationError(
        'equals',
        validationMessage,
        validationMessageSummary,
        parameters
      );
    } else {
      return null;
    }
  };
}
