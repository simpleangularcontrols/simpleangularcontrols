import { ValidationErrors, AbstractControl } from '@angular/forms';
import { NgBaseModelControl } from '../../common/basemodelcontrol';

export class NgUploadCommon extends NgBaseModelControl<string> {

  // Control hat keinen Validator
  validateData(c: AbstractControl): ValidationErrors | null {
    return null
  }

}
