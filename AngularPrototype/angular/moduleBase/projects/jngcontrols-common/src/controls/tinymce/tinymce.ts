import { NgInputBase } from "../../common/baseinputcontrol";
import { AbstractControl, ValidationErrors } from "@angular/forms";
import { Input } from "@angular/core";
import { Validation } from "../../validation";

export class NgTinyMceCommon extends NgInputBase<string> {
  // TextBox Placeholder
  @Input("maxlength") _maxlength: number = null;

  validateData(c: AbstractControl): ValidationErrors | null {
    let error: ValidationErrors | null = null;

    if (this._isrequired) {
      error = Validation.required(c, this._label);
    }

    return error;
  }
}
