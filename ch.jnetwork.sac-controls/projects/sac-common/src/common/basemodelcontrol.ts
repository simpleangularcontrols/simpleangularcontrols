import { SacFormLayoutCommon } from '../controls/layout/formlayout';
import { ControlHeight } from '../enums/ControlHeight';
import { ISacConfigurationService } from '../interfaces/ISacConfigurationService';
import { ISacIconService } from '../interfaces/ISacIconService';
import { ISacLabelSizes } from '../interfaces/ISacLabelSizes';
import { ISacLocalisationService } from '../interfaces/ISacLocalisationService';
import { ISacValidationKeyService } from '../interfaces/ISacValidationKeyService';
import { IAbstractControlLabelExtension } from '../interfaces/iabstractcontrollabel';
import {
    SACICON_SERVICE,
    SACVALIDATIONKEY_SERVICE,
    SacDefaultIconService,
    SacDefaultValidationKeyService,
} from '../services';
import { SACCONFIGURATION_SERVICE, SacDefaultConfigurationService } from '../services/sac-configuration.service';
import { SACLOCALISATION_SERVICE, SacDefaultLocalisationService } from '../services/sac-localisation.service';
import { convertToBoolean } from '../utilities/convertion';
import { createGuid } from '../utilities/guid';
import { ValidationErrorItem } from '../validation';
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

/**
 * Abstract class for SacBaseModelControl. Implements ControlValueAccessor, Validator, OnInit
 */
@Directive()
export abstract class SacBaseModelControl<VALUE> implements ControlValueAccessor, Validator, OnInit {
    // #region Properties

    /**
     * Inline errors for the control
     */
    private _inlineerrorenabled: boolean | null = null;

    /**
     * Label Text
     */
    private _label = '';

    /**
     * Service for loading default settings for the controls
     */
    protected readonly configurationService: ISacConfigurationService;

    /**
     * Boolean property dirty; default value - false
     */
    protected _dirty = false;

    /**
     * SacModel form is disabled
     */
    protected _disabledForm = false;

    /**
     * Validator
     */
    protected _onChange: () => void;

    /**
     * Boolean property touched; default value - false
     */
    protected _touched = false;

    /**
     * Internal variable that holds the value of the control
     */
    protected _value: VALUE = null;

    /**
     * Form layout instance if exists
     */
    protected formlayout: SacFormLayoutCommon = null;

    /**
     * icon service
     */
    protected iconService: ISacIconService;

    /**
     * Service for error localisation
     */
    protected lngResourceService: ISacLocalisationService;

    /**
     * ngControl
     */
    protected ngControl: UntypedFormControl;

    /**
     * ControlHeight enum for use in HTML markup
     */
    public ControlHeight: typeof ControlHeight = ControlHeight;

    /**
     * Defines the standard height of the components
     */
    @Input()
    public componentHeight: ControlHeight | null = null;

    /**
     * Disables the input control
     */
    @Input() public disabled = false;

    /**
     * Disables the label in the template
     */
    @Input() public disablelabel = false;

    /**
     * Identifier used for the E2E data attribute.
     */
    @Input()
    public e2eidentifier: string | null = null;

    /**
     * Text to support the user during input.
     */
    @Input() public helptext = '';

    /**
     * Mode for display helptext
     */
    @Input()
    public helptextmode: 'tooltip' | 'text' | null;

    /**
     * defines that error messages are displayed under the controls
     */
    @Input() public inlineError = true;

    /**
     * Label Mode 'standard' | 'floating' or null (null = use global configuration)
     */
    @Input()
    public labelMode: 'standard' | 'floating' | null = null;

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
     * Name of the control
     */
    @Input() public name: string = createGuid();

    /**
     * Empty implementation of "propagateChange". Must be done to avoid errors
     */
    public propagateChange: any = () => {};

    /**
     * Empty implementation of "propagateTouch". Must be done to avoid errors
     */
    public propagateTouch: any = () => {};

    /**
     * Detach label text and tooltip from each other in Label so that label and tooltip can be aligned differently. This is in Bootstrap 3 not supported!
     */
    @Input()
    public splitlabelandhelptext: boolean | null = null;

