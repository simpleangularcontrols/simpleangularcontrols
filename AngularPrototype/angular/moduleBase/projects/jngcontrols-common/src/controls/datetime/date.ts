import { Input,  HostListener } from "@angular/core";
import { AbstractControl, ValidationErrors} from "@angular/forms";
// import { NgFormular } from "../form/form";
import { Validation } from "../../validation";
import { NgBaseDateTimeControl } from "../../common/basedatetimecontrol";
// Import Moment.JS
import { Moment } from 'moment';
import * as moment_ from 'moment';
const moment = moment_;


export class NgDateCommon extends NgBaseDateTimeControl {

  // #region Constants

  readonly DATEFORMAT: string = "DD.MM.YYYY";
  readonly _mask = { mask: [/\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/,], guide: true, placeholderChar: '_', keepCharPositions: true };

  // #endregion

  // #region Abstract Methods

  GetDateTimeFormatString(): string {
    return this.DATEFORMAT;
  }

  ModifyParsedDateTimeValue(v: Moment): Moment {
    return v;
  }

  // #endregion

  // #region Properties

  // Min Date
  @Input("mindate")
  set mindate(v: string | Date | null) {
    var date = moment(v, [this.DATEFORMAT], true);

    if (date.isValid()) {
      this._mindate = date.utc().toDate();
    } else {
      this._mindate = null;
    }
  }
  _mindate: Date = null;

  // Max Date
  @Input("maxdate")
  set maxdate(v: string | Date | null) {
    var date = moment(v, [this.DATEFORMAT], true);

    if (date.isValid()) {
      this._maxdate = date.utc().toDate();
    } else {
      this._maxdate = null;
    }
  }
  _maxdate: Date = null;

  // Definiert ob der Date Selector angezeigt wird
  _showselector: boolean = false;

  // #endregion

  // #region Date Selector

  showDateSelector(): void {
    // Touch Event auslösen
    this.onTouch();

    if (this._showselector)
      this._showselector = false;
    else
      this._showselector = true;
  }

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement) {
    const clickedInside = this._elementRef.nativeElement.contains(targetElement);
    if (!clickedInside)
      this._showselector = false;
  }


  dateselect(v: any) {
    if (v.date === null) {
      this.setValueString("");
    } else {
      this.value = moment(v.date).utc().toDate();
    }

    this._showselector = false;
  }

  // #endregion

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
