import {
  ElementRef,
  HostListener,
  Injector,
  Input,
  Directive,
} from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import * as moment_ from 'moment';
import * as IMask from 'imask';

// Import Moment.JS
import { Moment } from 'moment';
import { SacBaseDateTimeControl } from '../../common/basedatetimecontrol';
import { Validation } from '../../validation';
import { SacFormCommon } from '../form/form';
/**
 * Moment
 */
const moment = moment_['default'];

/**
 * Komponente für SacDateCommon. Extends SacBaseDateTimeControl
 */
@Directive()
export class SacDateCommon extends SacBaseDateTimeControl {
  // #region Constants

  /**
   * Format des Datums
   */
  readonly DATEFORMAT: string = 'DD.MM.YYYY';

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
    },
    placeholderChar: '_',
    autofix: true,
    lazy: false,
    overwrite: true,
  };

  // #endregion

  // #region Properties

  /**
   * Min Date
   */
  @Input()
  set mindate(v: string | Date | null) {
    const date = moment(v, [this.DATEFORMAT], true);

    if (date.isValid()) {
      this._mindate = super.getDate(date).toDate();
    } else {
      this._mindate = null;
    }
  }
  /**
   * Min Date
   */
  _mindate: Date = null;

  /**
   * Min Date
   */
  @Input()
  set maxdate(v: string | Date | null) {
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
  _maxdate: Date = null;

  /**
   * Definiert ob der Date Selector angezeigt wird
   */
  _showselector: boolean = false;

  /**
   * Resource Key für Validation Message MinDate bei Control
   */
  @Input() validationmessagemindate: string = 'VALIDATION_ERROR_MINDATE';
  /**
   * Resource Key für Validation Message MinDate in Validation Summary
   */
  @Input() validationmessagesummarymindate: string =
    'VALIDATION_ERROR_SUMMARY_MINDATE';

  /**
   * Resource Key für Validation Message MaxDate bei Control
   */
  @Input() validationmessagemaxdate: string = 'VALIDATION_ERROR_MAXDATE';
  /**
   * Resource Key für Validation Message MaxDate in Validation Summary
   */
  @Input() validationmessagesummarymaxdate: string =
    'VALIDATION_ERROR_SUMMARY_MAXDATE';

  // #endregion

  /**
   * Konstruktor
   * @param parent typ SacFormCommon
   * @param injector typ Injector
   * @param _elementRef typ ElementRef
   */
  constructor(
    parent: SacFormCommon,
    injector: Injector,
    protected _elementRef: ElementRef
  ) {
    super(parent, injector, _elementRef);
  }

  // #region Abstract Methods

  /**
   * Methode ergibt Datum-Format vom String
   */
  GetDateTimeFormatString(): string {
    return this.DATEFORMAT;
  }

  /**
   * Methode ergibt Datum - Moment
   */
  ModifyParsedDateTimeValue(v: Moment): Moment {
    return v;
  }

  // #endregion

  // #region Date Selector

  /**
   * Zeigt Date Selector an
   */
  showDateSelector(): void {
    // Touch Event auslösen
    this.onTouch();

    if (this._showselector) {
      this._showselector = false;
    } else {
      this._showselector = true;
    }
  }

  /**
   * HostListener
   */
  @HostListener('document:click', ['$event.target'])
  /**
   * Click Event
   */
  public onClick(targetElement) {
    const clickedInside =
      this._elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this._showselector = false;
    }
  }

  /**
   * Date Selector
   */
  dateselect(v: any) {
    if (v.date === null) {
      this.setValueString('');
    } else {
      this.value = moment(v.date).utc().toDate();
    }

    this._showselector = false;
  }

  // #endregion

  /**
   * Validator
   */
  validateData(c: AbstractControl): ValidationErrors | null {
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
}
