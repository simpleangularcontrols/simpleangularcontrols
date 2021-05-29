import { Directive, Input } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { NgInputBase } from '../../common/baseinputcontrol';
import { Validation } from '../../validation';

/**
 * Basis Komponente für NgInput
 */
@Directive()
export class NgInputCommon extends NgInputBase<string> {
  /**
   * Max länge an Zeichen für Eingabefeld
   */
  @Input('maxlength') _maxlength: number = null;

  /**
   * Fix breite für das Control definieren.
   */
  @Input('controlwidth') _controlwidth: string = null;


  /**
   * Resource Key für Validation Message Required bei Control
   */
  @Input('validationmessagerequired') _validationMessageRequired: string = 'VALIDATION_ERROR_REQUIRED';
  /**
   * Resource Key für Validation Message Required in Validation Summary
   */
  @Input('validationmessagesummaryrequired') _validationMessageRequiredSummary: string = 'VALIDATION_ERROR_SUMMARY_REQUIRED';

  /**
   * Resource Key für Validation Message Pattern bei Control
   */
  @Input('validationmessagepattern') _validationMessagePattern: string = 'VALIDATION_ERROR_PATTERN';
  /**
   * Resource Key für Validation Message Pattern in Validation Summary
   */
  @Input('validationmessagesummarypattern') _validationMessagePatternSummary: string = 'VALIDATION_ERROR_SUMMARY_PATTERN';


  /**
   * Methode validiert, ob der Wert den gegebenen Kriterien entspricht
   */
  validateData(c: AbstractControl): ValidationErrors | null {
    let error: ValidationErrors | null = null;

    if (this._isrequired) {
      error = Validation.required(c, this._label, this._validationMessageRequired, this._validationMessageRequiredSummary);
    }

    if (error === null && this._pattern !== undefined && this._pattern !== null) {
      error = Validation.patternValidator(c, this._pattern, this._label, this._validationMessagePattern, this._validationMessagePatternSummary);
    }
    return error;
  }
}
