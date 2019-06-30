import { ValidationErrors, AbstractControl } from '@angular/forms';
import { NgBaseModelControl } from '../../common/basemodelcontrol';
import { Input } from '@angular/core';


export class NgCheckboxCommon extends NgBaseModelControl<boolean> {

  /**
   * Control hat keinen Validator
   */
  validateData(c: AbstractControl): ValidationErrors | null {
    return null
  }

  /**
   * Text vom Checkbox-Control
   */
  @Input("checkboxtext") _checkboxtext

}

