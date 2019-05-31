import { AbstractControl, ValidationErrors } from '@angular/forms';
import { NgInputBase } from '../../common/baseinputcontrol';
import { Input } from '@angular/core';

/**
 * Common Klasse für Static Label Control
 **/
export class NgStaticLabelCommon extends NgInputBase<string> {

  /**
   * Validierung des Controls
   * 
   * @param c Control das Validiert werden soll
   * @returns Fehlermeldung aus Validation oder NULL
   */
  validateData(c: AbstractControl): ValidationErrors | null {
    let error: ValidationErrors|null = null;
    return error;
  }

  /**
   * Erlaubt HTML Content in der Anzeige des Wertes
   */
  @Input("allowhtml")
  _allowhtml: boolean = false;
}
