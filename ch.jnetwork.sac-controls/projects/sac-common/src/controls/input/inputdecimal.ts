import { Directive, Input } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { SacInputBase } from '../../common/baseinputcontrol';
import { Validation } from '../../validation';

/**
 * Basis Komponente für SacInputDecimal
 */
@Directive()
export class SacInputDecimalCommon extends SacInputBase<number> {
  // #region Properties

  /**
   * Definiert das Negative Werte erlaubt sind
   */
  @Input() public allownegativ: boolean = false;
  /**
   * Definiert den maximalen Wert
   */
  @Input() public maxvalue: number = undefined;
  /**
   * Definiert den minimalen Wert
   */
  @Input() public minvalue: number = undefined;
  /**
   * Resource Key für Validation Message MaxValue bei Control
   */
  @Input() public validationmessagemaxvalue: string =
    'VALIDATION_ERROR_MAXVALUE';
  /**
   * Resource Key für Validation Message MinValue bei Control
   */
  @Input() public validationmessageminvalue: string =
    'VALIDATION_ERROR_MINVALUE';
  /**
   * Resource Key für Validation Message Required bei Control
   */
  @Input() public validationmessagerequired: string =
    'VALIDATION_ERROR_REQUIRED';
  /**
   * Resource Key für Validation Message MaxValue in Validation Summary
   */
  @Input() public validationmessagesummarymaxvalue: string =
    'VALIDATION_ERROR_SUMMARY_MAXVALUE';
  /**
   * Resource Key für Validation Message MinValue in Validation Summary
   */
  @Input() public validationmessagesummaryminvalue: string =
    'VALIDATION_ERROR_SUMMARY_MINVALUE';
  /**
   * Resource Key für Validation Message Required in Validation Summary
   */
  @Input() public validationmessagesummaryrequired: string =
    'VALIDATION_ERROR_SUMMARY_REQUIRED';

  // #endregion Properties

  // #region Public Methods

  /**
   * Methode validiert ob der Wert entspricht den gegebenen Kriterien
   */
  public validateData(c: AbstractControl): ValidationErrors | null {
    /**
     * Error Meldung, die angezeigt wird, wenn die Kriterien nicht erfüllt sind
     */
    let error: ValidationErrors | null = null;

    if (this.isrequired) {
      error = Validation.required(
        this.validationmessagerequired,
        this.validationmessagesummaryrequired
      )(c);
    }

    if (
      error === null &&
      this.minvalue !== undefined &&
      this.minvalue !== null
    ) {
      error = Validation.minValue(
        this.minvalue,
        this.validationmessageminvalue,
        this.validationmessagesummaryminvalue
      )(c);
    }

    if (
      error === null &&
      this.maxvalue !== undefined &&
      this.maxvalue !== null
    ) {
      error = Validation.maxValue(
        this.maxvalue,
        this.validationmessagemaxvalue,
        this.validationmessagesummarymaxvalue
      )(c);
    }

    return error;
  }

  // #endregion Public Methods

  // #region Protected Methods

  /**
   * Konvertiert den Wert des Inputs
   */
  protected ConvertInputValue(value: any): any {
    if (value === '' || value === null) {
      return null;
    } else {
      if (this.allownegativ === true && value === '-') {
        return '-';
      } else if (value === '.') {
        return '0.';
      } else {
        return parseFloat(value);
      }
    }
  }

  /**
   * Methode die erzeugt den Control in Abhängigkeit davon, ob negative Were erlaubt sing oder nicht
   */
  protected OnClassInit(): void {
    super.OnClassInit();

    /**
     * Definiert die Werte die erlaubt sind
     */
    this.allowedchars = '0123456789' + this.GetDecimalSymbol();

    if (this.allownegativ) {
      this.allowedchars = this.allowedchars + '-';
    }
  }

  /**
   * Methode validiert ob der Wert entspricht den gegebenen Kriterien wenn ein Key gedrückt wird
   */
  protected OnKeyPressValidation(position: number, character: string): boolean {
    if (
      (this.allownegativ === false && character === '-') ||
      (this.allownegativ === true && position > 0 && character === '-')
    ) {
      return false;
    }

    // Verhindern von Doppelpunkt Eingabe (45..545)
    if (
      this._value !== null &&
      this._value.toString().length < position &&
      character === '.'
    ) {
      return false;
    }

    if (
      character === this.GetDecimalSymbol() &&
      this._value !== null &&
      this._value.toString().indexOf(this.GetDecimalSymbol()) >= 0
    ) {
      return false;
    } else {
      return true;
    }
  }

  // #endregion Protected Methods
}
