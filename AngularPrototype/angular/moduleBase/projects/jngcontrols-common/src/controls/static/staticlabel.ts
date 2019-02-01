import { AbstractControl, ValidationErrors } from '@angular/forms';
import { NgInputBase } from '../../common/baseinputcontrol';
import { Input } from '@angular/core';

export class NgStaticLabelCommon extends NgInputBase<string> {

  validateData(c: AbstractControl): ValidationErrors | null {
    let error: ValidationErrors|null = null;
    return error;
  }

  @Input("allowhtml")
  _allowhtml: boolean = false;
}
