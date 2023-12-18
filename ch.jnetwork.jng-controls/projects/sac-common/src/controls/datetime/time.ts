import { ElementRef, HostListener, Injector, Input, Directive } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import * as moment_ from 'moment';
import * as IMask from 'imask';
// Import Moment.JS
import { Moment } from 'moment';
import { NgBaseDateTimeControl } from '../../common/basedatetimecontrol';
import { Validation } from '../../validation';
import { NgFormularCommon } from '../form/form';

/**
 * Moment
 */
const moment = moment_["default"];

/**
 * Komponente für NgTimeCommon. Extends NgBaseDateTimeControl
 */
@Directive()
export class NgTimeCommon extends NgBaseDateTimeControl {

  // #region Constants

  /**
   * Format des Datums
   */
  readonly TIMEFORMAT: string = 'HH:mm';
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
      }
    },
    placeholderChar: '_',
    autofix: true,
    lazy: false,
    overwrite: true
  };

  // #endregion

  // #region Properties

  /**
   * Min Time
   */
  @Input()
  set mintime(v: string | Date | null) {
    let time = moment(v, [this.TIMEFORMAT], true);

    time = this.ModifyParsedDateTimeValue(time);

    if (time.isValid()) {
      this._mintime = super.getDate(time).toDate();
    } else {
      this._mintime = null;
    }
  }
  /**
   * Min Time
   */
  _mintime: Date = null;

  /**
   * Max Time
   */
  @Input()
  set maxtime(v: string | Date | null) {
    let time = moment(v, [this.TIMEFORMAT], true);

    time = this.ModifyParsedDateTimeValue(time);

    if (time.isValid()) {
      this._maxtime = super.getDate(time).toDate();
    } else {
      this._maxtime = null;
    }
  }
  /**
   * Max Time
   */
  _maxtime: Date = null;

  /**
   * Definiert ob der Date Selector angezeigt wird
   */
  _showselector: boolean = false;

  /**
   * Resource Key für Validation Message MinTime bei Control
   */
  @Input() validationmessagemintime: string = 'VALIDATION_ERROR_MINTIME';
  /**
   * Resource Key für Validation Message MinTime in Validation Summary
   */
  @Input() validationmessagesummarymintime: string = 'VALIDATION_ERROR_SUMMARY_MINTIME';

  /**
   * Resource Key für Validation Message MinTime bei Control
   */
  @Input() validationmessagemaxtime: string = 'VALIDATION_ERROR_MAXTIME';
  /**
   * Resource Key für Validation Message MinTime in Validation Summary
   */
  @Input() validationmessagesummarymaxtime: string = 'VALIDATION_ERROR_SUMMARY_MAXTIME';

  // #endregion

  /**
   * Konstruktor
   * @param parent typ NgFormularCommon
   * @param injector typ Injector
   * @param _elementRef typ ElementRef
   */
  constructor(parent: NgFormularCommon, injector: Injector, protected _elementRef: ElementRef) {
    super(parent, injector, _elementRef);
  }

  // #region Abstract Methods

  /**
   * Methode ergibt Datum-Format vom String
   */
  GetDateTimeFormatString(): string {
    return this.TIMEFORMAT;
  }

  /**
   * Methode ergibt Datum - Moment
   */
  ModifyParsedDateTimeValue(v: Moment): Moment {
    v.date(1);
    v.month(0);
    v.year(1900);
    return v;
  }

  // #endregion

  // #region Time Selector

  /**
   * Zeigt Date Selector an
   */
  showTimeSelector(): void {
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
    const clickedInside = this._elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this._showselector = false;
    }
  }

  /**
   * Time Selector
   */
  timeselect(v: any) {
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

    if (error === null && c.value !== null && c.value !== undefined && c.value !== '' && this._mintime !== undefined && this._mintime !== null) {
      error = Validation.minTime(this, this._mintime, this.label, this.validationmessagemintime, this.validationmessagesummarymintime);
    }

    if (error === null && c.value !== null && c.value !== undefined && c.value !== '' && this._maxtime !== undefined && this._maxtime !== null) {
      error = Validation.maxTime(this, this._maxtime, this.label, this.validationmessagemaxtime, this.validationmessagesummarymaxtime);
    }

    return error;
  }

}
