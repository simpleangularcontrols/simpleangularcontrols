import { NgForm, NgModel, FormGroup, AbstractControl } from '@angular/forms';
import { Input, ViewChild, QueryList, ContentChildren, AfterViewInit, IterableDiffer, IterableDiffers, IterableChanges } from '@angular/core';
import { convertToBoolean } from '../../utilities/Convertion';
import { FormHooks } from '@angular/forms/src/model';

/**
 * Base Komponente für NgFormular
 */
export class NgFormularCommon {

  /**
  * Inline Errors für das Formular
  */
  private _inlineerrorenabled: boolean | null = null;

  /**
   * Form Control
   */
  @Input()
  ngFormular: string;

  /**
   * Default Label Size for Form
   */
  @Input('labelsize') labelsize: number = 3;
  /**
   * Kontroliert, ob das Label adaptive ist
   */
  @Input('isadaptivelabel') isadaptivelabel: boolean = false;
  /**
   * Type des Forms
   */
  @Input('orientation') orientation: string = 'horizontal';

  private _updateon: FormHooks = 'change';

  /**
   * Definiert, wenn das Model geupdatet wird
   */
  @Input('updateon')
  set updateon(v: FormHooks) {
    this._updateon = v;
    this.form.options.updateOn = v;
  }
  get updateon(): FormHooks {
    return this._updateon;
  }

  @Input('inlineerrorenabled')
  /**
   * Aktiviert oder Deaktiviert die Inline Errors für das Control
   */
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
        throw new Error('Invalid formtype at ngFormularCommon. Valid values are horizontal, vertical, none');
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
  private updateValueAndValidityInternal(controls: { [key: string]: AbstractControl }) {
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
