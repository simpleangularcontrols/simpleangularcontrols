import { NgBaseModelControl } from "./basemodelcontrol";
import { NgFormular } from "../controls";
import { ElementRef, Input } from "@angular/core";
import * as moment from 'moment';
import { AbstractControl, ValidationErrors } from "@angular/forms";
import { Validation } from "../validation";
import { Moment } from "moment";

export abstract class NgBaseDateTimeControl extends NgBaseModelControl<Date> implements IDateTimeControl {

  value: any;

  // #region Constructor

  constructor(parent: NgFormular, protected _elementRef: ElementRef) {
    super(parent);
  }

  // #endregion

  //#region Abstract Methods

  abstract GetDateTimeFormatString(): string;
  abstract ModifyParsedDateTimeValue(v: Moment): Moment;

  //#endregion

  //#region Variablen

  protected _valueAsString = '';

  //#endregion


  // #region Properties

  // Definiert das Control als Required
  @Input("isrequired") _isrequired: boolean = false;
  // TextBox Placeholder
  @Input("placeholder") _placeholder: string = null;

  //#endregion

  //#region ValueControlAccess

  // Overwrite WriteValue to Set correct Date Object
  writeValue(value: Date | string) {
    if (value === '' || value === null || value === undefined) {
      this._value = null;
    } else {
      this._value = moment.utc(value).toDate();
    }

    super.writeValue(this._value);
  }

  //#endregion


  // #region Value as String

  @Input("valuestring")
  set valuestring(v: string) {
    this._valueAsString = v;
    let date: Moment = moment(v, [this.GetDateTimeFormatString()], true);

    date = this.ModifyParsedDateTimeValue(date).utc();

    if (date.isValid()) {
      this.value = date.toDate();
    }
    else {
      this.value = null;
    }
  }

  get valuestring(): string {
    if (this.value === null)
      return this._valueAsString;
    else {
      var date = moment.utc(this.value);
      return date.local().format(this.GetDateTimeFormatString());
    }
  }

  setValueString(v: string) {
    this.valuestring = v;
  }

  // #endregion

  //#region Validation

  IsDateValid(): boolean {
    // NULL ist gültig
    if (this._valueAsString === null || this._valueAsString === undefined || this._valueAsString === '')
      return true;

    let date: Moment = moment(this.valuestring, [this.GetDateTimeFormatString()], true);
    date = this.ModifyParsedDateTimeValue(date).utc();

    return date.isValid();
  }

  validateData(c: AbstractControl): ValidationErrors | null {
    let error: ValidationErrors | null = null;

    error = Validation.isValidDate(this, this._label);

    if (this._isrequired) {
      error = Validation.required(c, this._label);
    }

    return error;
  }

  //#endregion
}
