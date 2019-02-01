import { NG_VALUE_ACCESSOR, ControlContainer, ValidationErrors, AbstractControl, NG_VALIDATORS } from "@angular/forms";
import { Component, forwardRef } from "@angular/core";
import { NgFormular } from "../form/form";
import { NgInput } from "./input";
import { Validation } from "../../validation";


@Component({
  selector: 'ngInputPassword',
  templateUrl: './inputpassword.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: NgInputPassword },
    { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => NgInputPassword) }
  ],
  // View Provider, damit das Formular an das Control gebunden werden kann
  viewProviders: [{ provide: ControlContainer, useExisting: NgFormular }]
})
export class NgInputPassword extends NgInput {
  validateData(c: AbstractControl): ValidationErrors | null {
    let error: ValidationErrors | null = super.validateData(c);

    if (error === null) {
      error = Validation.minLength(c, 5, this._label);
    }

    return error;
  }
}
