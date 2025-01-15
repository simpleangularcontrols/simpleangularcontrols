import { Directive, Input, OnInit } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { SacBaseModelControl } from '../../common/basemodelcontrol';

/**
 * Basis Komponente für SacCheckboxCommon. Extends SacBaseModelControl
 */
@Directive()
export class SacCheckboxCommon
  extends SacBaseModelControl<boolean>
  implements OnInit
{
  // #region Properties

  /**
   * Defines the display for a checkbox
   */
  @Input()
  public checkboxstyle: 'checkbox' | 'switch' | null;
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
   * Init Event
   */
  public ngOnInit() {
    super.ngOnInit();

    this.setCheckboxStyle();
  }

  /**
   * Control hat keinen Validator
   */
  public validateData(c: AbstractControl): ValidationErrors | null {
    return null;
  }

  // #endregion Public Methods

  // #region Private Methods

  /**
   * Adopts the default display if no display has been defined on the component.
   */
  private setCheckboxStyle(): void {
    if (!this.checkboxstyle) {
      if (this.formlayout?.checkboxstyle) {
        this.checkboxstyle = this.formlayout.checkboxstyle;
      } else {
        this.checkboxstyle = this.configurationService.CheckboxStyle;
      }
    }
  }

  // #endregion Private Methods
}
