import { Input,  HostListener } from "@angular/core";
import { AbstractControl, ValidationErrors} from "@angular/forms";
import { Validation } from "../../validation";
import { NgBaseDateTimeControl } from "../../common/basedatetimecontrol";
// Import Moment.JS
import { Moment } from 'moment';
import * as moment_ from 'moment';
const moment = moment_;


export class NgTimeCommon extends NgBaseDateTimeControl {
  
  // #region Constants

  readonly TIMEFORMAT: string = "HH:mm";
  readonly _mask = { mask: [/[0-2]/, /\d/, ':', /[0-5]/, /\d/], guide: true, placeholderChar: '_', keepCharPositions: true };

  // #endregion

  // #region Abstract Methods

  GetDateTimeFormatString(): string {
    return this.TIMEFORMAT;
  }

  ModifyParsedDateTimeValue(v: Moment): Moment {
    v.date(1);
    v.month(0);
    v.year(1900);
    return v;
  }

  // #endregion
  
  // #region Properties

  // Min Time
  @Input("mintime")
  set mintime(v: string | Date | null) {
    var time = moment(v, [this.TIMEFORMAT], true);

    time = this.ModifyParsedDateTimeValue(time);

    if (time.isValid()) {
      this._mintime = time.utc().toDate();
    } else {
      this._mintime = null;
    }
  }
  _mintime: Date = null;

  // Max Time
  @Input("maxtime")
  set maxtime(v: string | Date | null) {
    var time = moment(v, [this.TIMEFORMAT], true);

    time = this.ModifyParsedDateTimeValue(time);

    if (time.isValid()) {
      this._maxtime = time.utc().toDate();
    } else {
      this._maxtime = null;
    }
  }
  _maxtime: Date = null;

  // Definiert ob der Date Selector angezeigt wird
  _showselector: boolean = false;

  // #endregion
   
  // #region Time Selector

  showTimeSelector(): void {
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


  timeselect(v: any) {
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

    if (error === null && c.value !== null && c.value !== undefined && c.value !== '' && this._mintime !== undefined && this._mintime !== null) {
      error = Validation.minTime(this, this._mintime, this._label);
    }

    if (error === null && c.value !== null && c.value !== undefined && c.value !== '' && this._maxtime !== undefined && this._maxtime !== null) {
      error = Validation.maxTime(this, this._maxtime, this._label);
    }

    return error;
  }

}
