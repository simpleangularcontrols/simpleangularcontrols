import { Directive, Input } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Validation } from '../../validation';
import { SacInputCommon } from './input';

/**
 * Basis Komponente für SacInputEmail
 */
@Directive()
export class SacInputEmailCommon extends SacInputCommon {
  /**
   * Resource Key für Validation Message Email bei Control
   */
  @Input() validationmessageemail: string = 'VALIDATION_ERROR_EMAIL';
  /**
   * Resource Key für Validation Message Email in Validation Summary
   */
  @Input() validationmessagesummaryemail: string =
    'VALIDATION_ERROR_SUMMARY_EMAIL';

  /**
   * Methode validiert, ob der Wert den gegebenen Kriteriten entspricht
   */
  validateData(c: AbstractControl): ValidationErrors | null {
    let error: ValidationErrors | null = super.validateData(c);

    if (error === null) {
      error = Validation.email(
        this.validationmessageemail,
        this.validationmessagesummaryemail
      )(c);
    }

    return error;
  }
}
