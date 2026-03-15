import { IUploadControl } from '../interfaces/iuploadcontrol';
import { CreateValidationError } from './validationerrorcreator';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// #region Exported Functions

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
