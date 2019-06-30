import { Input } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Validation } from '../../validation';
import { NgInputBase } from '../../common/baseinputcontrol';

export class NgInputIntegerCommon extends NgInputBase<number> {

  /**
   * Definiert das Negative Werte erlaubt sind
   */
  @Input("allownegativ") _allownegativ: boolean = false;
  /**
   * Definiert den minimalen Wert
   */
  @Input("minvalue") _minvalue: number = undefined;
  /**
   * Definiert den maximalen Wert
   */
  @Input("maxvalue") _maxvalue: number = undefined;

  /** 
   * Methode die erzeugt den Control in Abhängigkeit davon, ob negative Were erlaubt sing oder nicht
   */
  protected OnClassInit(): void {
    super.OnClassInit();

    /**
     * Definiert die Wete die erlaubt sind
     */
    this._allowedchars = "0123456789";

    if (this._allownegativ)
      this._allowedchars = this._allowedchars + "-";
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
      } else {
        return parseInt(value);
      }
    }
  }

  /**
   * Methode validiert ob der Wert entspricht den gegebenen Kriterien wenn ein Key gedrückt wird
   */
  protected OnKeyPressValidation(position: number, character: string): boolean {
    if (this._allownegativ === false && character === "-" || this._allownegativ === true && position > 0 && character === '-')
      return false;

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

    if (this._isrequired) {
      error = Validation.required(c, this._label);
    }

    if (error === null && this._minvalue !== undefined && this._minvalue !== null) {
      error = Validation.minValue(c, this._minvalue, this._label);
    }

    if (error === null && this._maxvalue !== undefined && this._maxvalue !== null) {
      error = Validation.maxValue(c, this._maxvalue, this._label);
    }

    return error;
  }
}
