import { Directive, ElementRef, Injector, Input, OnInit } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import * as moment_ from 'moment';
import { Moment } from 'moment';
import { SacFormCommon } from '../controls/form/form';
import { Validation } from '../validation';
import { SacBaseModelControl } from './basemodelcontrol';
import { IDateTimeControl } from '../interfaces/idatetimecontrol';
/**
 * Moment
 */
const moment = moment_['default'];
/**
 * Base Klasse für Date/Time Controls
 */
@Directive()
export abstract class SacBaseDateTimeControl
  extends SacBaseModelControl<Date>
  implements OnInit
{
  // #region Constructor

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
    super(parent, injector);
  }

  // #endregion

  /**
   * Init Event
   */
  ngOnInit(): void {
    super.ngOnInit();
    this.SetDateTimeFormat();
  }

  //#region Abstract Methods

  /**
   * das property enthielt das Value als string. Default ist ''
   */
  protected _valueAsString = '';

  /**
   * Definiert das Control als Required
   */
  @Input() isrequired: boolean = false;

  /**
   * TextBox Placeholder
   */
  @Input() placeholder: string = null;

  /**
   * Resource Key für Validation Message Required bei Control
   */
  @Input() validationmessagerequired: string = 'VALIDATION_ERROR_REQUIRED';
  /**
   * Resource Key für Validation Message Required in Validation Summary
   */
  @Input() validationmessagerequiredsummary: string =
    'VALIDATION_ERROR_SUMMARY_REQUIRED';

  /**
   * Resource Key für Validation Message DateTimeFormat bei Control
   */
  @Input() validationmessagedatetimeformat: string =
    'VALIDATION_ERROR_DATETIMEFORMAT';
  /**
   * Resource Key für Validation Message DateTimeFormat in Validation Summary
   */
  @Input() validationmessagedatetimeformatsummary: string =
    'VALIDATION_ERROR_SUMMARY_DATETIMEFORMAT';

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
  @Input()
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

  // #region Private Methods

  private SetDateTimeFormat(): void {
    // HACK: Add addition property to FormControl. Can be fixed if solution for ticket: https://github.com/angular/angular/issues/19686
    if (this.ngControl?.control) {
      (
        this.ngControl.control as unknown as IDateTimeControl
      ).datetimeformatstring = this.GetDateTimeFormatString();
    } else if (this.ngControl) {
      (this.ngControl as unknown as IDateTimeControl).datetimeformatstring =
        this.GetDateTimeFormatString();
    }
  }

  // #endregion

  //#region Validation

  /**
   * Validator
   */
  validateData(c: AbstractControl): ValidationErrors | null {
    let error: ValidationErrors | null = null;

    error = Validation.isValidDate(
      this.validationmessagedatetimeformat,
      this.validationmessagedatetimeformatsummary
    )(c);

    if (this.isrequired) {
      error = Validation.required(
        this.validationmessagerequired,
        this.validationmessagerequiredsummary
      )(c);
    }

    return error;
  }

  //#endregion
}
