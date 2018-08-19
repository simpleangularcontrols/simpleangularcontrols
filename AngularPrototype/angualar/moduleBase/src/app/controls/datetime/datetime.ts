import { Component, Input, Output, EventEmitter, forwardRef, ElementRef, HostListener } from "@angular/core";
import { NG_VALUE_ACCESSOR, ControlContainer, AbstractControl, ValidationErrors, Validators, NG_VALIDATORS } from "@angular/forms";
import { NgFormular } from "../form/form";
import * as moment from 'moment';
import { Validation } from "../../validation";
import { NgBaseDateTimeControl } from "../../base/basedatetimecontrol";


@Component({
  selector: 'ngDateTime',
  templateUrl: './datetime.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: forwardRef(() => NgDateTime) },
    { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => NgDateTime) }
  ],
  // View Provider, damit das Formular an das Control gebunden werden kann
  viewProviders: [{ provide: ControlContainer, useExisting: NgFormular }]
})

export class NgDateTime extends NgBaseDateTimeControl {

  // #region Constants

  readonly DATEFORMAT: string = "DD.MM.YYYY HH:mm";
  readonly _mask = { mask: [/\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/, ' ', /[0-2]/, /\d/, ':', /[0-5]/, /\d/], guide: true, placeholderChar: '_', keepCharPositions: true };

  // #endregion

  // #region Abstract Methods

  GetDateTimeFormatString(): string {
    return this.DATEFORMAT;
  }

  ModifyParsedDateTimeValue(v: moment.Moment): moment.Moment {
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
