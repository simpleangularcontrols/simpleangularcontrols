import { Directive, Input } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Validation } from '../../validation';
import { NgInputCommon } from './input';

/**
 * Basis Komponente für NgInputEmail
 */
@Directive()
export class NgInputEmailCommon extends NgInputCommon {

  /**
   * Resource Key für Validation Message Email bei Control
   */
  @Input('validationmessageemail') _validationMessageEmail: string = 'VALIDATION_ERROR_EMAIL';
  /**
   * Resource Key für Validation Message Email in Validation Summary
   */
  @Input('validationmessagesummaryemail') _validationMessageEmailSummary: string = 'VALIDATION_ERROR_SUMMARY_EMAIL';


  /**
   * Methode validiert, ob der Wert den gegebenen Kriteriten entspricht
   */
  validateData(c: AbstractControl): ValidationErrors | null {
    let error: ValidationErrors | null = super.validateData(c);

    if (error === null) {
      error = Validation.email(c, this._label, this._validationMessageEmail, this._validationMessageEmailSummary);
    }

    return error;
  }
}
