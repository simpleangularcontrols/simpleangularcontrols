import { Input, Directive } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Validation } from '../../validation';
import { NgInputBase } from '../../common/baseinputcontrol';

/**
 * Basis Komponente für NgInputDecimal
 */
export class NgInputDecimalCommon extends NgInputBase<number> {

  /**
   * Definiert das Negative Werte erlaubt sind
   */
  @Input('allownegativ') _allownegativ: boolean = false;
  /**
   * Definiert den minimalen Wert
   */
  @Input('minvalue') _minvalue: number = undefined;
  /**
   * Definiert den maximalen Wert
   */
  @Input('maxvalue') _maxvalue: number = undefined;


  /**
   * Resource Key für Validation Message Required bei Control
   */
  @Input('validationmessagerequired') _validationMessageRequired: string = 'VALIDATION_ERROR_REQUIRED';
  /**
   * Resource Key für Validation Message Required in Validation Summary
   */
  @Input('validationmessagesummaryrequired') _validationMessageRequiredSummary: string = 'VALIDATION_ERROR_SUMMARY_REQUIRED';


  /**
   * Resource Key für Validation Message MinValue bei Control
   */
  @Input('validationmessageminvalue') _validationMessageMinValue: string = 'VALIDATION_ERROR_MINVALUE';
  /**
   * Resource Key für Validation Message MinValue in Validation Summary
   */
  @Input('validationmessagesummaryminvalue') _validationMessageMinValueSummary: string = 'VALIDATION_ERROR_SUMMARY_MINVALUE';

  /**
   * Resource Key für Validation Message MaxValue bei Control
   */
  @Input('validationmessagemaxvalue') _validationMessageMaxValue: string = 'VALIDATION_ERROR_MAXVALUE';
  /**
   * Resource Key für Validation Message MaxValue in Validation Summary
   */
  @Input('validationmessagesummarymaxvalue') _validationMessageMaxValueSummary: string = 'VALIDATION_ERROR_SUMMARY_MAXVALUE';

  /**
   * Methode die erzeugt den Control in Abhängigkeit davon, ob negative Were erlaubt sing oder nicht
   */
  protected OnClassInit(): void {
    super.OnClassInit();

    /**
     * Definiert die Werte die erlaubt sind
     */
    this._allowedchars = '0123456789' + this.GetDecimalSymbol();

    if (this._allownegativ) {
      this._allowedchars = this._allowedchars + '-';
    }
  }

  /**
   * Konvertiert den Wert des Inputs
   */
  protected ConvertInputValue(value: any): any {
    if (value === '' || value === null) {
      return null;
    } else {
      if (this._allownegativ === true && value === '-') {
        return '-';
      } else if (value === '.') {
        return '0.';
      } else {
        return parseFloat(value);
      }
    }
  }

  /**
   * Methode validiert ob der Wert entspricht den gegebenen Kriterien wenn ein Key gedrückt wird
   */
  protected OnKeyPressValidation(position: number, character: string): boolean {
    if (this._allownegativ === false && character === '-' || this._allownegativ === true && position > 0 && character === '-') {
      return false;
    }

    // Verhindern von Doppelpunkt Eingabe (45..545)
    if (this._value !== null && this._value.toString().length < position && character === '.') {
      return false;
    }

    if (character === this.GetDecimalSymbol() && this._value !== null && this._value.toString().indexOf(this.GetDecimalSymbol()) >= 0) {
      return false;
    } else {
      return true;
    }
  }

  /**
   * Methode validiert ob der Wert entspricht den gegebenen Kriterien
   */
  validateData(c: AbstractControl): ValidationErrors | null {
    /**
     * Error Meldung, die angezeigt wird, wenn die Kriterien nicht erfüllt sind
     */
    let error: ValidationErrors | null = null;

    if (this._isrequired) {
      error = Validation.required(c, this._label, this._validationMessageRequired, this._validationMessageRequiredSummary);
    }

    if (error === null && this._minvalue !== undefined && this._minvalue !== null) {
      error = Validation.minValue(c, this._minvalue, this._label, this._validationMessageMinValue, this._validationMessageMinValueSummary);
    }

    if (error === null && this._maxvalue !== undefined && this._maxvalue !== null) {
      error = Validation.maxValue(c, this._maxvalue, this._label, this._validationMessageMaxValue, this._validationMessageMaxValueSummary);
    }

    return error;
  }
}