    /**
     * Service to receive standard validation message keys and texts
     */
    public validationKeyService: ISacValidationKeyService;

    // #endregion Properties

    // #region Constructors

    /**
     * Constructor
     * @param formlayout SacFormLayoutCommon to define scoped layout settings
     * @param injector Injector for injecting services
     */
    constructor(
        @Host() formlayout: SacFormLayoutCommon,
        private readonly injector: Injector
    ) {
        this.formlayout = formlayout;
        this.validationKeyService = injector.get(SACVALIDATIONKEY_SERVICE, new SacDefaultValidationKeyService());
        this.lngResourceService = injector.get(
            SACLOCALISATION_SERVICE,
            new SacDefaultLocalisationService(this.validationKeyService)
        );

        this.configurationService = injector.get(SACCONFIGURATION_SERVICE, new SacDefaultConfigurationService());

        this.iconService = injector.get(SACICON_SERVICE, new SacDefaultIconService());
    }

    // #endregion Constructors

    // #region Public Getters And Setters

    /**
     * Get Icon for Helptext Tooltip
     */
    public get HelptextTooltipIcon(): string {
        return this.iconService.GenericHelptextIcon;
    }

    /**
     * Method returns boolean value for dirty
     */
    public get dirty(): boolean {
        if (this.ngControl !== null && this.ngControl !== undefined) {
            this._dirty = this.ngControl.dirty;
        }

        return this._dirty;
    }

    /**
     * Show error messages inline
     */
    public get inlineerrorenabled(): boolean | null {
        return this._inlineerrorenabled;
    }

    /**
     * Enables or disables the inline errors for the control
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
     * Method returns a boolean value indicating whether the form is invalid
     */
    public get invalid(): boolean {
        return this.ngControl !== undefined && this.ngControl !== null && this.ngControl.invalid;
    }

    /**
     * Defines whether the control is disabled
     */
    public get isdisabled(): boolean {
        return this._disabledForm || this.disabled;
    }

    /**
     * Returns whether the inline error messages are active for this control.
     */
    public get isinlineerrorenabled(): boolean {
        if (this._inlineerrorenabled !== null) {
            return this._inlineerrorenabled;
        }

        if (this.formlayout !== null && this.formlayout.IsInlineErrorEnabled !== null) {
            return this.formlayout?.IsInlineErrorEnabled;
        }

        if (this.configurationService.InlineErrorEnabled !== null) {
            return this.configurationService.InlineErrorEnabled;
        }

        return true;
    }

    /**
     * Defines the label text
     */
    public get label(): string {
        return this._label;
    }

    /**
     * Sets the label text
     */
    @Input() public set label(v: string) {
        this._label = v;
        this.UpdateLabelToControl();
    }

    /**
     * Returns an object with all label sizes. These values can then be transferred to corresponding CSS classes using a pipe
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
     * Method returns boolean value for touched
     */
    public get touched(): boolean {
        if (this.ngControl !== null && this.ngControl !== undefined) {
            this._touched = this.ngControl.touched;
        }

        return this._touched;
    }

    /**
     * Get method for NgModel binding in HTML markup
     */
    public get value(): VALUE {
        return this._value;
    }

    /**
     * Set method for NgModel binding in HTML markup
     * Input is required so that the value can also be set via the markup.
     */
    @Input()
    public set value(v: VALUE) {
        if (this.disabled) {
            return;
        }

        this._value = this.ConvertInputValue(v);
        this.propagateChange(this._value);
    }

    // #endregion Public Getters And Setters

    // #region Public Methods

    /**
     * Method returns error based on given criteria
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

        return this.lngResourceService.GetString(errorItem.errorMessageKey, parameters);
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

        // set component heigth from fromlayout directive
        this.setComponentHeight();

        // set method to display helptext
        this.setHelpTextMode();

        // set SplitMode for Labels
        this.setLabelSplitMode();

        this.OnClassInit();
    }

    /**
     * Method sets touched = true
     */
    public onTouch(): void {
        this._touched = true;
        this.propagateTouch();
    }

    /**
     * Method so that other controls can be notified of changes in the control
     * For change notification, call the propagateChange method.
     * @param fn Callback function for change notification
     */
    public registerOnChange(fn: any): void {
        this.propagateChange = (obj) => fn(obj);
    }

