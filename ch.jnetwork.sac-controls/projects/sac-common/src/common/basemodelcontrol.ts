import { Directive, Host, Injector, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControlName,
  FormGroupDirective,
  NgControl,
  UntypedFormControl,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { SacFormLayoutCommon } from '../controls/layout/formlayout';
import { ISacConfigurationService } from '../interfaces/ISacConfigurationService';
import { ISacLabelSizes } from '../interfaces/ISacLabelSizes';
import { ISacLocalisationService } from '../interfaces/ISacLocalisationService';
import { IAbstractControlLabelExtension } from '../public_api';
import {
  SACCONFIGURATION_SERVICE,
  SacDefaultConfigurationService,
} from '../services/sac-configuration.service';
import {
  SACLOCALISATION_SERVICE,
  SacDefaultLocalisationService,
} from '../services/sac-localisation.service';
import { convertToBoolean } from '../utilities/convertion';
import { createGuid } from '../utilities/guid';
import { ValidationErrorItem } from '../validation';

/**
 * Abstract Klasse für SacBaseModelControl. Implements ControlValueAccessor, Validator, OnInit
 */
@Directive()
export abstract class SacBaseModelControl<VALUE>
  implements ControlValueAccessor, Validator, OnInit
{
  // #region Properties

  /**
   * Inline Errors für das Control
   */
  private _inlineerrorenabled: boolean | null = null;
  private _label: string = '';

  /**
   * Service for loading default settings for the controls
   */
  protected readonly configurationService: ISacConfigurationService;

  /**
   * Boolean Property dirty; default Wert - false
   */
  protected _dirty: boolean = false;
  /**
   * SacModel Form ist disabled
   */
  protected _disabledForm: boolean = false;
  /**
   * Validator
   */
  protected _onChange: () => void;
  /**
   * Boolean Property touched; default Wert - false
   */
  protected _touched: boolean = false;
  /**
   * Interne Variable, die den Wert des Controls hält
   */
  protected _value: VALUE = null;
  /**
   * Form layout instance if exists
   */
  protected formlayout: SacFormLayoutCommon = null;
  /**
   * Service für Error Localisation
   */
  protected lngResourceService: ISacLocalisationService;
  /**
   * ngControl
   */
  protected ngControl: UntypedFormControl;

  /**
   * Deaktiviert das Input Control
   */
  @Input() public disabled: boolean = false;
  /**
   * Deaktiviert das Label im Template
   */
  @Input() public disablelabel: boolean = false;
  /**
   * defines that error messages are displayed under the controls
   */
  @Input() public inlineError: boolean = true;
  /**
   * defines that the labels are displayed as adaptive labels
   */
  @Input() public isAdaptiveLabel: boolean = false;
  /**
   * default labe size for large devices
   */
  @Input()
  public labelSizeLg: number | null = null;
  /**
   * default label size for medium devices
   */
  @Input()
  public labelSizeMd: number | null = null;
  /**
   * default label size for small devices
   */
  @Input()
  public labelSizeSm: number | null = null;
  /**
   * default label size for extra large devices
   */
  @Input()
  public labelSizeXl: number | null = null;
  /**
   * default label column size
   */
  @Input()
  public labelSizeXs: number | null = null;
  /**
   * default label size for extra extra large devices
   */
  @Input()
  public labelSizeXxl: number | null = null;
  /**
   * Name des Controls
   */
  @Input() public name: string = createGuid();

  /**
   * Leere Implementation von "propagateChange". Muss gemacht werden, damit kein Fehler entsteht
   */
  public propagateChange: any = () => {};
  /**
   * Leere Implementation von "propagateTouch". Muss gemacht werden, damit kein Fehler entsteht
   */
  public propagateTouch: any = () => {};

  // #endregion Properties

  // #region Constructors

  /**
   * Constructor
   * @param formlayout SacFormLayoutCommon to define scoped layout settings
   * @param injector Injector for injecting services
   */
  constructor(
    @Host() formlayout: SacFormLayoutCommon,
    private injector: Injector
  ) {
    this.formlayout = formlayout;
    this.lngResourceService = injector.get(
      SACLOCALISATION_SERVICE,
      new SacDefaultLocalisationService()
    );

    this.configurationService = injector.get(
      SACCONFIGURATION_SERVICE,
      new SacDefaultConfigurationService()
    );
  }

  // #endregion Constructors

  // #region Public Getters And Setters

  /**
   * Aktiviert oder Deaktiviert die Inline Errors für das Control
   */
  @Input()
  public set inlineerrorenabled(value: boolean | null) {
    if (value === null || value === undefined) {
      this._inlineerrorenabled = null;
    } else {
      this._inlineerrorenabled = convertToBoolean(value);
    }
  }

  /**
   * Definiert den Label Text
   */
  @Input() public set label(v: string) {
    this._label = v;
    this.UpdateLabelToControl();
  }

  /**
   * Set Methode für NgModel Binding in Html Markup
   * Input wird benötigt, damit der Wert auch über das Markup gesetzt werden kann.
   */
  @Input()
  public set value(v: VALUE) {
    if (this.disabled) {
      return;
    }

    this._value = this.ConvertInputValue(v);
    this.propagateChange(this._value);
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

  public get inlineerrorenabled(): boolean | null {
    return this._inlineerrorenabled;
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
   * Definiert ob das Control disabled ist
   */
  public get isdisabled(): boolean {
    return this._disabledForm || this.disabled;
  }

  /**
   * Returns whether the inline error messages are active for this control.
   */
  public get isinlineerrorenabled(): boolean {
    if (
      this.formlayout?.IsInlineErrorEnabled === null ||
      this.formlayout?.IsInlineErrorEnabled === undefined
    ) {
      return this._inlineerrorenabled;
    }

    return (
      this.formlayout.IsInlineErrorEnabled !== false &&
      this._inlineerrorenabled !== false
    );
  }

  /**
   * Definiert den Label Text
   */
  public get label(): string {
    return this._label;
  }

  /**
   * returns an object with all label sizes. These values can then be transferred to corresponding CSS classes using a pipe
   */
  public get labelSizes(): ISacLabelSizes {
    return {
      labelSizeSm: this.labelSizeSm,
      labelSizeMd: this.labelSizeMd,
      labelSizeXs: this.labelSizeXs,
      labelSizeXl: this.labelSizeXl,
      labelSizeXxl: this.labelSizeXxl,
      labelSizeLg: this.labelSizeLg,
    };
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
   * Get Methode für NgModel Binding in Html Markup
   */
  public get value(): VALUE {
    return this._value;
  }

  // #endregion Public Getters And Setters

  // #region Public Methods

  /**
   * Methode ergibt Error anhand von gegebenen Kriterien
   */
  public GetErrorMessage(): Observable<string> {
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
   * Init Event
   */
  public ngOnInit() {
    // receive form via formcontrolname or formcontrol instance
    const formControl = this.injector.get(NgControl, null);
    if (formControl instanceof FormControlName) {
      const form = this.injector.get(FormGroupDirective, null);
      this.ngControl = form.getControl(formControl);
    } else {
      if (formControl) {
        this.ngControl = formControl.control as UntypedFormControl;
      }
    }

    this.UpdateLabelToControl();

    // set label sizes from formlayout directive
    this.setLabelSizes();

    // set adaptive label property from formlayout directive
    this.setIsAdaptiveLabel();

    this.OnClassInit();
  }

  /**
   * Methode ergibt boolean touched = true
   */
  public onTouch(): void {
    this._touched = true;
    this.propagateTouch();
  }

  /**
   * Methode, damit andere Controls änderungen im Control mitbekommen können
   * Zur Änderungsinfo die Methode propagateChange aufrufen.
   */
  public registerOnChange(fn: any): void {
    this.propagateChange = (obj) => fn(obj);
  }

  /**
   * Methode, damit andere Controls änderungen mitbekommen, wenn das Control aktiviert (Focus) wird.
   */
  public registerOnTouched(fn: any): void {
    this.propagateTouch = (obj) => fn(obj);
  }

  /**
   * Methode registriert Änderungen bei der Validierung
   */
  public registerOnValidatorChange(fn: () => void): void {
    this._onChange = fn;
  }

  /**
   * Setzt das Control auf Disabled
   */
  public setDisabledState(isDisabled: boolean): void {
    this._disabledForm = isDisabled;
  }

  /**
   * Methode die den Wert des Inputs setzt
   */
  public setValue(v: VALUE): void {
    this.value = v;
  }

  /**
   * Validator Methode
   */
  public validate(c: AbstractControl): ValidationErrors | null {
    const error: ValidationErrors | null = this.validateData(c);
    return error;
  }

  /**
   * Methode zum schreiben von Werten aus dem Model in das Control
   */
  public writeValue(value: VALUE) {
    this._value = value;
  }

  // #endregion Public Methods

  // #region Public Abstract Methods

  /**
   * Abstrakte Validator Methode
   */
  public abstract validateData(c: AbstractControl): ValidationErrors | null;

  // #endregion Public Abstract Methods

  // #region Protected Methods

  /**
   * Method can Overwriten in Parent Classes
   * @param value Wert welcher in den korrekten Typ konvertiert werden soll
   * @returns Wert im korrekten Typ
   */
  protected ConvertInputValue(value: VALUE): VALUE {
    return value;
  }

  /**
   * Methode ergibt Decimal Symbol
   */
  protected GetDecimalSymbol(): string {
    return '.';
  }

  /**
   * Method can be used to Set Properties at Class Init
   */
  protected OnClassInit(): void {}

  /**
   * Aktualisiert den NgModel Wert und die Gültigkeit des Validators des Controls
   */
  protected UpdateValueAndValidity(): void {
    if (this.ngControl) {
      this.ngControl.updateValueAndValidity({ onlySelf: true });
    }
  }

  // #endregion Protected Methods

  // #region Private Methods

  private UpdateLabelToControl(): void {
    // HACK: Add addition property to FormControl. Can be fixed if solution for ticket: https://github.com/angular/angular/issues/19686
    if (this.ngControl) {
      (
        this.ngControl as unknown as IAbstractControlLabelExtension
      ).controllabel = this.label;
    }
  }

  /**
   * Set adaptive label property from parent layout control
   */
  private setIsAdaptiveLabel() {
    if (!this.isAdaptiveLabel) {
      if (this.formlayout?.isAdaptiveLabel !== undefined) {
        this.isAdaptiveLabel = this.formlayout.isAdaptiveLabel;
      } else {
        this.isAdaptiveLabel = false;
      }
    }
  }

  /**
   * Set label sizes from property or parent layout control
   */
  private setLabelSizes() {
    // set size extra small
    if (!this.labelSizeXs) {
      if (this.formlayout?.labelSizeXs) {
        this.labelSizeXs = this.formlayout.labelSizeXs;
      } else {
        this.labelSizeXs = this.configurationService.LabelSizeXs;
      }
    }

    // set size small
    if (!this.labelSizeSm) {
      if (this.formlayout?.labelSizeSm) {
        this.labelSizeSm = this.formlayout.labelSizeSm;
      } else {
        this.labelSizeSm = this.configurationService.LabelSizeSm;
      }
    }

    // set size medium
    if (!this.labelSizeMd) {
      if (this.formlayout?.labelSizeMd) {
        this.labelSizeMd = this.formlayout.labelSizeMd;
      } else {
        this.labelSizeMd = this.configurationService.LabelSizeMd;
      }
    }

    // set size large
    if (!this.labelSizeLg) {
      if (this.formlayout?.labelSizeLg) {
        this.labelSizeLg = this.formlayout.labelSizeLg;
      } else {
        this.labelSizeLg = this.configurationService.LabelSizeLg;
      }
    }

    // set size extra large
    if (!this.labelSizeXl) {
      if (this.formlayout?.labelSizeXl) {
        this.labelSizeXl = this.formlayout.labelSizeXl;
      } else {
        this.labelSizeXl = this.configurationService.LabelSizeXl;
      }
    }

    // set size extra extra large
    if (!this.labelSizeXxl) {
      if (this.formlayout?.labelSizeXxl) {
        this.labelSizeXxl = this.formlayout.labelSizeXxl;
      } else {
        this.labelSizeXxl = this.configurationService.LabelSizeXxl;
      }
    }
  }

  // #endregion Private Methods
}
