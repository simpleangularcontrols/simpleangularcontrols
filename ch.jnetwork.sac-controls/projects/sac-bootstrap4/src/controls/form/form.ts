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
 *
 */
@Directive({
  selector: 'form:not([ngNoForm]):not([formGroup]),[ngForm]', // eslint-disable-line @angular-eslint/directive-selector -- required as extension to form
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
