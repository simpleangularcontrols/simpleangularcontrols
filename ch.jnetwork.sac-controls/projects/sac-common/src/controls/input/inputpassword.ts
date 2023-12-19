import { Directive, Input } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Validation } from '../../validation';
import { SacInputCommon } from './input';

/**
 * Basis Komponente für SacInputPassword
 */
@Directive()
export class SacInputPasswordCommon extends SacInputCommon {
  /**
   * Resource Key für Validation Message MinLength bei Control
   */
  @Input() validationmessageminlength: string = 'VALIDATION_ERROR_MINLENGTH';
  /**
   * Resource Key für Validation Message MinLength in Validation Summary
   */
  @Input() validationmessagesummaryminlength: string =
    'VALIDATION_ERROR_SUMMARY_MINLENGTH';

  /**
   * Min. Textlänge
   */
  @Input() minlength: number = 5;

  /**
   * Methode validiert, ob der Wert den gegebenen Kriteriten entspricht
   */
  validateData(c: AbstractControl): ValidationErrors | null {
    let error: ValidationErrors | null = super.validateData(c);

    if (error === null) {
      error = Validation.minLength(
        this.minlength,
        this.validationmessageminlength,
        this.validationmessagesummaryminlength
      )(c);
    }

    return error;
  }
}
