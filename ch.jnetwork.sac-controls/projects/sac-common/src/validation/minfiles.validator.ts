import { IUploadControl } from '../interfaces/iuploadcontrol';
import { CreateValidationError } from './validationerrorcreator';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// #region Exported Functions

/**
 * Returns a validator that checks if the number of uploaded files is >= minFiles.
 *
 * @param minFiles Minimum number of files required.
 * @param validationMessage Message shown when too few files are uploaded.
 * @param validationMessageSummary Summary message shown when too few files are uploaded.
 * @returns Validator function for minimum files validation.
 */
export function minFilesValidator(
    minFiles: number,
    validationMessage: string,
    validationMessageSummary: string
): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const ctl = control as unknown as IUploadControl;

        // Cancel check if minimum files requirement is disabled
        if (!minFiles || minFiles === 0) {
            return null;
        }

        if (ctl.uploadedfilecount !== null && minFiles > ctl.uploadedfilecount) {
            const parameters: Map<string, any> = new Map<string, any>();
            parameters.set('MINFILES', minFiles);

            return CreateValidationError('minfiles', validationMessage, validationMessageSummary, parameters);
        } else {
            return null;
        }
    };
}

// #endregion Exported Functions
