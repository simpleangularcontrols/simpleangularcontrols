import { Directive, Input } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { SacBaseModelControl } from '../../common/basemodelcontrol';

/**
 * Basis Komponente für SacCheckboxCommon. Extends SacBaseModelControl
 */
@Directive()
export class SacCheckboxCommon extends SacBaseModelControl<boolean> {
  // #region Properties

  /**
   * Text vom Checkbox-Control. Der Text wird rechts von der Checkbox angezeigt.
   */
  @Input() public checkboxtext;
  /**
   * Defines that the checkbox can be used in a list of checkboxes and is not handled as a single form control
   */
  @Input() public stacked: boolean = false;

  // #endregion Properties

  // #region Public Methods

  /**
   * Control hat keinen Validator
   */
  public validateData(c: AbstractControl): ValidationErrors | null {
    return null;
  }

  // #endregion Public Methods
}
