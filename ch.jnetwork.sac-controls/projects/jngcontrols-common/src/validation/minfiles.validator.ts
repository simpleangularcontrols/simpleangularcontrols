import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { IUploadControl } from '../interfaces/iuploadcontrol';
import { CreateValidationError } from './validationerrorcreator';

export function minFilesValidator(
  minFiles: number,
  validationMessage: string,
  validationMessageSummary: string
): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const ctl = control as unknown as IUploadControl;

    // Check abbrechen, wenn kein gültiges Datum
    if (!minFiles || minFiles === 0) {
      return null;
    }

    if (ctl.uploadedfilecount !== null && minFiles > ctl.uploadedfilecount) {
      const parameters: Map<string, any> = new Map<string, any>();
      parameters.set('MINFILES', minFiles);

      return CreateValidationError(
        'minfiles',
        validationMessage,
        validationMessageSummary,
        parameters
      );
    } else {
      return null;
    }
  };
}
