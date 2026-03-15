import { SacBaseDateTimeControl } from '../../common/basedatetimecontrol';
import { Validation } from '../../validation';
import { SacFormLayoutCommon } from '../layout/formlayout';
import { ChangeDetectorRef, Directive, ElementRef, HostListener, Injector, Input } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import * as IMask from 'imask';
import * as moment_ from 'moment';

/**
 * Component for SacDateTimeCommon. Extends SacBaseDateTimeControl
 */
@Directive()
export abstract class SacDateTimeCommon extends SacBaseDateTimeControl {
    // #region Properties

    /**
     * Date format
     */
    public readonly DATEFORMAT: string = 'DD.MM.YYYY HH:mm';

    /**
     * Mask
     */
    public readonly imaskDate = {
        mask: this.DATEFORMAT,
        blocks: {
            DD: {
                mask: IMask.MaskedRange,
                from: 1,
                to: 31,
                maxLength: 2,
            },
            MM: {
                mask: IMask.MaskedRange,
                from: 1,
                to: 12,
                maxLength: 2,
            },
            YYYY: {
                mask: IMask.MaskedRange,
                from: 1,
                to: 9999,
            },
            HH: {
                mask: IMask.MaskedRange,
                from: 0,
                to: 23,
                maxLength: 2,
            },
            mm: {
                mask: IMask.MaskedRange,
                from: 0,
                to: 59,
                maxLength: 2,
            },
        },
        placeholderChar: '_',
        autofix: true,
        lazy: false,
        overwrite: true,
    };

    /**
     * Maximum value of the date
     */
    public _maxdate: Date = null;

    /**
     * Minimum value of the date
     */
    public _mindate: Date = null;

    /**
     * Moment JS module instance
     */
    public moment = moment_['default'];

    /**
     * Resource key for validation message MaxDate at control
     */
    @Input() public validationmessagemaxdate: string = this.validationKeyService.ValidationErrorMaxDate;

    /**
     * Resource key for validation message MinDate at control
     */
    @Input() public validationmessagemindate: string = this.validationKeyService.ValidationErrorMinDate;

    /**
     * Resource key for validation message MaxDate in validation summary
     */
    @Input() public validationmessagesummarymaxdate: string = this.validationKeyService.ValidationErrorSummaryMaxDate;

    /**
     * Resource key for validation message MinDate in validation summary
     */
    @Input() public validationmessagesummarymindate: string = this.validationKeyService.ValidationErrorSummaryMinDate;

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
        cdRef: ChangeDetectorRef
    ) {
        super(formlayout, injector, elementRef, cdRef);
    }

    // #endregion Constructors

    // #region Public Getters And Setters

    /**
     * icon for date selector button
     */
    public get IconSelector(): string {
        return this.iconService.DateTimeComponentSelectorIcon;
    }

    /**
     * Max Date
     */
    @Input()
    public set maxdate(v: string | Date | null) {
        const date = this.moment(v, [this.DATEFORMAT], true);

        if (date.isValid()) {
            this._maxdate = super.getDate(date).toDate();
        } else {
            this._maxdate = null;
        }
    }

    /**
     * Min Date
     */
    @Input()
    public set mindate(v: string | Date | null) {
        const date = this.moment(v, [this.DATEFORMAT], true);

        if (date.isValid()) {
            this._mindate = super.getDate(date).toDate();
        } else {
            this._mindate = null;
        }
    }

    // #endregion Public Getters And Setters

    // #region Public Methods

    /**
     * Method returns date format from string
     */
    public GetDateTimeFormatString(): string {
        return this.DATEFORMAT;
    }

    /**
     * Method modifies the parsed value of the date
     */
    public ModifyParsedDateTimeValue(v: moment_.Moment): moment_.Moment {
        return v;
    }

    /**
     * Method returns the selected date
     */
    public dateselect(v: any) {
        if (v.date === null) {
            this.setValueString('');
        } else {
            this.value = this.moment(v.date).utc().toDate();
        }

        this._showselector = false;
    }

    /**
     * HostListener
     */
    @HostListener('document:click', ['$event.target'])
    /**
     * Click Event
     * @param targetElement The target element from the click event
     */
    public onClick(targetElement) {
        if (!this.pickercontainer) {
            return;
        }

        const clickedInsideContainer = this.pickercontainer.nativeElement.contains(targetElement);
        const clickedInsideReference = this.pickerbutton.nativeElement.contains(targetElement);
        if (!clickedInsideContainer && !clickedInsideReference) {
            this._showselector = false;
        }
    }

    /**
     * DateSelector is shown on click event
     */
    public showDateSelector(): void {
        /**
         * Trigger a touch event
         */
        this.onTouch();

        if (this._showselector) {
            this._showselector = false;
        } else {
            this._showselector = true;
        }
    }

    /**
     * Validator
     */
    public validateData(c: AbstractControl): ValidationErrors | null {
        let error: ValidationErrors | null = null;

        error = super.validateData(c);

        if (
            error === null &&
            c.value !== null &&
            c.value !== undefined &&
            c.value !== '' &&
            this._mindate !== undefined &&
            this._mindate !== null
        ) {
            error = Validation.minDate(
                this._mindate,
                this.validationmessagemindate,
                this.validationmessagesummarymindate
            )(c);
        }

        if (
            error === null &&
            c.value !== null &&
            c.value !== undefined &&
            c.value !== '' &&
            this._maxdate !== undefined &&
            this._maxdate !== null
        ) {
            error = Validation.maxDate(
                this._maxdate,
                this.validationmessagemaxdate,
                this.validationmessagesummarymaxdate
            )(c);
        }

        return error;
    }

    // #endregion Public Methods
}
