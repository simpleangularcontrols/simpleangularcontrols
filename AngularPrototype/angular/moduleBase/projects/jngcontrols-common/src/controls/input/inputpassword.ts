import { ValidationErrors, AbstractControl, } from "@angular/forms";
import { NgInputCommon } from "./input";
import { Validation } from "../../validation";
import { Input } from "@angular/core";

/**
 * Basis Komponente für NgInputPassword
 */
export class NgInputPasswordCommon extends NgInputCommon {

  /**
   * Resource Key für Validation Message MinLength bei Control
   */
  @Input("validationmessageminlength") _validationMessageMinLength: string = 'VALIDATION_ERROR_MINLENGTH';
  /**
   * Resource Key für Validation Message MinLength in Validation Summary
   */
  @Input("validationmessagesummaryminlength") _validationMessageMinLengthSummary: string = 'VALIDATION_ERROR_SUMMARY_MINLENGTH';

  /**
   * Min. Textlänge
   */
  @Input("minlength") _minlength: number = 5;

  /**
   * Methode validiert, ob der Wert den gegebenen Kriteriten entspricht
   */
  validateData(c: AbstractControl): ValidationErrors | null {
    let error: ValidationErrors | null = super.validateData(c);

    if (error === null) {
      error = Validation.minLength(c, this._minlength, this._label, this._validationMessageMinLength, this._validationMessageMinLengthSummary);
    }

    return error;
  }
}
