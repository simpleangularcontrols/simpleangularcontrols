import { NgDate } from "../controls";
import { Validator, NG_VALIDATORS, AbstractControl, ValidationErrors } from "@angular/forms";
import { OnChanges, Directive, forwardRef, SimpleChanges, Input } from "@angular/core";
import * as moment from 'moment';

@Directive({
  selector: 'input[ngDateFormat][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => NgDateFormat), multi: true }
    // { provide: NgDate, useExisting: forwardRef(() => NgDate), multi: true }
  ]
})
export class NgDateFormat implements Validator {
  // Date Control
  protected controlItem: NgDate;

  // #region Constructor

  // Konstruktor
  // Inject des Formulars
  constructor(controlItem: NgDate) {
    this.controlItem = controlItem;
  }

  // #endregion

  validate(c: AbstractControl): ValidationErrors | null {
    if (c.value !== '' && c.value !== undefined && c.value !== null && !this.controlItem.IsDateValid) {
      return { 'dateformat': true, 'message': 'Feld "' + this.controlItem._label + '" ist kein gültiges Datum' };
    } else {
      return null;
    }
  }
}

@Directive({
  selector: 'input[ngDateMin][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => NgDateMin), multi: true }
  ]
})
export class NgDateMin implements Validator {
  // Date Control
  protected controlItem: NgDate;

  constructor(controlItem: NgDate) {
    this.controlItem = controlItem;
  }

  @Input("ngDateMin")
  minDate: Date | null;

  validate(c: AbstractControl): ValidationErrors | null {
    // Check abbrechen, wenn kein gültiges Datum
    if (!this.controlItem.IsDateValid || this.minDate === null) {
      return null;
    }

    if (this.minDate > this.controlItem.value) {
      return { 'datemin': true, 'message': 'Feld "' + this.controlItem._label + '" muss neuer oder gleich ' + moment(this.minDate).format(this.controlItem.DATEFORMAT) + ' sein' };
    } else {
      return null;
    }

  }
}


@Directive({
  selector: 'input[ngDateMax][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => NgDateMax), multi: true }
  ]
})
export class NgDateMax implements Validator {
  // Date Control
  protected controlItem: NgDate;

  constructor(controlItem: NgDate) {
    this.controlItem = controlItem;
  }

  @Input("ngDateMax")
  maxDate: Date | null;

  validate(c: AbstractControl): ValidationErrors | null {
    // Check abbrechen, wenn kein gültiges Datum
    if (!this.controlItem.IsDateValid || this.maxDate === null) {
      return null;
    }

    if (this.maxDate < this.controlItem.value) {
      return { 'datemax': true, 'message': 'Feld "' + this.controlItem._label + '" muss älter oder gleich ' + moment(this.maxDate).format(this.controlItem.DATEFORMAT) + ' sein' };
    } else {
      return null;
    }

  }
}
