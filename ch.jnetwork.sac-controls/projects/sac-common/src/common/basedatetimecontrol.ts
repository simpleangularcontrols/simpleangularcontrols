import { SacFormLayoutCommon } from '../controls/layout/formlayout';
import { IDateTimeControl } from '../interfaces/idatetimecontrol';
import { TooltipPosition } from '../utilities/enums';
import { PopUpHelper } from '../utilities/popuphelper';
import { Validation } from '../validation';
import { CreateValidationError } from '../validation/validationerrorcreator';
import { SacBaseModelControl } from './basemodelcontrol';
import { ChangeDetectorRef, Directive, ElementRef, Injector, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { IMaskDirective } from 'angular-imask';
import * as moment_ from 'moment';

/**
 * Base class for Date/Time controls
 */
@Directive()
export abstract class SacBaseDateTimeControl extends SacBaseModelControl<Date> implements OnInit, OnDestroy {
    // #region Properties

    /**
     * Helper class to display tooltips in the correct position
     */
    private readonly popupHelper: PopUpHelper = new PopUpHelper();

    /**
     * This property contains the value as a string. Default is ''
     */
    protected _valueAsString = '';

    /**
     * Containers for the datetime picker
     */
    protected pickercontainer: ElementRef<HTMLElement>;

    /**
     * Property for enum in Angular HTML template
     */
    public TooltipPosition = TooltipPosition;

    /**
     * Defines whether the date selector is displayed
     */
    public _showselector = false;

    /**
     * Reference to imask directive in any datetime controls
     */
    @ViewChild(IMaskDirective, { static: false })
    public iMask: IMaskDirective<any>;

    /**
     * Defines the control as required
     */
    @Input() public isrequired = false;

    /**
     * Moment JS Instance
     */
    public moment = moment_['default'];

    /**
     * Arrow Item of Picker Element. Required to set the position of arrow correctly
     */
    public pickerPosition = TooltipPosition;

    /**
     * Reference to the picker arrow element used for calculating tooltip arrow position.
     */
    @ViewChild('pickerarrow', { static: false })
    public pickerarrow: ElementRef<HTMLElement> | null;

    /**
     * Name of the container for content (e.g. icon) on which the tooltip is displayed.
     */
    @ViewChild('pickerbutton', { static: true })
    public pickerbutton: ElementRef<HTMLElement>;

    /**
     * TextBox Placeholder
     */
    @Input() public placeholder: string = null;

    /**
     * Position of the picker arrow at the left
     */
    public posArrowLeft: number | null = null;

    /**
     * Position of the picker arrow at the top
     */
    public posArrowTop: number | null = null;

    /**
     * Position of the picker at the left
     */
    public posPopupLeft = 0;

    /**
     * Position of the picker at the top
     */
    public posPopupTop = 0;

    /**
     * Position of the datetime picker. Values: left|top|right|bottom|auto
     *
     * Value 'auto' can be combined with another value.
     */
    @Input()
    public position = 'bottomend|topend';

    /**
     * Resource Key for Validation Message DateTimeFormat at Control
     */
    @Input() public validationmessagedatetimeformat: string = this.validationKeyService.ValidationErrorDatetimeFormat;

    /**
     * Resource Key for Validation Message DateTimeFormat in Validation Summary
     */
    @Input() public validationmessagedatetimeformatsummary: string =
        this.validationKeyService.ValidationErrorSummaryDatetimeFormat;

    /**
     * Resource Key for Validation Message Required at Control
     */
    @Input() public validationmessagerequired: string = this.validationKeyService.ValidationErrorRequired;

    /**
     * Resource Key for Validation Message Required in Validation Summary
     */
    @Input() public validationmessagerequiredsummary: string = this.validationKeyService.ValidationErrorSummaryRequired;

    // #endregion Properties

    // #region Constructors

    /**
     * Constructor
     * @param formlayout SacFormLayoutCommon to define scoped layout settings
     * @param injector Injector for injecting services
     * @param elementRef Reference to html element
     * @param cdRef Change detector reference for updating component view
     */
    constructor(
        formlayout: SacFormLayoutCommon,
        injector: Injector,
        protected elementRef: ElementRef,
        private readonly cdRef: ChangeDetectorRef
    ) {
        super(formlayout, injector);
    }

    // #endregion Constructors

    // #region Public Getters And Setters

    /**
     * Setter for the name of the container for the tooltip. Required because the tooltip can be hidden via ngIf.
     */
    @ViewChild('picker', { static: false })
    public set picker(picker: ElementRef) {
        if (picker !== undefined) {
            document.body.appendChild(picker.nativeElement);
        }

        this.pickercontainer = picker;
        this.onContentChange();
        this.cdRef.detectChanges();
    }

    public get tooltop(): ElementRef {
        return this.pickercontainer;
    }

    /**
     * Getter for valuestring
     */
    public get valuestring(): string {
        if (this.value === null) {
            return this._valueAsString;
        } else {
            const date = this.moment.utc(this.value);
            return date.local().format(this.GetDateTimeFormatString());
        }
    }

    /**
     * The input receives the value of type string
     */
    @Input()
    public set valuestring(v: string) {
        this._valueAsString = v;
        let date: moment_.Moment = this.moment(v, [this.GetDateTimeFormatString()], true);

        date = this.ModifyParsedDateTimeValue(date).utc();

        if (date.isValid()) {
            this.value = date.toDate();
        } else {
            this.value = null;
        }

        // update imaks reference
        this.cdRef.detectChanges();
        this.iMask.maskRef.updateValue();
        this.iMask.maskRef.updateControl();
    }

    // #endregion Public Getters And Setters

    // #region Public Methods

    /**
     * The method returns dateTime as a string
     */
    public abstract GetDateTimeFormatString(): string;

    /**
     * Returns the position of the tooltip
     */
    public GetPickerPosition(): TooltipPosition {
        return this.popupHelper.getDisplayPosition(
            this.pickerbutton,
            this.pickercontainer,
            this.getArrowWidth(),
            this.getArrowHeight(),
            this.position,
            false
        );
    }

    /**
     * The method modifies the entered value of type Moment
     */
    public abstract ModifyParsedDateTimeValue(v: moment_.Moment): moment_.Moment;

    /**
     * Converts a JSON date string into a UTC DateTime object that can be used by the control
     * @param timestamp Date timestamp to convert
     * @returns Moment object in UTC
     */
    public getDate(timestamp): moment.Moment {
        const date = new Date(timestamp);
        const year = date.getUTCFullYear();
        const month = date.getUTCMonth();
        const day = date.getUTCDate();
        const hours = date.getUTCHours();
        const minutes = date.getUTCMinutes();
        const seconds = date.getUTCSeconds();

        return this.moment(Date.UTC(year, month, day, hours, minutes, seconds));
    }

    /**
     * Calculates the height of the tooltip
     */
    public getPickerHeight(): number {
        return this.popupHelper.getPopupHeight(this.pickercontainer);
    }

    /**
     * Calculates the width of the picker
     */
    public getPickerWidth(): number {
        return this.popupHelper.getPopupWidth(this.pickercontainer);
    }

    /**
     * Clean up resources when the control is destroyed.
     *
     * Removes the picker element from the DOM if visible and unregisters global resize/scroll listeners.
     */
    public ngOnDestroy(): void {
        // Remove Picker if is visible
        if (this._showselector && this.pickercontainer?.nativeElement) {
            document.body.removeChild(this.pickercontainer.nativeElement);
        }

        // Unregister Event Listener
        window.removeEventListener('scroll', this.onContentChange, true);
        window.removeEventListener('resize', this.onContentChange, true);
    }

    /**
     * Init Event
     */
    public ngOnInit(): void {
        super.ngOnInit();
        this.setDateTimeFormat();

        // Register Event Listener
        window.addEventListener('scroll', this.onContentChange, true);
        window.addEventListener('resize', this.onContentChange, true);
    }

    /**
     * Sets the value of type string to the property valuestring
     * @param v String value to set
     */
    public setValueString(v: string) {
        this.valuestring = v;
    }

    /**
     * Validates the datetime control value format and required status.
     *
     * @param c AbstractControl instance to validate.
     * @returns ValidationErrors if invalid, otherwise null.
     */
    public validateData(c: AbstractControl): ValidationErrors | null {
        let error: ValidationErrors | null = null;

        if (this.valuestring !== null && this.valuestring.indexOf('_') >= 0) {
            error = CreateValidationError(
                'invalidtype',
                this.validationmessagedatetimeformat,
                this.validationmessagedatetimeformatsummary
            );

            if (error) {
                return error;
            }
        }

        error = Validation.isValidDate(
            this.validationmessagedatetimeformat,
            this.validationmessagedatetimeformatsummary
        )(c);

        if (this.isrequired) {
            error = Validation.required(this.validationmessagerequired, this.validationmessagerequiredsummary)(c);
        }

        return error;
    }

    /**
     * Overwrite WriteValue to Set correct Date Object
     * @param value Date or string value to write to the control
     */
    public writeValue(value: Date | string) {
        if (value === '' || value === null || value === undefined) {
            // Reset value string so that when the model is updated the input field is also cleared.
            this._valueAsString = '';
            // Set Internal Property
            this._value = null;
        } else {
            this._value = this.getDate(value).toDate();
        }

        super.writeValue(this._value);

        // force detect changes and update imask directive
        this.cdRef.detectChanges();
        this.iMask.maskRef.updateValue();
    }

    // #endregion Public Methods

    // #region Protected Methods

    /**
     * Gets the height of the arrow element
     * @returns The height in pixels of the arrow element, or 0 if not present
     */
    protected getArrowHeight(): number {
        return this.pickerarrow ? this.pickerarrow.nativeElement.offsetHeight : 0;
    }

    /**
     * Gets the width of the arrow element
     * @returns The width in pixels of the arrow element, or 0 if not present
     */
    protected getArrowWidth(): number {
        return this.pickerarrow ? this.pickerarrow.nativeElement.offsetWidth : 0;
    }

    /**
     * Calculates the position of the tooltip from links
     */
    protected getPositionLeft(): number {
        const value = this.popupHelper.getPositionLeft(
            this.pickerbutton,
            this.pickercontainer,
            this.elementRef,
            this.getArrowWidth(),
            this.getArrowHeight(),
            this.position,
            false
        );

        // Ensure that pop-ups never appear outside the visible area on the left
        if (value < 0) {
            this.posPopupLeft = 5;
        } else {
            this.posPopupLeft = value;
        }

        switch (this.GetPickerPosition()) {
            case TooltipPosition.top:
            case TooltipPosition.bottom:
                this.posArrowLeft = this.getPickerWidth() / 2 - -this.getArrowWidth();
                break;
            case TooltipPosition.topend:
            case TooltipPosition.bottomend:
                this.posArrowLeft =
                    this.getPickerWidth() -
                    this.getArrowWidth() / 2 -
                    this.popupHelper.getContainerWidth(this.pickerbutton, false) / 2;

                // Correction by Arrow if popup is outside the left margin
                if (value < 0) {
                    this.posArrowLeft -= value * -1 + 5;
                }
                break;
            default:
                this.posArrowLeft = null;
                break;
        }

        return value;
    }

    /**
     * Calculates the position of the tooltip from the top
     */
    protected getPositionTop(): number {
        const value = this.popupHelper.getPositionTop(
            this.pickerbutton,
            this.pickercontainer,
            this.elementRef,
            this.getArrowWidth(),
            this.getArrowHeight(),
            this.position,
            false
        );
        this.posPopupTop = value;

        switch (this.GetPickerPosition()) {
            case TooltipPosition.left:
            case TooltipPosition.right:
                this.posArrowTop = this.getPickerHeight() / 2 - 6.5;
                break;
            default:
                this.posArrowTop = null;
                break;
        }

        return value;
    }

    // #endregion Protected Methods

    // #region Private Methods

    /**
     * method if content has changed and proportions need to be reset in the UI.
     */
    private readonly onContentChange = (): void => {
        // Do nothing if is not visible
        if (!this._showselector) {
            return;
        }

        setTimeout(() => {
            this.getPositionLeft();
            this.getPositionTop();
        });
    };

    /**
     * Sets the date-time format string from the configured format property
     */
    private setDateTimeFormat(): void {
        // HACK: Add addition property to FormControl. Can be fixed if solution for ticket: https://github.com/angular/angular/issues/19686
        if (this.ngControl) {
            (this.ngControl as unknown as IDateTimeControl).datetimeformatstring = this.GetDateTimeFormatString();
        }
    }

    // #endregion Private Methods
}
