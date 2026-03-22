import { LanguageModel } from '../models/languagemodel';
import { CreateValidationError } from './validationerrorcreator';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// #region Exported Functions

/**
 * Returns a validator that checks at least one language value is provided.
 *
 * @param languages Languages to validate in the form value object.
 * @param validationMessage Message shown when no language value is provided.
 * @param validationMessageSummary Summary message shown when no language value is provided.
 * @returns Validator function for multilanguage-any required validation.
 */
export function multilanguageRequiredAnyValidator(
    languages: LanguageModel[],
    validationMessage: string,
    validationMessageSummary: string
): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        let missing = false;

        languages.forEach((item: LanguageModel) => {
            if (control.value) {
                if (
                    control.value[item.IsoCode] !== undefined &&
                    control.value[item.IsoCode] !== null &&
                    control.value[item.IsoCode] !== ''
                ) {
                    missing = true;
                }
            }
        });

        if (!missing) {
            return CreateValidationError('requiredany', validationMessage, validationMessageSummary);
        } else {
            return null;
        }
    };
}

// #endregion Exported Functions
