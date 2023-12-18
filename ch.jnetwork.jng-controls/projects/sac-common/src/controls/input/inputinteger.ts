import { Directive, Input } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { SacInputBase } from '../../common/baseinputcontrol';
import { Validation } from '../../validation';

/**
 * Basis Komponente für SacInputInteger
 */
@Directive()
export class SacInputIntegerCommon extends SacInputBase<number> {

  /**
   * Definiert das Negative Werte erlaubt sind
   */
  @Input() allownegativ: boolean = false;
  /**
   * Definiert den minimalen Wert
   */
  @Input() minvalue: number = undefined;
  /**
   * Definiert den maximalen Wert
   */
  @Input() maxvalue: number = undefined;

  /**
   * Resource Key für Validation Message Required bei Control
   */
  @Input() validationmessagerequired: string = 'VALIDATION_ERROR_REQUIRED';
  /**
   * Resource Key für Validation Message Required in Validation Summary
   */
  @Input() validationmessagesummaryrequired: string = 'VALIDATION_ERROR_SUMMARY_REQUIRED';

  /**
   * Resource Key für Validation Message MinValue bei Control
   */
  @Input() validationmessageminvalue: string = 'VALIDATION_ERROR_MINVALUE';
  /**
   * Resource Key für Validation Message MinValue in Validation Summary
   */
  @Input() validationmessagesummaryminvalue: string = 'VALIDATION_ERROR_SUMMARY_MINVALUE';

  /**
   * Resource Key für Validation Message MaxValue bei Control
   */
  @Input() validationmessagemaxvalue: string = 'VALIDATION_ERROR_MAXVALUE';
  /**
   * Resource Key für Validation Message MaxValue in Validation Summary
   */
  @Input() validationmessagesummarymaxvalue: string = 'VALIDATION_ERROR_SUMMARY_MAXVALUE';


  /**
   * Methode die erzeugt den Control in Abhängigkeit davon, ob negative Were erlaubt sing oder nicht
   */
  protected OnClassInit(): void {
    super.OnClassInit();

    /**
     * Definiert die Wete die erlaubt sind
     */
    this.allowedchars = '0123456789';

    if (this.allownegativ) {
      this.allowedchars = this.allowedchars + '-';
    }
  }

  /**
   * Konvertiert den Wert des Inputs
   */
  protected ConvertInputValue(value: any): any {
    if (value === '' || value === null) {
      return null;
    } else {
      if (this.allownegativ === true && value === '-') {
        return '-';
      } else {
        return parseInt(value, 10);
      }
    }
  }

  /**
   * Methode validiert ob der Wert entspricht den gegebenen Kriterien wenn ein Key gedrückt wird
   */
  protected OnKeyPressValidation(position: number, character: string): boolean {
    if (this.allownegativ === false && character === '-' || this.allownegativ === true && position > 0 && character === '-') {
      return false;
    }

    return true;
  }

  /**
   * Methode validiert ob der Wert entspricht den gegebenen Kriterien
   */
  validateData(c: AbstractControl): ValidationErrors | null {
    /**
     * Error Meldung, die angezeigt wird, wenn die Kriterien nicht erfüllt sind
     */
    let error: ValidationErrors | null = null;

    if (this.isrequired) {
      error = Validation.required(c, this.label, this.validationmessagerequired, this.validationmessagesummaryrequired);
    }

    if (error === null && this.minvalue !== undefined && this.minvalue !== null) {
      error = Validation.minValue(c, this.minvalue, this.label, this.validationmessageminvalue, this.validationmessagesummaryminvalue);
    }

    if (error === null && this.maxvalue !== undefined && this.maxvalue !== null) {
      error = Validation.maxValue(c, this.maxvalue, this.label, this.validationmessagemaxvalue, this.validationmessagesummarymaxvalue);
    }

    return error;
  }
}
