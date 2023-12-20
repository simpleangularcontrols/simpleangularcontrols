import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { LanguageModel } from '../models/languagemodel';
import { CreateValidationError } from './validationerrorcreator';

export function multilanguageRequiredValidator(
  languages: LanguageModel[],
  validationMessage: string,
  validationMessageSummary: string
): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let missing = false;

    languages.forEach((item: LanguageModel) => {
      if (control.value) {
        if (
          control.value[item.IsoCode] === undefined ||
          control.value[item.IsoCode] === null ||
          control.value[item.IsoCode] === ''
        ) {
          missing = true;
        }
      }
    });

    if (missing) {
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
