import { Input } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { NgInputBase } from '../../common/baseinputcontrol';
import { Validation } from '../../validation';

export class NgInputCommon extends NgInputBase<string> {
  /**
   * Max länge an Zeichen für Eingabefeld
   */
  @Input("maxlength") _maxlength: number = null;

  /**
   * Fix breite für das Control definieren.
   */
  @Input("controlwidth") _controlwidth: string = null

  /**
   * Methode validiert, ob der Wert den gegebenen Kriterien entspricht
   */
  validateData(c: AbstractControl): ValidationErrors | null {
    let error: ValidationErrors|null = null;

    if (this._isrequired) {
      error = Validation.required(c, this._label);
    }

    if (error === null && this._pattern !== undefined && this._pattern !== null) {
      error = Validation.patternValidator(c, this._pattern, this._label);
    }


    return error;
  }
}
