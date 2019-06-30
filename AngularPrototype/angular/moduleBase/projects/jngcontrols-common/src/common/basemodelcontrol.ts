import { Input, Host, OnInit, Injector } from '@angular/core';
import { ControlValueAccessor, Validator, AbstractControl, NgControl, ValidationErrors } from '@angular/forms';
import { NgFormularCommon } from '../controls/form/form';
import { ILanguageResourceService } from '../interfaces/ilanguageresource';
import { InternalLanguageResourceService, LANGUAGE_SERVICE } from '../services/languageresource.service';
import { ValidationErrorItem } from '../validation';
import { Observable } from 'rxjs';
import { convertToBoolean } from '../utilities/Convertion';


export abstract class NgBaseModelControl<VALUE> implements ControlValueAccessor, Validator, OnInit {

  // #region Private Variables

  /**
   * Parent Formular
   */
  protected parent: NgFormularCommon;
  /**
   * NgModel Form ist disabled
   */
  protected _disabledForm: boolean = false;
  /**
   * ngControl
   */
  private ngControl: NgControl;
  /**
   * Service für Error Localisation
   */
  protected lngResourceService: ILanguageResourceService;

  // #endregion

  // #region Constructor

  /**
   * Konstruktor
   * Inject des Formulars
   */
  constructor(@Host() parent: NgFormularCommon, private injector: Injector) {
    this.parent = parent;
    this.lngResourceService = injector.get(LANGUAGE_SERVICE, new InternalLanguageResourceService());
  }

  // #endregion

  // #region Control Events

  /**
   * Init Event
   */
  ngOnInit() {
    this.ngControl = this.injector.get(NgControl, null);

    /**
     * Label Size von Formular lesen
     */
    if (this._labelsize === undefined) {
      if (this.parent.labelsize !== undefined) {
        this._labelsize = this.parent.labelsize;
      } else {
        this._labelsize = 4;
      }
    }

    /**
     * Adaptive Label from Form
     */
    if (this._isadaptivelabel === undefined) {
      if (this.parent.isadaptivelabel !== undefined) {
        this._isadaptivelabel = this.parent.isadaptivelabel;
      } else {
        this._isadaptivelabel = false;
      }
    }

    this.OnClassInit();
  }

  // #endregion

  // #region Implementation ControlValueAccessor

  /**
   * Leere Implementation von "propagateChange". Muss gemacht werden, damit kein Fehler entsteht
   */
  propagateChange: any = () => { };
  /**
   * Leere Implementation von "propagateTouch". Muss gemacht werden, damit kein Fehler entsteht
   */
  propagateTouch: any = () => { };

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
   * Interne Variable, die den Wert des Controls hält
   */
  protected _value: VALUE = null;

  /**
   * Set Methode für NgModel Binding in Html Markup
   * Input wird benötigt, damit der Wert auch über das Markup gesetzt werden kann.
   */
  @Input("value")
  set value(v: VALUE) {
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

  // #region Properties

  /**
   * Name des Controls
   */
  @Input("name") _name: string = '';
  /**
   * Definiert den Label Text
   */
  @Input("label") _label: string = '';
  /**
   * Definiert die Labelgröse
   */
  @Input("labelsize") _labelsize: number = undefined;
  /**
   * Deaktiviert das Label im Template
   */
  @Input("disablelabel") _disablelabel: boolean = false;
  /**
   * Deaktiviert das Input Control
   */
  @Input("disabled") _disabledControl: boolean = false;
  /**
   * Kontroliert, ob das Label adaptive ist
   */
  @Input("isadaptivelabel") _isadaptivelabel: boolean = undefined;
  /**
   * Definiert, ob das Control Sprachspezifisch ist
   */
  @Input("islanguagespecific") _islanguagespecific: boolean = false;


  /**
   * Definiert ob das Control disabled ist
   */
  get isdisabled(): boolean {
    return this._disabledForm || this._disabledControl;
  }

  // #endregion

  // #region Internal Properties

  /**
   * Berechnet die Breite des Labels
   */
  get _inputsize(): number {
    return 12 - this._labelsize;
  }

  // #endregion

  // #region Protected Helper Methods

  /**
   * Method can be used to Set Properties at Class Init
   */
  protected OnClassInit(): void {
  }

  /**
   * Methode ergibt Decimal Symbol
   */
  protected GetDecimalSymbol(): string {
    return ".";
  }

  /**
   * Method can Overwriten in Parent Classes
   */
  protected ConvertInputValue(value: VALUE): VALUE {
    return value;
  }

  // #endregion

  //#region Validation Base

  /**
   * Validator
   */
  protected _onChange: () => void;

  /**
   * Validator Methode
   */
  validate(c: AbstractControl): ValidationErrors | null {
    let error: ValidationErrors | null = this.validateData(c);
    return error;
  }

  /**
   * Abstrakte Validator Methode
   */
  abstract validateData(c: AbstractControl): ValidationErrors | null;

  /**
   * Methode registriert Änderungen bei der Validierung
   */
  registerOnValidatorChange(fn: () => void): void { this._onChange = fn; }

  /**
   * Boolean Property dirty; default Wert - false
   */
  protected _dirty: boolean = false;

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
   * Boolean Property touched; default Wert - false
   */
  protected _touched: boolean = false;
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
  public get invalid(): boolean { return this.ngControl !== undefined && this.ngControl !== null && this.ngControl.invalid; }

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

    if (this.ngControl.errors === undefined || this.ngControl.errors === null)
      return new Observable<string>((observer) => {
        observer.next('');
        observer.complete();
      })


    let errors: ValidationErrors = this.ngControl.errors;

    if (errors.length === 0)
      return new Observable<string>((observer) => {
        observer.next('');
        observer.complete();
      });

    let keys: string[] = Object.keys(errors);

    if (keys.length <= 0)
      return new Observable<string>((observer) => {
        observer.next('');
        observer.complete();
      })

    let errorItem: ValidationErrorItem = errors[keys[0]];

    // Validation Parameters
    const parameters = {};
    if (errorItem.parameters !== null && errorItem.parameters !== undefined) {
      errorItem.parameters.forEach((v, k) => { parameters[k] = v });
    }
    parameters["FIELD"] = errorItem.fieldName;

    return this.lngResourceService.GetString(errorItem.errorMessageKey, parameters);
  }

  /**
 * Inline Errors für das Control
 */
  private _inlineerrorenabled: boolean | null = null;

  @Input("inlineerrorenabled")
  /**
   * Aktiviert oder Deaktiviert die Inline Errors für das Control
   */
  set inlineerrorenabled(value: boolean | null) {
    if (value === null || value === undefined)
      this._inlineerrorenabled = null;
    else
      this._inlineerrorenabled = convertToBoolean(value);
  }
  /**
   * Aktiviert oder Deaktiviert die Inline Errors für das Control
   */
  get inlineerrorenabled(): boolean | null {
    return this._inlineerrorenabled;
  }

  /**
   * Gibt zurück, ob die Inline Error Meldungen für diesem Control aktiv sind.
   */
  get IsInlineErrorEnabled(): boolean {
    if (this.parent.IsInlineErrorEnabled === null || this.parent.IsInlineErrorEnabled === undefined)
      return this._inlineerrorenabled;

    return this.parent.IsInlineErrorEnabled !== false && this._inlineerrorenabled !== false;
  }

  //#endregion
}
