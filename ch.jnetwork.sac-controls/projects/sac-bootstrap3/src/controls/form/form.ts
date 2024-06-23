import { Directive, HostBinding } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SacFormCommon } from '@simpleangularcontrols/sac-common';

/**
 * Erweiterung / Hooking für automatismen in Formular. Wird als Container für alle Controls benötigt.
 *
 * @example Beispiel über Div Container
 *
 * <div ngForm></div>
 *
 * @example Beispiel über Form Tag
 *
 * <form></form>
 */
/* eslint @angular-eslint/directive-selector: 0 */
@Directive({
  selector: 'form:not([ngNoForm]):not([formGroup]),[ngForm]',
  exportAs: 'sacform',
})
export class SacFormDirective extends SacFormCommon {
  // #region Properties

  /**
   * Sets the standard CSS class for forms on the form container
   */
  @HostBinding('class.form')
  public cssClassForm: boolean = true;

  /**
   * Sets the default CSS class for horizontal forms on the form container
   */
  @HostBinding('class.form-horizontal')
  public cssClassHorizontal: boolean = true;

  // #endregion Properties

  // #region Constructors

  /**
   * Konstruktor
   * @param form Instanz von NgForm für eigene automatische Formular Logik
   */
  constructor(form: NgForm) {
    super(form);
  }

  // #endregion Constructors
}
