import { AbstractControl, ValidationErrors } from '@angular/forms';
import { NgInputBase } from '../../common/baseinputcontrol';
import { Input } from '@angular/core';

/**
 * Common Klasse für Static Label Control
 **/
export class NgStaticLabelCommon extends NgInputBase<string> {

  /**
   * Erlaubt HTML Content in der Anzeige des Wertes
   */
  @Input('allowhtml')
  _allowhtml: boolean = false;

  /**
   * Validierung des Controls
   *
   * @param c Control das Validiert werden soll
   * @returns Fehlermeldung aus Validation oder NULL
   */
  validateData(c: AbstractControl): ValidationErrors | null {
    // Keine Validierung, daher immer NULL
    return null;
  }
}
