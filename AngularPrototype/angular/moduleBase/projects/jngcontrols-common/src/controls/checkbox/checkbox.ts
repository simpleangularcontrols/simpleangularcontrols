import { ValidationErrors, AbstractControl } from '@angular/forms';
import { NgBaseModelControl } from '../../common/basemodelcontrol';


export class NgCheckboxCommon extends NgBaseModelControl<boolean> {

  // Control hat keinen Validator
  validateData(c: AbstractControl): ValidationErrors | null {
    return null
  }

}

