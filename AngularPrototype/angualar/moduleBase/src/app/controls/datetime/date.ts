import { Component, Input, Output, EventEmitter, forwardRef, ElementRef, HostListener } from "@angular/core";
import { NG_VALUE_ACCESSOR, ControlContainer } from "@angular/forms";
import { NgFormular } from "../form/form";
import { NgBaseModelControl } from "../../base/basemodelcontrol";
import * as moment from 'moment';


@Component({
  selector: 'ngDate',
  templateUrl: './date.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => NgDate)
    }
  ],
  // View Provider, damit das Formular an das Control gebunden werden kann
  viewProviders: [{ provide: ControlContainer, useExisting: NgFormular }]
})

export class NgDate extends NgBaseModelControl<Date> {

  // #region Constants

  readonly DATEFORMAT: string = "DD.MM.YYYY";

  // #endregion

  // #region Constructor

  constructor(parent: NgFormular, private _elementRef: ElementRef) {
    super(parent);
  }

  // #endregion

  // #region Properties

  // Definiert das Control als Required
  @Input("isrequired") _isrequired: boolean = false;
  // TextBox Placeholder
  @Input("placeholder") _placeholder: string = null;

  // Min Date
  @Input("mindate")
  set mindate(v: string | Date | null) {
    var date = moment.utc(v, [this.DATEFORMAT], true);

    if (date.isValid()) {
      this._mindate = date.toDate();
    } else {
      this._mindate = null;
    }
  }
  _mindate: Date = null;

  // Max Date
  @Input("maxdate")
  set maxdate(v: string | Date | null) {
    var date = moment.utc(v, [this.DATEFORMAT], true);

    if (date.isValid()) {
      this._maxdate = date.toDate();
    } else {
      this._maxdate = null;
    }
  }
  _maxdate: Date = null;

  private _valueAsString = '';
  private _isDateValid: boolean = true;

  get IsDateValid(): boolean {
    return this._isDateValid;
  }

  _mask = { mask: [/\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/,], guide: true, placeholderChar: '_', keepCharPositions: true };

  // Definiert ob der Date Selector angezeigt wird
  _showselector: boolean = false;

  // #endregion

  // Overwrite WriteValue to Set correct Date Object
  writeValue(value: Date | string) {
    if (value === '' || value === null || value === undefined) {
      this._value = null;
    } else {
      this._value = new Date(Date.parse(value as string));
    }

    super.writeValue(this._value);
  }

  // #region Value as String

  @Input("valuestring")
  set valuestring(v: string) {
    this._valueAsString = v;
    var date = moment.utc(v, [this.DATEFORMAT], true);

    if (date.isValid()) {
      this.value = date.toDate();
      this._isDateValid = true;
    }
    else {
      this.value = null;
      this._isDateValid = false;
    }
  }

  get valuestring(): string {
    if (this.value === null)
      return this._valueAsString;
    else {
      var date = moment(this.value);
      return date.format("DD.MM.YYYY");
    }
  }

  // #endregion

  // #region Date Selector

  showDateSelector(): void {
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
    this.value = v.date;
    this._isDateValid = true;
    this._showselector = false;
  }

  // #endregion
}
