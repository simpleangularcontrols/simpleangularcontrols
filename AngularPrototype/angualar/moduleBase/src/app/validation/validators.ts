import { AbstractControl, ValidationErrors, Validators, ValidatorFn } from "@angular/forms";
import { NgDate } from "../controls/datetime/date";
import * as moment from 'moment';



export class Validation {

  static required(control: AbstractControl, fieldName: string): ValidationErrors | null {
    if (Validators.required(control) !== null) {
      return { 'required': true, 'required_message': 'Feld "' + fieldName + '" ist erforderlich' };
    } else {
      return null;
    }
  }

  static minValue(control: AbstractControl, minvalue: number, fieldName: string): ValidationErrors | null {
    let validator: ValidatorFn = Validators.min(minvalue);

    if (validator(control) !== null) {
      return { 'minvalue': true, 'minvalue_message': 'Feld "' + fieldName + '" erfordert einen Minimalwert von ' + minvalue };
    } else {
      return null;
    }
  }

  static maxValue(control: AbstractControl, maxvalue: number, fieldName: string): ValidationErrors | null {
    let validator: ValidatorFn = Validators.max(maxvalue);

    if (validator(control) !== null) {
      return { 'maxvalue': true, 'maxvalue_message': 'Feld "' + fieldName + '" erfordert einen Maximalwert von ' + maxvalue };
    } else {
      return null;
    }
  }

  static email(control: AbstractControl, fieldName: string): ValidationErrors | null {
    if (Validators.email(control) !== null) {
      return { 'email': true, 'message': 'Feld "' + fieldName + '" ist keine E-Mail Adresse' };
    } else {
      return null;
    }
  }

  static minLength(control: AbstractControl, minlength: number, fieldName: string): ValidationErrors | null {
    let validator: ValidatorFn = Validators.minLength(minlength);

    if (minlength !== null && minlength !== undefined && control.value != '' && control.value != undefined && control.value != null && validator(control) != null) {
      return { 'required': true, 'required_message': 'Feld "' + fieldName + '" erfordert min. ' + minlength + ' Zeichen' };
    } else {
      return null;
    }
  }

  static minDate(control: IDateTimeControl, minDate: Date, fieldName: string): ValidationErrors | null {
    // Check abbrechen, wenn kein gültiges Datum
    if (!control.IsDateValid() || this.minDate === null) {
      return null;
    }

    if (minDate > control.value) {
      return { 'datemin': true, 'message': 'Feld "' + fieldName + '" muss neuer oder gleich ' + moment(minDate).format(control.DATEFORMAT) + ' sein' };
    } else {
      return null;
    }
  }

  static maxDate(control: IDateTimeControl, maxDate: Date, fieldName: string): ValidationErrors | null {
    // Check abbrechen, wenn kein gültiges Datum
    if (!control.IsDateValid() || this.minDate === null) {
      return null;
    }

    if (maxDate < control.value) {
      return { 'datemax': true, 'message': 'Feld "' + fieldName + '" muss älter oder gleich ' + moment(maxDate).format(control.DATEFORMAT) + ' sein' };
    } else {
      return null;
    }
  }


  static isValidDate(control: IDateTimeControl, fieldName: string): ValidationErrors | null {
    if (control.value !== '' && control.value !== undefined && control.value !== null && !control.IsDateValid()) {
      return { 'dateformat': true, 'message': 'Feld "' + fieldName + '" ist kein gültiges Datum' };
    } else {
      return null;
    }
  }

}
