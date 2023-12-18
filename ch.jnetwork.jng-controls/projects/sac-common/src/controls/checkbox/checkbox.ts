import { Input, Directive } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { SacBaseModelControl } from '../../common/basemodelcontrol';

/**
 * Basis Komponente für SacCheckboxCommon. Extends SacBaseModelControl
 */
@Directive()
export class SacCheckboxCommon extends SacBaseModelControl<boolean> {

  /**
  * Text welcher als Tooltip angezeigt wird.
  */
  @Input() tooltiptext: string = '';

  /**
   * Text vom Checkbox-Control. Der Text wird rechts von der Checkbox angezeigt.
   */
  @Input() checkboxtext;

  /**
   * Control hat keinen Validator
   */
  validateData(c: AbstractControl): ValidationErrors | null {
    return null;
  }

}

