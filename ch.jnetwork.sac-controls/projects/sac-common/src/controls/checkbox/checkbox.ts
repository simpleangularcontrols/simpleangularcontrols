import { Directive, Input } from '@angular/core';
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
   * Defines that the checkbox can be used in a list of checkboxes and is not handled as a single form control
   */
  @Input() stacked: boolean = false;

  /**
   * Control hat keinen Validator
   */
  validateData(c: AbstractControl): ValidationErrors | null {
    return null;
  }
}
