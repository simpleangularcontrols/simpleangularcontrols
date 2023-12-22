import { Directive, Host, Injector, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  FormControlName,
  FormGroupDirective,
  NgControl,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { SacFormCommon } from '../controls/form/form';
import { ISacLocalisationService } from '../interfaces/isaclocalisationservice';
import { IAbstractControlLabelExtension } from '../public_api';
import {
  InternalSacLocalisationService,
  SACLOCALISATION_SERVICE,
} from '../services/sac-localisation.service';
import { convertToBoolean } from '../utilities/Convertion';
import { ValidationErrorItem } from '../validation';

/**
 * Abstract Klasse für SacBaseModelControl. Implements ControlValueAccessor, Validator, OnInit
 */
@Directive()
export abstract class SacBaseModelControl<VALUE>
  implements ControlValueAccessor, Validator, OnInit
{
  // #region Private Variables

  /**
   * Parent Formular
   */
  protected parent: SacFormCommon;
  /**
   * SacModel Form ist disabled
   */
  protected _disabledForm: boolean = false;
  /**
   * ngControl
   */
  protected ngControl: FormControl;
  /**
   * Service für Error Localisation
   */
  protected lngResourceService: ISacLocalisationService;

  private _label: string = '';

  // #endregion

  // #region Properties

  /**
   * Name des Controls
   */
  @Input() name: string = '';
  /**
   * Definiert den Label Text
   */
  @Input() set label(v: string) {
    this._label = v;
    this.UpdateLabelToControl();
  }
  /**
   * Definiert den Label Text
   */
  get label(): string {
    return this._label;
  }

  /**
   * Definiert die Labelgröse
   */
  @Input() labelsize: number = undefined;
  /**
   * Deaktiviert das Label im Template
   */
  @Input() disablelabel: boolean = false;
  /**
   * Deaktiviert das Input Control
   */
  @Input() disabled: boolean = false;
  /**
   * Kontroliert, ob das Label adaptive ist
   */
  @Input() isadaptivelabel: boolean = undefined;
  /**
   * Definiert, ob das Control Sprachspezifisch ist
   */
  @Input() islanguagespecific: boolean = false;

  /**
   * Definiert ob das Control disabled ist
   */
  get isdisabled(): boolean {
    return this._disabledForm || this.disabled;
  }

  // #endregion

  // #region Constructor

  /**
   * Konstruktor
   * Inject des Formulars
   * @parent SacFormCommon
   * @injector Injector
   */
  constructor(@Host() parent: SacFormCommon, private injector: Injector) {
    this.parent = parent;
    this.lngResourceService = injector.get(
      SACLOCALISATION_SERVICE,
      new InternalSacLocalisationService()
    );
  }

  /**
   * Interne Variable, die den Wert des Controls hält
   */
  protected _value: VALUE = null;

  /**
   * Validator
   */
  protected _onChange: () => void;

  /**
   * Boolean Property dirty; default Wert - false
   */
  protected _dirty: boolean = false;

  /**
   * Boolean Property touched; default Wert - false
   */
  protected _touched: boolean = false;

  /**
   * Inline Errors für das Control
   */
  private _inlineerrorenabled: boolean | null = null;

  // #endregion

  // #region Control Events

  /**
   * Init Event
   */
  ngOnInit() {
    // receive form via formcontrolname or formcontrol instance
    const formControl = this.injector.get(NgControl, null);
    if (formControl instanceof FormControlName) {
      const form = this.injector.get(FormGroupDirective, null);
      this.ngControl = form.getControl(formControl);
    } else {
      this.ngControl = formControl.control as FormControl;
    }

    this.UpdateLabelToControl();

    /**
     * Label Size von Formular lesen
     */
    if (this.labelsize === undefined) {
      if (this.parent?.labelsize !== undefined) {
        this.labelsize = this.parent.labelsize;
      } else {
        this.labelsize = 4;
      }
    }

    /**
     * Adaptive Label from Form
     */
    if (this.isadaptivelabel === undefined) {
      if (this.parent?.isadaptivelabel !== undefined) {
        this.isadaptivelabel = this.parent.isadaptivelabel;
      } else {
        this.isadaptivelabel = false;
      }
    }

    this.OnClassInit();
  }

  // #endregion

  // #region Implementation ControlValueAccessor

  /**
   * Leere Implementation von "propagateChange". Muss gemacht werden, damit kein Fehler entsteht
   */
  propagateChange: any = () => {};
  /**
   * Leere Implementation von "propagateTouch". Muss gemacht werden, damit kein Fehler entsteht
   */
  propagateTouch: any = () => {};

  /**
   * Methode, damit andere Controls änderungen im Control mitbekommen können
   * Zur Änderungsinfo die Methode propagateChange aufrufen.
   */
  registerOnChange(fn: any): void {
    this.propagateChange = (obj) => fn(obj);
  }

  /**
   * Methode, damit andere Controls änderungen mitbekommen, wenn das Control aktiviert (Focus) wird.
   */
  registerOnTouched(fn: any): void {
    this.propagateTouch = (obj) => fn(obj);
  }

  /**
   * Methode zum schreiben von Werten aus dem Model in das Control
   */
  writeValue(value: VALUE) {
    this._value = value;
  }

  /**
   * Setzt das Control auf Disabled
   */
  setDisabledState(isDisabled: boolean): void {
    this._disabledForm = isDisabled;
  }

  // #endregion

  // #region Control Value

  /**
   * Set Methode für NgModel Binding in Html Markup
   * Input wird benötigt, damit der Wert auch über das Markup gesetzt werden kann.
   */
  @Input()
  set value(v: VALUE) {
    if (this.disabled) {
      return;
    }

    this._value = this.ConvertInputValue(v);
    this.propagateChange(this._value);
  }

  /**
   * Get Methode für NgModel Binding in Html Markup
   */
  get value(): VALUE {
    return this._value;
  }

  /**
   * Methode die den Wert des Inputs setzt
   */
  setValue(v: VALUE): void {
    this.value = v;
  }

  // #endregion

  // #region Internal Properties

  /**
   * Berechnet die Breite des Labels
   */
  get _inputsize(): number {
    return 12 - this.labelsize;
  }

  // #endregion

  // #region Protected Helper Methods

  /**
   * Method can be used to Set Properties at Class Init
   */
  protected OnClassInit(): void {}

  /**
   * Methode ergibt Decimal Symbol
   */
  protected GetDecimalSymbol(): string {
    return '.';
  }

  /**
   * Method can Overwriten in Parent Classes
   * @param value Wert welcher in den korrekten Typ konvertiert werden soll
   * @returns Wert im korrekten Typ
   */
  protected ConvertInputValue(value: VALUE): VALUE {
    return value;
  }

  private UpdateLabelToControl(): void {
    // HACK: Add addition property to FormControl. Can be fixed if solution for ticket: https://github.com/angular/angular/issues/19686
    if (this.ngControl) {
      (
        this.ngControl as unknown as IAbstractControlLabelExtension
      ).controllabel = this.label;
    }
  }

  // #endregion

  //#region Validation Base

  /**
   * Validator Methode
   */
  validate(c: AbstractControl): ValidationErrors | null {
    const error: ValidationErrors | null = this.validateData(c);
    return error;
  }

  /**
   * Abstrakte Validator Methode
   */
  abstract validateData(c: AbstractControl): ValidationErrors | null;

  /**
   * Methode registriert Änderungen bei der Validierung
   */
  registerOnValidatorChange(fn: () => void): void {
    this._onChange = fn;
  }

  /**
   * Methode ergibt Boolean Wert für dirty
   */
  public get dirty(): boolean {
    if (this.ngControl !== null) {
      this._dirty = this.ngControl.dirty;
    }

    return this._dirty;
  }

  /**
   * Methode ergibt Boolean Wert für touched
   */
  public get touched(): boolean {
    if (this.ngControl !== null) {
      this._touched = this.ngControl.touched;
    }

    return this._touched;
  }
  /**
   * Methode ergibt boolean Wert wenn Form invalid oder nicht invalid ist
   */
  public get invalid(): boolean {
    return (
      this.ngControl !== undefined &&
      this.ngControl !== null &&
      this.ngControl.invalid
    );
  }

  /**
   * Methode ergibt boolean touched = true
   */
  onTouch(): void {
    this._touched = true;
    this.propagateTouch();
  }

  /**
   * Methode ergibt Error anhand von gegebenen Kriterien
   */
  GetErrorMessage(): Observable<string> {
    if (this.ngControl.errors === undefined || this.ngControl.errors === null) {
      return new Observable<string>((observer) => {
        observer.next('');
        observer.complete();
      });
    }

    const errors: ValidationErrors = this.ngControl.errors;

    if (errors.length === 0) {
      return new Observable<string>((observer) => {
        observer.next('');
        observer.complete();
      });
    }

    const keys: string[] = Object.keys(errors);

    if (keys.length <= 0) {
      return new Observable<string>((observer) => {
        observer.next('');
        observer.complete();
      });
    }

    console.log('Step4: ' + JSON.stringify(errors));

    const errorItem: ValidationErrorItem = errors[keys[0]];

    // Validation Parameters
    const parameters = {};
    if (errorItem.parameters !== null && errorItem.parameters !== undefined) {
      errorItem.parameters.forEach((v, k) => {
        parameters[k] = v;
      });
    }
    parameters['FIELD'] = errorItem.fieldName;

    return this.lngResourceService.GetString(
      errorItem.errorMessageKey,
      parameters
    );
  }

  /**
   * Aktualisiert den NgModel Wert und die Gültigkeit des Validators des Controls
   */
  protected UpdateValueAndValidity(): void {
    if (this.ngControl) {
      this.ngControl.updateValueAndValidity({ onlySelf: true });
    }
  }

  /**
   * Aktiviert oder Deaktiviert die Inline Errors für das Control
   */
  @Input()
  set inlineerrorenabled(value: boolean | null) {
    if (value === null || value === undefined) {
      this._inlineerrorenabled = null;
    } else {
      this._inlineerrorenabled = convertToBoolean(value);
    }
  }
  get inlineerrorenabled(): boolean | null {
    return this._inlineerrorenabled;
  }

  /**
   * Gibt zurück, ob die Inline Error Meldungen für diesem Control aktiv sind.
   */
  get IsInlineErrorEnabled(): boolean {
    if (
      this.parent?.IsInlineErrorEnabled === null ||
      this.parent.IsInlineErrorEnabled === undefined
    ) {
      return this._inlineerrorenabled;
    }

    return (
      this.parent.IsInlineErrorEnabled !== false &&
      this._inlineerrorenabled !== false
    );
  }

  //#endregion
}