    /**
     * Method so that other controls can be notified of changes when the control is activated (focus).
     * @param fn Callback function for touch notification
     */
    public registerOnTouched(fn: any): void {
        this.propagateTouch = (obj) => fn(obj);
    }

    /**
     * Method registers changes in validation
     * @param fn Callback function for validator change notification
     */
    public registerOnValidatorChange(fn: () => void): void {
        this._onChange = fn;
    }

    /**
     * Sets the control to disabled
     * @param isDisabled True to disable the control, false to enable it
     */
    public setDisabledState(isDisabled: boolean): void {
        this._disabledForm = isDisabled;
    }

    /**
     * Method that sets the value of the input
     * @param v The value to set
     */
    public setValue(v: VALUE): void {
        this.value = v;
    }

    /**
     * Validator method
     * @param c Form control to validate
     * @returns Validation errors or null if valid
     */
    public validate(c: AbstractControl): ValidationErrors | null {
        const error: ValidationErrors | null = this.validateData(c);
        return error;
    }

    /**
     * Abstract validator method for form control value.
     *
     * Derived classes should check control value and return validation errors or null.
     *
     * @param c Form control being validated
     * @returns ValidationErrors if invalid, otherwise null
     */
    public abstract validateData(c: AbstractControl): ValidationErrors | null;

    /**
     * Method for writing values from the model into the control
     * @param value The value to write to the control
     */
    public writeValue(value: VALUE) {
        this._value = value;
    }

    // #endregion Public Methods

    // #region Protected Methods

    /**
     * Method can be overridden in parent classes
     * @param value Value that should be converted to the correct type
     * @returns Value in the correct type
     */
    protected ConvertInputValue(value: VALUE): VALUE {
        return value;
    }

    /**
     * Method returns the decimal symbol
     */
    protected GetDecimalSymbol(): string {
        return '.';
    }

    /**
     * Method can be used to Set Properties at Class Init
     */
    protected OnClassInit(): void {}

    /**
     * Updates the NgModel value and the validity of the control's validator
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
            (this.ngControl as unknown as IAbstractControlLabelExtension).controllabel = this.label;
        }
    }

    /**
     * Set component height from property or parent layout control
     */
    private setComponentHeight() {
        // set size extra small
        if (!this.componentHeight) {
            if (this.formlayout?.componentHeight) {
                this.componentHeight = this.formlayout.componentHeight;
            } else {
                this.componentHeight = this.configurationService.ComponentHeight;
            }
        }
    }

    /**
     * Set mode for helptext. Can be tooltip or text
     */
    private setHelpTextMode() {
        if (!this.helptextmode) {
            if (this.formlayout?.helptextmode) {
                this.helptextmode = this.formlayout.helptextmode;
            } else {
                this.helptextmode = this.configurationService.HelptextMode;
            }
        }
    }

    /**
     * Sets the label display mode from property or parent layout control
     */
    private setLabelMode(): void {
        if (!this.labelMode) {
            if (this.formlayout?.labelMode) {
                this.labelMode = this.formlayout.labelMode;
            } else {
                this.labelMode = this.configurationService.LabelMode;
            }
        }

        // floating labels need always full width
        if (this.labelMode === 'floating') {
            this.labelSizeXxl = 12;
            this.labelSizeXl = 12;
            this.labelSizeLg = 12;
            this.labelSizeMd = 12;
            this.labelSizeSm = 12;
            this.labelSizeXs = 12;
        }
    }

    /**
     * Set label sizes from property or parent layout control
     */
    private setLabelSizes() {
        this.setLabelMode();

        // floating labels need always full width
        if (this.labelMode === 'floating') {
            return;
        }

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

    /**
     * Sets the label split mode from property or parent layout control\n
     **/
    private setLabelSplitMode() {
        if (!this.splitlabelandhelptext) {
            if (this.formlayout?.splitlabelandhelptext) {
                this.splitlabelandhelptext = this.formlayout.splitlabelandhelptext;
            } else {
                this.splitlabelandhelptext = this.configurationService.SplitLabelAndHelptext;
            }
        }
    }

    // #endregion Private Methods
}
