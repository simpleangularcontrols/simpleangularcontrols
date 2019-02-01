import {  ValidationErrors, AbstractControl,  } from "@angular/forms";
import { NgInputCommon } from "./input";
import { Validation } from "../../validation";


export class NgInputPasswordCommon extends NgInputCommon {
  validateData(c: AbstractControl): ValidationErrors | null {
    let error: ValidationErrors | null = super.validateData(c);

    if (error === null) {
      error = Validation.minLength(c, 5, this._label);
    }

    return error;
  }
}
