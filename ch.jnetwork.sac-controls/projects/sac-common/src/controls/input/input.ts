import { Directive, Input } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { SacInputBase } from '../../common/baseinputcontrol';
import { Validation } from '../../validation';

/**
 * Basis Komponente für SacInput
 */
@Directive()
export class SacInputCommon extends SacInputBase<string> {
  /**
   * Max länge an Zeichen für Eingabefeld
   */
  @Input() maxlength: number = null;

  /**
   * Fix breite für das Control definieren.
   */
  @Input() controlwidth: string = null;

  /**
   * Resource Key für Validation Message Required bei Control
   */
  @Input() validationmessagerequired: string = 'VALIDATION_ERROR_REQUIRED';
  /**
   * Resource Key für Validation Message Required in Validation Summary
   */
  @Input() validationmessagesummaryrequired: string =
    'VALIDATION_ERROR_SUMMARY_REQUIRED';

  /**
   * Resource Key für Validation Message Pattern bei Control
   */
  @Input() validationmessagepattern: string = 'VALIDATION_ERROR_PATTERN';
  /**
   * Resource Key für Validation Message Pattern in Validation Summary
   */
  @Input() validationmessagesummarypattern: string =
    'VALIDATION_ERROR_SUMMARY_PATTERN';

  /**
   * Methode validiert, ob der Wert den gegebenen Kriterien entspricht
   */
  validateData(c: AbstractControl): ValidationErrors | null {
    let error: ValidationErrors | null = null;

    if (this.isrequired) {
      error = Validation.required(
        this.validationmessagerequired,
        this.validationmessagesummaryrequired
      )(c);
    }

    if (
      error === null &&
      this.regexvalidation !== undefined &&
      this.regexvalidation !== null
    ) {
      error = Validation.pattern(
        this.regexvalidation,
        this.validationmessagepattern,
        this.validationmessagesummarypattern
      )(c);
    }
    return error;
  }
}
