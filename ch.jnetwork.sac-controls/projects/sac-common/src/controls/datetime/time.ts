import {
  Directive,
  ElementRef,
  HostListener,
  Injector,
  Input,
} from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import * as IMask from 'imask';
import * as moment_ from 'moment';
// Import Moment.JS
import { Moment } from 'moment';
import { SacBaseDateTimeControl } from '../../common/basedatetimecontrol';
import { Validation } from '../../validation';
import { SacFormLayoutCommon } from '../layout/formlayout';

/**
 * Moment
 */
const moment = moment_['default'];

/**
 * Komponente für SacTimeCommon. Extends SacBaseDateTimeControl
 */
@Directive()
export class SacTimeCommon extends SacBaseDateTimeControl {
  // #region Properties

  /**
   * Format des Datums
   */
  public readonly TIMEFORMAT: string = 'HH:mm';
  /**
   * Maske
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
   * Resource Key für Validation Message MinTime bei Control
   */
  @Input() public validationmessagemaxtime: string =
    this.validationKeyService.ValidationErrorMaxTime;
  /**
   * Resource Key für Validation Message MinTime bei Control
   */
  @Input() public validationmessagemintime: string =
    this.validationKeyService.ValidationErrorMinTime;
  /**
   * Resource Key für Validation Message MinTime in Validation Summary
   */
  @Input() public validationmessagesummarymaxtime: string =
    this.validationKeyService.ValidationErrorSummaryMaxTime;
  /**
   * Resource Key für Validation Message MinTime in Validation Summary
   */
  @Input() public validationmessagesummarymintime: string =
    this.validationKeyService.ValidationErrorSummaryMinTime;

  /**
   * Max Time
   */
  public _maxtime: Date = null;
  /**
   * Min Time
   */
  public _mintime: Date = null;
  /**
   * Definiert ob der Date Selector angezeigt wird
   */
  public _showselector: boolean = false;

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
    protected elementRef: ElementRef
  ) {
    super(formlayout, injector, elementRef);
  }

  // #endregion Constructors

  // #region Public Getters And Setters

  /**
   * Max Time
   */
  @Input()
  public set maxtime(v: string | Date | null) {
    let time = moment(v, [this.TIMEFORMAT], true);

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
    let time = moment(v, [this.TIMEFORMAT], true);

    time = this.ModifyParsedDateTimeValue(time);

    if (time.isValid()) {
      this._mintime = super.getDate(time).toDate();
    } else {
      this._mintime = null;
    }
  }

  /**
   * icon for date selector button
   */
  public get IconSelector(): string {
    return this.iconService.TimeComponentSelectorIcon;
  }

  // #endregion Public Getters And Setters

  // #region Public Methods

  /**
   * HostListener
   */
  @HostListener('document:click', ['$event.target'])
  /**
   * Click Event
   */
  public onClick(targetElement) {
    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this._showselector = false;
    }
  }

  /**
   * Methode ergibt Datum-Format vom String
   */
  public GetDateTimeFormatString(): string {
    return this.TIMEFORMAT;
  }

  /**
   * Methode ergibt Datum - Moment
   */
  public ModifyParsedDateTimeValue(v: Moment): Moment {
    v.date(1);
    v.month(0);
    v.year(1900);
    return v;
  }

  /**
   * Zeigt Date Selector an
   */
  public showTimeSelector(): void {
    // Touch Event auslösen
    this.onTouch();

    if (this._showselector) {
      this._showselector = false;
    } else {
      this._showselector = true;
    }
  }

  /**
   * Time Selector
   */
  public timeselect(v: any) {
    if (v.date === null) {
      this.setValueString('');
    } else {
      this.value = moment(v.date).utc().toDate();
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
