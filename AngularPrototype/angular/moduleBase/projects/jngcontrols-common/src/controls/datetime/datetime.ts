import {  Input,  HostListener } from "@angular/core";
import {  AbstractControl, ValidationErrors } from "@angular/forms";
import { Validation } from "../../validation";
import { NgBaseDateTimeControl } from "../../common/basedatetimecontrol";
// Import Moment.JS
import { Moment } from 'moment';
import * as moment_ from 'moment';

/**
 * Moment
 */
const moment = moment_;


export class NgDateTimeCommon extends NgBaseDateTimeControl {

  // #region Constants

  /**
   * Format des Datums
   */
  readonly DATEFORMAT: string = "DD.MM.YYYY HH:mm";
  /**
   * Maske
   */
  readonly _mask = { mask: [/\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/, ' ', /[0-2]/, /\d/, ':', /[0-5]/, /\d/], guide: true, placeholderChar: '_', keepCharPositions: true };

  // #endregion

  // #region Abstract Methods

  /**
   * Methode ergibt Datum-Format vom String
   */
  GetDateTimeFormatString(): string {
    return this.DATEFORMAT;
  }

  /**
   * Methode modifiziert den parsed Wert des Datums
   */
  ModifyParsedDateTimeValue(v: Moment): Moment {
    return v;
  }

  // #endregion

  // #region Properties

  /**
   * Min Date
   */
  @Input("mindate")
  set mindate(v: string | Date | null) {
    var date = moment(v, [this.DATEFORMAT], true);

    if (date.isValid()) {
      this._mindate = date.utc().toDate();
    } else {
      this._mindate = null;
    }
  }
  /**
   * Minimaler Wert des Datums
   */
  _mindate: Date = null;

  /**
   * Max Date
   */
  @Input("maxdate")
  set maxdate(v: string | Date | null) {
    var date = moment(v, [this.DATEFORMAT], true);

    if (date.isValid()) {
      this._maxdate = date.utc().toDate();
    } else {
      this._maxdate = null;
    }
  }
  /**
   * Maximaler Wert des Datums
   */
  _maxdate: Date = null;

  /**
   * Definiert ob der Date Selector angezeigt wird
   */
  _showselector: boolean = false;

  // #endregion

  // #region Date Selector

  /**
   * DateSelector wird beim Click-Event angezeigt
   */
  showDateSelector(): void {
    /**
     * Touch Event auslösen
     */
    this.onTouch();

    if (this._showselector)
      this._showselector = false;
    else
      this._showselector = true;
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
    if (!clickedInside)
      this._showselector = false;
  }

  /**
   * Methode ergibt das selektierte Datum
   */
  dateselect(v: any) {
    if (v.date === null) {
      this.setValueString("");
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

    if (error === null && c.value !== null && c.value !== undefined && c.value !== '' && this._mindate !== undefined && this._mindate !== null) {
      error = Validation.minDate(this, this._mindate, this._label);
    }

    if (error === null && c.value !== null && c.value !== undefined && c.value !== '' && this._maxdate !== undefined && this._maxdate !== null) {
      error = Validation.maxDate(this, this._maxdate, this._label);
    }

    return error;
  }

}
