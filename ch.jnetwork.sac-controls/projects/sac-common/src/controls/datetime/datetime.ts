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
 * Komponente für SacDateTimeCommon. Extends SacBaseDateTimeControl
 */
@Directive()
export class SacDateTimeCommon extends SacBaseDateTimeControl {
  // #region Properties

  /**
   * Format des Datums
   */
  public readonly DATEFORMAT: string = 'DD.MM.YYYY HH:mm';
  /**
   * Maske
   */
  /**
   * Maske
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
   * Resource Key für Validation Message MaxDate bei Control
   */
  @Input() public validationmessagemaxdate: string =
    this.validationKeyService.ValidationErrorMaxDate;
  /**
   * Resource Key für Validation Message MinDate bei Control
   */
  @Input() public validationmessagemindate: string =
    this.validationKeyService.ValidationErrorMinDate;
  /**
   * Resource Key für Validation Message MaxDate in Validation Summary
   */
  @Input() public validationmessagesummarymaxdate: string =
    this.validationKeyService.ValidationErrorSummaryMaxDate;
  /**
   * Resource Key für Validation Message MinDate in Validation Summary
   */
  @Input() public validationmessagesummarymindate: string =
    this.validationKeyService.ValidationErrorSummaryMinDate;

  /**
   * Maximaler Wert des Datums
   */
  public _maxdate: Date = null;
  /**
   * Minimaler Wert des Datums
   */
  public _mindate: Date = null;
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
   * Max Date
   */
  @Input()
  public set maxdate(v: string | Date | null) {
    const date = moment(v, [this.DATEFORMAT], true);

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
    const date = moment(v, [this.DATEFORMAT], true);

    if (date.isValid()) {
      this._mindate = super.getDate(date).toDate();
    } else {
      this._mindate = null;
    }
  }

  /**
   * icon for date selector button
   */
  public get IconSelector(): string {
    return this.iconService.DateTimeComponentSelectorIcon;
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
    return this.DATEFORMAT;
  }

  /**
   * Methode modifiziert den parsed Wert des Datums
   */
  public ModifyParsedDateTimeValue(v: Moment): Moment {
    return v;
  }

  /**
   * Methode ergibt das selektierte Datum
   */
  public dateselect(v: any) {
    if (v.date === null) {
      this.setValueString('');
    } else {
      this.value = moment(v.date).utc().toDate();
    }

    this._showselector = false;
  }

  /**
   * DateSelector wird beim Click-Event angezeigt
   */
  public showDateSelector(): void {
    /**
     * Touch Event auslösen
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
