import { Directive, Input } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Validation } from '../../validation';
import { SacInputCommon } from './input';

/**
 * Basis Komponente für SacInputEmail
 */
@Directive()
export class SacInputEmailCommon extends SacInputCommon {
  // #region Properties

  /**
   * Resource Key für Validation Message Email bei Control
   */
  @Input() public validationmessageemail: string =
    this.validationKeyService.ValidationErrorEmail;
  /**
   * Resource Key für Validation Message Email in Validation Summary
   */
  @Input() public validationmessagesummaryemail: string =
    this.validationKeyService.ValidationErrorSummaryEmail;

  // #endregion Properties

  // #region Public Methods

  /**
   * Methode validiert, ob der Wert den gegebenen Kriteriten entspricht
   */
  public validateData(c: AbstractControl): ValidationErrors | null {
    let error: ValidationErrors | null = super.validateData(c);

    if (error === null) {
      error = Validation.email(
        this.validationmessageemail,
        this.validationmessagesummaryemail
      )(c);
    }

    return error;
  }

  // #endregion Public Methods
}
