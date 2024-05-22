import { Directive, Input } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { SacInputBase } from '../../common/baseinputcontrol';
import { Validation } from '../../validation';

/**
 * Basis Komponente für SacInput
 */
@Directive()
export class SacInputCommon extends SacInputBase<string> {
  // #region Properties

  /**
   * Fix breite für das Control definieren.
   */
  @Input() public controlwidth: string = null;
  /**
   * Max länge an Zeichen für Eingabefeld
   */
  @Input() public maxlength: number = null;
  /**
   * Resource Key für Validation Message Pattern bei Control
   */
  @Input() public validationmessagepattern: string =
    this.validationKeyService.ValidationErrorPattern;
  /**
   * Resource Key für Validation Message Required bei Control
   */
  @Input() public validationmessagerequired: string =
    this.validationKeyService.ValidationErrorRequired;
  /**
   * Resource Key für Validation Message Pattern in Validation Summary
   */
  @Input() public validationmessagesummarypattern: string =
    this.validationKeyService.ValidationErrorSummaryPattern;
  /**
   * Resource Key für Validation Message Required in Validation Summary
   */
  @Input() public validationmessagesummaryrequired: string =
    this.validationKeyService.ValidationErrorSummaryRequired;

  // #endregion Properties

  // #region Public Methods

  /**
   * Methode validiert, ob der Wert den gegebenen Kriterien entspricht
   */
  public validateData(c: AbstractControl): ValidationErrors | null {
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

  // #endregion Public Methods
}
