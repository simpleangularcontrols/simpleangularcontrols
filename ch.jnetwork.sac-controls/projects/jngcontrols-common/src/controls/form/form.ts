import { Directive, Input } from '@angular/core';
import { AbstractControl, FormGroup, NgForm } from '@angular/forms';
import { convertToBoolean } from '../../utilities/convertion';

// #region Type aliases

/**
 * Type for form actions
 */
export type FormHooks = 'change' | 'blur' | 'submit';

// #endregion Type aliases

// #region Classes

/**
 * Base Komponente für SacFormular
 */
@Directive()
export class SacFormCommon {
  // #region Properties

  /**
   * Standardwert wann die Werte via NgModel aktualisiert werden
   */
  private _updateon: FormHooks = 'change';

  // #endregion Properties

  // #region Constructors

  /**
   * Konstruktor
   * @param form Instanz von NgForm
   */
  constructor(private form: NgForm) {
    this.form.options = { updateOn: this._updateon };
  }

  // #endregion Constructors

  // #region Public Getters And Setters

  public get updateon(): FormHooks {
    return this._updateon;
  }

  /**
   * Definiert, wenn das Model geupdatet wird
   */
  @Input()
  public set updateon(v: FormHooks) {
    this._updateon = v;
    this.form.options.updateOn = v;
  }

  // #endregion Public Getters And Setters

  // #region Public Methods

  /**
   * Gibt die NgForm Instanz zurück
   */
  public getForm(): NgForm {
    return this.form;
  }

  /**
   * Markiert alle Controls innerhalb des Formulares als Touched
   */
  public markAsTouched(): void {
    if (this.form && this.form.invalid) {
      this.markAsTouchedInternal(this.form.controls);
    }
  }

  /**
   * Aktualisiert die Werte und den Gültigkeitsstatus des Formulars
   */
  public updateValueAndValidity(markAsTouched: boolean = true): void {
    // Update all Controls
    this.updateValueAndValidityInternal(this.form.controls);
    // Update Main Form
    this.getForm().form.updateValueAndValidity();

    // Mark all Controls as Touched
    if (markAsTouched) {
      this.markAsTouched();
    }
  }

  // #endregion Public Methods

  // #region Private Methods

  /**
   * Markiert alle Controls inkl. dem Tree als Touched
   * @param controls Controls Collection
   */
  private markAsTouchedInternal(controls: { [key: string]: AbstractControl }) {
    const keyList: string[] = Object.keys(controls);

    for (const field of keyList) {
      const control = controls[field];
      if (control instanceof FormGroup) {
        this.markAsTouchedInternal(control.controls);
      } else {
        control.markAsTouched({ onlySelf: true });
      }
    }
  }

  /**
   * Aktualisiert die Werte und die gültigkeit des Formulars
   * @param controls Controls Collection
   */
  private updateValueAndValidityInternal(controls: {
    [key: string]: AbstractControl;
  }) {
    const keyList: string[] = Object.keys(controls);

    for (const field of keyList) {
      const control = controls[field];
      if (control instanceof FormGroup) {
        this.updateValueAndValidityInternal(control.controls);
      } else {
        control.updateValueAndValidity({ onlySelf: true });
      }
    }
  }

  // #endregion Private Methods
}

// #endregion Classes
