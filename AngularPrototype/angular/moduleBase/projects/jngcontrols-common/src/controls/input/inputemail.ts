import { AbstractControl, ValidationErrors, } from "@angular/forms";
import { NgInputCommon } from "./input";
import { Validation } from "../../validation";

export class NgInputEmailCommon extends NgInputCommon {

  /**
   * Methode validiert, ob der Wert den gegebenen Kriteriten entspricht
   */
  validateData(c: AbstractControl): ValidationErrors | null {
    let error: ValidationErrors | null = super.validateData(c);

    if (error === null) {
      error = Validation.email(c, this._label);
    }

    return error;
  }
}
