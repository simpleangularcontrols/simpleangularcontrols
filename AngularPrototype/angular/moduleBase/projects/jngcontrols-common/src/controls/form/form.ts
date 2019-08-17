import { NgForm, NgModel, FormGroup, AbstractControl } from '@angular/forms';
import { Input, ViewChild, QueryList, ContentChildren, AfterViewInit, IterableDiffer, IterableDiffers, IterableChanges } from '@angular/core';
import { convertToBoolean } from '../../utilities/Convertion';

/**
 * Base Komponente für NgFormular
 */
export class NgFormularCommon {

  /**
   * Form Control
   */
  @Input()
  ngFormular: string;

  /**
   * Default Label Size for Form
   */
  @Input("labelsize") labelsize: number = 3;
  /**
   * Kontroliert, ob das Label adaptive ist
   */
  @Input("isadaptivelabel") isadaptivelabel: boolean = false;
  /**
   * Type des Forms
   */
  @Input("orientation") orientation: string = "horizontal";

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
        throw new Error('Invalid formtype at ngFormularCommon. Valid values are horizontal, vertical, none')
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
   * 
   * @param form Instanz von NgForm
   */
  constructor(private form: NgForm) {
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
   * Markiert alle Controls inkl. dem Tree als Touched
   * @param controls Controls Collection
   */
  private markAsTouchedInternal(controls: { [key: string]: AbstractControl }) {
    let keyList: string[] = Object.keys(controls);

    for (var field of keyList) {
      let control = controls[field];
      if (control instanceof FormGroup) {
        this.markAsTouchedInternal(control.controls);
      } else {
        control.markAsTouched({ onlySelf: true });
      }
    }
  }

  /**
  * Inline Errors für das Formular
  */
  private _inlineerrorenabled: boolean | null = null;

  @Input("inlineerrorenabled")
  /**
   * Aktiviert oder Deaktiviert die Inline Errors für das Control
   */
  set inlineerrorenabled(value: boolean) {
    if (value === null || value === undefined)
      this._inlineerrorenabled = null;
    else
      this._inlineerrorenabled = convertToBoolean(value);
  }
  /**
   * Aktiviert oder Deaktiviert die Inline Errors für das Control
   */
  get inlineerrorenabled(): boolean {
    return this._inlineerrorenabled;
  }

  /**
   * Gibt zurück, ob die Inline Error Meldungen für das Formular aktiv sind.
   */
  public get IsInlineErrorEnabled(): boolean {
    return this._inlineerrorenabled !== false
  }

}
