import { SacFormLayoutCommon } from '../controls/layout/formlayout';
import { IDateTimeControl } from '../interfaces/idatetimecontrol';
import { TooltipPosition } from '../utilities/enums';
import { PopUpHelper } from '../utilities/popuphelper';
import { Validation } from '../validation';
import { CreateValidationError } from '../validation/validationerrorcreator';
import { SacBaseModelControl } from './basemodelcontrol';
import {
    ChangeDetectorRef,
    Directive,
    DoCheck,
    ElementRef,
    Injector,
    Input,
    OnDestroy,
    OnInit,
    ViewChild,
} from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import * as moment_ from 'moment';

/**
 * Base Klasse für Date/Time Controls
 */
@Directive()
export abstract class SacBaseDateTimeControl extends SacBaseModelControl<Date> implements OnInit, OnDestroy, DoCheck {
    // #region Properties

    /**
     * Helper class to display tooltip on correct position
     */
    private readonly popupHelper: PopUpHelper = new PopUpHelper();

    /**
     * das property enthielt das Value als string. Default ist ''
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
     * Definiert ob der Date Selector angezeigt wird
     */
    public _showselector: boolean = false;

    /**
     * Definiert das Control als Required
     */
    @Input() public isrequired: boolean = false;

    /**
     * Moment JS Instance
     */
    public moment = moment_['default'];

    /**
     * Arrow Item of Picker Element. Required to set the position of arrow correctly
     */
    public pickerPosition = TooltipPosition;
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
    public posPopupLeft: number = 0;

    /**
     * Position of the picker at the top
     */
    public posPopupTop: number = 0;

    /**
     * Position of the datetime picker. Values: left|top|right|bottom|auto
     *
     * Value 'auto' can be combined with another value.
     */
    @Input()
    public position: string = 'bottomend|topend';

    /**
     * Resource Key für Validation Message DateTimeFormat bei Control
     */
    @Input() public validationmessagedatetimeformat: string = this.validationKeyService.ValidationErrorDatetimeFormat;

    /**
     * Resource Key für Validation Message DateTimeFormat in Validation Summary
     */
    @Input() public validationmessagedatetimeformatsummary: string =
        this.validationKeyService.ValidationErrorSummaryDatetimeFormat;

    /**
     * Resource Key für Validation Message Required bei Control
     */
    @Input() public validationmessagerequired: string = this.validationKeyService.ValidationErrorRequired;

    /**
     * Resource Key für Validation Message Required in Validation Summary
     */
    @Input() public validationmessagerequiredsummary: string = this.validationKeyService.ValidationErrorSummaryRequired;

    // #endregion Properties

    // #region Constructors

    /**
     * Constructor
     * @param formlayout SacFormLayoutCommon to define scoped layout settings
     * @param injector Injector for injecting services
     * @param elementRef reference to html element
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
     * Setter for the name of the container for the tooltip. Is required as the tooltip can be hidden via ngIf.
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
     * getter für valuestring
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
     * Das Input bekommt das value von typ string
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
    }

    // #endregion Public Getters And Setters

    // #region Public Methods

    /**
     * Die methode returns dateTime in string
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
     * Die methode modifiziert das eingegebene Value von typ Moment
     */
    public abstract ModifyParsedDateTimeValue(v: moment_.Moment): moment_.Moment;

    /**
     * JSON Date String in ein UTC DateTime Object konvertieren, welches vom Control verwendete werden kann
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

    public ngDoCheck(): void {
        // this.onContentChange();
    }

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
     * setzt das value von typ string zu property valuestring
     */
    public setValueString(v: string) {
        this.valuestring = v;
    }

    /**
     * Validator
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
     */
    public writeValue(value: Date | string) {
        if (value === '' || value === null || value === undefined) {
            // Reset Value String, damit beim Update des Models auch das Input Feld geleert wird.
            this._valueAsString = '';
            // Set Internal Property
            this._value = null;
        } else {
            this._value = this.getDate(value).toDate();
        }

        super.writeValue(this._value);
    }

    // #endregion Public Methods

    // #region Protected Methods

    protected getArrowHeight(): number {
        return this.pickerarrow ? this.pickerarrow.nativeElement.offsetHeight : 0;
    }

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

    private setDateTimeFormat(): void {
        // HACK: Add addition property to FormControl. Can be fixed if solution for ticket: https://github.com/angular/angular/issues/19686
        if (this.ngControl) {
            (this.ngControl as unknown as IDateTimeControl).datetimeformatstring = this.GetDateTimeFormatString();
        }
    }

    // #endregion Private Methods
}
