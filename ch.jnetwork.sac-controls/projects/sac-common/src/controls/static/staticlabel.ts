import { Directive, Input } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { SacInputBase } from '../../common/baseinputcontrol';

/**
 * Common Klasse für Static Label Control
 **/
@Directive()
export class SacStaticLabelCommon extends SacInputBase<string> {

  /**
   * Erlaubt HTML Content in der Anzeige des Wertes
   */
  @Input()
  allowhtml: boolean = false;

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
