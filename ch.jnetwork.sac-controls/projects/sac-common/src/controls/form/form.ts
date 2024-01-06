import { Directive, Input } from '@angular/core';
import { AbstractControl, FormGroup, NgForm } from '@angular/forms';
import { convertToBoolean } from '../../utilities/convertion';

/**
 * Typ für Form Actions
 */
export type FormHooks = 'change' | 'blur' | 'submit';

/**
 * Base Komponente für SacFormular
 */
@Directive()
export class SacFormCommon {
  /**
   * Inline Errors für das Formular
   */
  private _inlineerrorenabled: boolean | null = null;

  /**
   * Form Control
   */
  @Input()
  SacFormular: string;

  /**
   * Default Label Size for Form
   */
  @Input() labelsize: number = 3;
  /**
   * Kontroliert, ob das Label adaptive ist
   */
  @Input() isadaptivelabel: boolean = false;
  /**
   * Type des Forms
   */
  @Input() orientation: string = 'horizontal';

  /**
   * Standardwert wann die Werte via NgModel aktualisiert werden
   */
  private _updateon: FormHooks = 'change';

  /**
   * Definiert, wenn das Model geupdatet wird
   */
  @Input()
  set updateon(v: FormHooks) {
    this._updateon = v;
    this.form.options.updateOn = v;
  }
  get updateon(): FormHooks {
    return this._updateon;
  }

  /**
   * Aktiviert oder Deaktiviert die Inline Errors für das Control
   */
  @Input()
  set inlineerrorenabled(value: boolean) {
    if (value === null || value === undefined) {
      this._inlineerrorenabled = null;
    } else {
      this._inlineerrorenabled = convertToBoolean(value);
    }
  }
  /**
   * Aktiviert oder Deaktiviert die Inline Errors für das Control
   */
  get inlineerrorenabled(): boolean {
    return this._inlineerrorenabled;
  }

  /**
   * Vertikale oder horizontale Orientierung des Formulars zurück
   */
  public getOrientation(): string {
    switch (this.orientation.toLowerCase()) {
      case 'horizontal':
        return 'horizontal';
      case 'vertical':
        return 'vertical';
      case 'none':
        return 'none';
      default:
        throw new Error(
          'Invalid formtype at SacFormCommon. Valid values are horizontal, vertical, none'
        );
    }
  }

  /**
   * Gibt die NgForm Instanz zurück
   */
  public getForm(): NgForm {
    return this.form;
  }

  /**
   * Konstruktor
   * @param form Instanz von NgForm
   */
  constructor(private form: NgForm) {
    this.form.options = { updateOn: this._updateon };
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

  /**
   * Gibt zurück, ob die Inline Error Meldungen für das Formular aktiv sind.
   */
  public get IsInlineErrorEnabled(): boolean {
    return this._inlineerrorenabled !== false;
  }
}
