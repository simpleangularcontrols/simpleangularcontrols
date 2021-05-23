import { Directive, ElementRef, Injector, Input } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import * as moment_ from 'moment';
import { Moment } from 'moment';
import { NgFormularCommon } from '../controls/form/form';
import { IDateTimeControl } from '../interfaces/idatetimecontrol';
import { Validation } from '../validation';
import { NgBaseModelControl } from './basemodelcontrol';
/**
 * Moment
 */
const moment = moment_;
/**
 * Base Klasse für Date/Time Controls
 */
@Directive()
export abstract class NgBaseDateTimeControl extends NgBaseModelControl<Date> implements IDateTimeControl {

  // #region Constructor

  /**
   * Konstruktor
   * @param parent typ NgFormularCommon
   * @param injector typ Injector
   * @param _elementRef typ ElementRef
   */
  constructor(parent: NgFormularCommon, injector: Injector, protected _elementRef: ElementRef) {
    super(parent, injector);
  }

  // #endregion

  //#region Abstract Methods

  /**
   * das property enthielt das Value als string. Default ist ''
   */
  protected _valueAsString = '';

  /**
   * Definiert das Control als Required
   */
  @Input('isrequired') _isrequired: boolean = false;

  /**
   * TextBox Placeholder
   */
  @Input('placeholder') _placeholder: string = null;

  /**
   * Resource Key für Validation Message Required bei Control
   */
  @Input('validationmessagerequired') _validationMessageRequired: string = 'VALIDATION_ERROR_REQUIRED';
  /**
   * Resource Key für Validation Message Required in Validation Summary
   */
  @Input('validationmessagesummaryrequired') _validationMessageRequiredSummary: string = 'VALIDATION_ERROR_SUMMARY_REQUIRED';

  /**
   * Resource Key für Validation Message DateTimeFormat bei Control
   */
  @Input('validationmessagedatetimeformat') _validationMessageDateTimeFormat: string = 'VALIDATION_ERROR_DATETIMEFORMAT';
  /**
   * Resource Key für Validation Message DateTimeFormat in Validation Summary
   */
  @Input('validationmessagesummarydatetimeformat') _validationMessageDateTimeFormatSummary: string = 'VALIDATION_ERROR_SUMMARY_DATETIMEFORMAT';

  /**
   * Die methode returns dateTime in string
   */
  abstract GetDateTimeFormatString(): string;

  /**
   * Die methode modifiziert das eingegebene Value von typ Moment
   */
  abstract ModifyParsedDateTimeValue(v: Moment): Moment;

  //#endregion

  //#region Variablen

  //#endregion

  // #region Properties

  //#endregion

  //#region ValueControlAccess

  /**
   * Overwrite WriteValue to Set correct Date Object
   */
  writeValue(value: Date | string) {
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

  /**
  * JSON Date String in ein UTC DateTime Object konvertieren, welches vom Control verwendete werden kann
  */
  getDate(timestamp) {
    const date = new Date(timestamp);
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth();
    const day = date.getUTCDate();
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const seconds = date.getUTCSeconds();

    return moment(Date.UTC(year, month, day, hours, minutes, seconds));
  }

  //#endregion

  // #region Value as String

  /**
   * Das Input bekommt das value von typ string
   */
  @Input('valuestring')
  set valuestring(v: string) {
    this._valueAsString = v;
    let date: Moment = moment(v, [this.GetDateTimeFormatString()], true);

    date = this.ModifyParsedDateTimeValue(date).utc();

    if (date.isValid()) {
      this.value = date.toDate();
    } else {
      this.value = null;
    }
  }

  /**
   * getter für valuestring
   */
  get valuestring(): string {
    if (this.value === null) {
      return this._valueAsString;
    } else {
      const date = moment.utc(this.value);
      return date.local().format(this.GetDateTimeFormatString());
    }
  }

  /**
   * setzt das value von typ string zu property valuestring
   */
  setValueString(v: string) {
    this.valuestring = v;
  }

  // #endregion

  //#region Validation

  /**
   * prüft ob das Date ist valid
   */
  IsDateValid(): boolean {
    // NULL ist gültig
    if (this._valueAsString === null || this._valueAsString === undefined || this._valueAsString === '') {
      return true;
    }

    let date: Moment = moment(this.valuestring, [this.GetDateTimeFormatString()], true);
    date = this.ModifyParsedDateTimeValue(date).utc();

    return date.isValid();
  }

  /**
   * Validator
   */
  validateData(c: AbstractControl): ValidationErrors | null {
    let error: ValidationErrors | null = null;

    error = Validation.isValidDate(this, this._label, this._validationMessageDateTimeFormat, this._validationMessageDateTimeFormatSummary);

    if (this._isrequired) {
      error = Validation.required(c, this._label, this._validationMessageRequired, this._validationMessageRequiredSummary);
    }

    return error;
  }

  //#endregion
}
