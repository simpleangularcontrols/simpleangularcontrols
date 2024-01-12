import { Directive, ElementRef, Injector, Input, OnInit } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import * as moment_ from 'moment';
import { Moment } from 'moment';
import { SacFormLayoutCommon } from '../controls/layout/formlayout';
import { IDateTimeControl } from '../interfaces/idatetimecontrol';
import { Validation } from '../validation';
import { SacBaseModelControl } from './basemodelcontrol';
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
  // #region Properties

  /**
   * das property enthielt das Value als string. Default ist ''
   */
  protected _valueAsString = '';

  /**
   * Definiert das Control als Required
   */
  @Input() public isrequired: boolean = false;
  /**
   * TextBox Placeholder
   */
  @Input() public placeholder: string = null;
  /**
   * Resource Key für Validation Message DateTimeFormat bei Control
   */
  @Input() public validationmessagedatetimeformat: string =
    'VALIDATION_ERROR_DATETIMEFORMAT';
  /**
   * Resource Key für Validation Message DateTimeFormat in Validation Summary
   */
  @Input() public validationmessagedatetimeformatsummary: string =
    'VALIDATION_ERROR_SUMMARY_DATETIMEFORMAT';
  /**
   * Resource Key für Validation Message Required bei Control
   */
  @Input() public validationmessagerequired: string =
    'VALIDATION_ERROR_REQUIRED';
  /**
   * Resource Key für Validation Message Required in Validation Summary
   */
  @Input() public validationmessagerequiredsummary: string =
    'VALIDATION_ERROR_SUMMARY_REQUIRED';

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
    super(formlayout, injector);
  }

  // #endregion Constructors

  // #region Public Getters And Setters

  /**
   * Das Input bekommt das value von typ string
   */
  @Input()
  public set valuestring(v: string) {
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
  public get valuestring(): string {
    if (this.value === null) {
      return this._valueAsString;
    } else {
      const date = moment.utc(this.value);
      return date.local().format(this.GetDateTimeFormatString());
    }
  }

  // #endregion Public Getters And Setters

  // #region Public Methods

  /**
   * JSON Date String in ein UTC DateTime Object konvertieren, welches vom Control verwendete werden kann
   */
  public getDate(timestamp) {
    const date = new Date(timestamp);
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth();
    const day = date.getUTCDate();
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const seconds = date.getUTCSeconds();

    return moment(Date.UTC(year, month, day, hours, minutes, seconds));
  }

  /**
   * Init Event
   */
  public ngOnInit(): void {
    super.ngOnInit();
    this.SetDateTimeFormat();
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

  // #region Public Abstract Methods

  /**
   * Die methode returns dateTime in string
   */
  public abstract GetDateTimeFormatString(): string;
  /**
   * Die methode modifiziert das eingegebene Value von typ Moment
   */
  public abstract ModifyParsedDateTimeValue(v: Moment): Moment;

  // #endregion Public Abstract Methods

  // #region Private Methods

  private SetDateTimeFormat(): void {
    // HACK: Add addition property to FormControl. Can be fixed if solution for ticket: https://github.com/angular/angular/issues/19686
    if (this.ngControl) {
      (this.ngControl as unknown as IDateTimeControl).datetimeformatstring =
        this.GetDateTimeFormatString();
    }
  }

  // #endregion Private Methods
}
