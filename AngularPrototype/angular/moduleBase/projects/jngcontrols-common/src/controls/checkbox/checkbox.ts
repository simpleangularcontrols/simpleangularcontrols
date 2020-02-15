import { ValidationErrors, AbstractControl } from '@angular/forms';
import { NgBaseModelControl } from '../../common/basemodelcontrol';
import { Input, Directive } from '@angular/core';

/**
 * Basis Komponente für NgCheckboxCommon. Extends NgBaseModelControl
 */
export class NgCheckboxCommon extends NgBaseModelControl<boolean> {

  /**
  * Text welcher als Tooltip angezeigt wird.
  */
  @Input('tooltiptext') _tooltiptext: string = '';

  /**
   * Text vom Checkbox-Control. Der Text wird rechts von der Checkbox angezeigt.
   */
  @Input('checkboxtext') _checkboxtext;

  /**
   * Control hat keinen Validator
   */
  validateData(c: AbstractControl): ValidationErrors | null {
    return null;
  }

}

