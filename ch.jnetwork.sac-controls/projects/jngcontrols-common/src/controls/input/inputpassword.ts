import { Directive, Input } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Validation } from '../../validation';
import { SacInputCommon } from './input';

/**
 * Basis Komponente für SacInputPassword
 */
@Directive()
export class SacInputPasswordCommon extends SacInputCommon {
  // #region Properties

  /**
   * Min. Textlänge
   */
  @Input() public minlength: number = 5;
  /**
   * Resource Key für Validation Message MinLength bei Control
   */
  @Input() public validationmessageminlength: string =
    this.validationKeyService.ValidationErrorMinLength;
  /**
   * Resource Key für Validation Message MinLength in Validation Summary
   */
  @Input() public validationmessagesummaryminlength: string =
    this.validationKeyService.ValidationErrorSummaryMinLength;

  // #endregion Properties

  // #region Public Methods

  /**
   * Methode validiert, ob der Wert den gegebenen Kriteriten entspricht
   */
  public validateData(c: AbstractControl): ValidationErrors | null {
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

  // #endregion Public Methods
}
