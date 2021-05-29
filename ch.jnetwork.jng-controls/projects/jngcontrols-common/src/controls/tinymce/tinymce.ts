import { Input, Directive } from "@angular/core";
import { AbstractControl, ValidationErrors } from "@angular/forms";
import { NgInputBase } from "../../common/baseinputcontrol";
import { Validation } from "../../validation";

/**
 * Komponente für NgTinyMceCommon. Extends NgInputBase
 */
@Directive()
export class NgTinyMceCommon extends NgInputBase<string> {
  /**
   * TextBox Placeholder
   */
  @Input("maxlength") _maxlength: number = null;


  /**
   * Resource Key für Validation Message Required bei Control
   */
  @Input("validationmessagerequired") _validationMessageRequired: string = 'VALIDATION_ERROR_REQUIRED';
  /**
   * Resource Key für Validation Message Required in Validation Summary
   */
  @Input("validationmessagesummaryrequired") _validationMessageRequiredSummary: string = 'VALIDATION_ERROR_SUMMARY_REQUIRED';


  /**
   * Validator 
   */
  validateData(c: AbstractControl): ValidationErrors | null {
    let error: ValidationErrors | null = null;

    if (this._isrequired) {
      error = Validation.required(c, this._label, this._validationMessageRequired, this._validationMessageRequiredSummary);
    }

    return error;
  }
}
