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
  standalone: true,
})
export class SacFormDirective extends SacFormCommon {
  // #region Properties

  /**
   * Setzt die Standard CSS Klasse für auf dem Form Container
   */
  @HostBinding('class.form')
  public cssClassForm: boolean = true;

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
