import { SacBaseDateTimeControl } from '../../common/basedatetimecontrol';
import { Validation } from '../../validation';
import { SacFormLayoutCommon } from '../layout/formlayout';
import { ChangeDetectorRef, Directive, ElementRef, HostListener, Injector, Input } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import * as IMask from 'imask';
import * as moment_ from 'moment';

/**
 * Component for SacTimeCommon. Extends SacBaseDateTimeControl
 */
@Directive()
export class SacTimeCommon extends SacBaseDateTimeControl {
    // #region Properties

    /**
     * Date format
     */
    public readonly TIMEFORMAT: string = 'HH:mm';

    /**
     * Mask
     */
    public readonly imaskDate = {
        mask: this.TIMEFORMAT,
        blocks: {
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
     * Max Time
     */
    public _maxtime: Date = null;

    /**
     * Min Time
     */
    public _mintime: Date = null;

    /**
     * Moment JS module instance
     */
    public moment = moment_['default'];

    /**
     * Resource Key for Validation Message MinTime at Control
     */
    @Input() public validationmessagemaxtime: string = this.validationKeyService.ValidationErrorMaxTime;

    /**
     * Resource Key for Validation Message MinTime at Control
     */
    @Input() public validationmessagemintime: string = this.validationKeyService.ValidationErrorMinTime;

    /**
     * Resource Key for Validation Message MinTime in Validation Summary
     */
    @Input() public validationmessagesummarymaxtime: string = this.validationKeyService.ValidationErrorSummaryMaxTime;

    /**
     * Resource Key for Validation Message MinTime in Validation Summary
     */
    @Input() public validationmessagesummarymintime: string = this.validationKeyService.ValidationErrorSummaryMinTime;

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
        return this.iconService.TimeComponentSelectorIcon;
    }

    /**
     * Max Time
     */
    @Input()
    public set maxtime(v: string | Date | null) {
        let time = this.moment(v, [this.TIMEFORMAT], true);

        time = this.ModifyParsedDateTimeValue(time);

        if (time.isValid()) {
            this._maxtime = super.getDate(time).toDate();
        } else {
            this._maxtime = null;
        }
    }

    /**
     * Min Time
     */
    @Input()
    public set mintime(v: string | Date | null) {
        let time = this.moment(v, [this.TIMEFORMAT], true);

        time = this.ModifyParsedDateTimeValue(time);

        if (time.isValid()) {
            this._mintime = super.getDate(time).toDate();
        } else {
            this._mintime = null;
        }
    }

    // #endregion Public Getters And Setters

    // #region Public Methods

    /**
     * Method returns date format from string
     */
    public GetDateTimeFormatString(): string {
        return this.TIMEFORMAT;
    }

    /**
     * Method returns date - moment
     */
    public ModifyParsedDateTimeValue(v: moment_.Moment): moment_.Moment {
        v.date(1);
        v.month(0);
        v.year(1900);
        return v;
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
     * Shows time selector
     */
    public showTimeSelector(): void {
        // Trigger a touch event
        this.onTouch();

        if (this._showselector) {
            this._showselector = false;
        } else {
            this._showselector = true;
        }
    }

    /**
     * Time Selector
     * @param v Selected time value object
     */
    public timeselect(v: any) {
        if (v.date === null) {
            this.setValueString('');
        } else {
            this.value = this.moment(v.date).utc().toDate();
        }

        this._showselector = false;
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
            this._mintime !== undefined &&
            this._mintime !== null
        ) {
            error = Validation.minTime(
                this._mintime,
                this.validationmessagemintime,
                this.validationmessagesummarymintime
            )(c);
        }

        if (
            error === null &&
            c.value !== null &&
            c.value !== undefined &&
            c.value !== '' &&
            this._maxtime !== undefined &&
            this._maxtime !== null
        ) {
            error = Validation.maxTime(
                this._maxtime,
                this.validationmessagemaxtime,
                this.validationmessagesummarymaxtime
            )(c);
        }

        return error;
    }

    // #endregion Public Methods
}
