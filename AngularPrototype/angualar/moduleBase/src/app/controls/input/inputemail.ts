import { NG_VALUE_ACCESSOR, ControlContainer, AbstractControl, ValidationErrors, NG_VALIDATORS } from "@angular/forms";
import { Component, forwardRef } from "@angular/core";
import { NgFormular } from "../form/form";
import { NgInput } from "./input";
import { Validation } from "../../validation";


@Component({
  selector: 'ngInputEmail',
  templateUrl: './inputemail.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: NgInputEmail },
    { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => NgInputEmail) }
  ],
  // View Provider, damit das Formular an das Control gebunden werden kann
  viewProviders: [{ provide: ControlContainer, useExisting: NgFormular }]
})
export class NgInputEmail extends NgInput {


  validateData(c: AbstractControl): ValidationErrors | null {
    let error: ValidationErrors | null = super.validateData(c);

    if (error === null) {
      error = Validation.email(c, this._label);
    }

    return error;
  }
}
