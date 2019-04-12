import { AbstractControl, ValidationErrors, Validators, ValidatorFn } from "@angular/forms";
import { IDateTimeControl } from "../interfaces/idatetimecontrol";
import * as moment_ from 'moment';
const moment = moment_;

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

  static patternValidator(control: AbstractControl, pattern: string, fieldName: string): ValidationErrors | null {
    let validator: ValidatorFn = Validators.pattern(pattern);

    if (validator(control) !== null) {
      return { 'pattern': true, 'pattern_message': 'Feld "' + fieldName + '" akzeptiert nur folgenden Pattern ' + pattern };
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
    if (!control.IsDateValid() || minDate === null) {
      return null;
    }

    if (minDate > control.value) {
      return { 'datemin': true, 'message': 'Feld "' + fieldName + '" muss neuer oder gleich ' + moment(minDate).format(control.GetDateTimeFormatString()) + ' sein' };
    } else {
      return null;
    }
  }

  static maxDate(control: IDateTimeControl, maxDate: Date, fieldName: string): ValidationErrors | null {
    // Check abbrechen, wenn kein gültiges Datum
    if (!control.IsDateValid() || maxDate === null) {
      return null;
    }

    if (maxDate < control.value) {
      return { 'datemax': true, 'message': 'Feld "' + fieldName + '" muss älter oder gleich ' + moment(maxDate).format(control.GetDateTimeFormatString()) + ' sein' };
    } else {
      return null;
    }
  }

  static minTime(control: IDateTimeControl, minTime: Date, fieldName: string): ValidationErrors | null {
    // Check abbrechen, wenn kein gültiges Datum
    if (!control.IsDateValid() || minTime === null) {
      return null;
    }

    if (control.value !== null && minTime > control.value) {
      return { 'datemin': true, 'message': 'Feld "' + fieldName + '" muss neuer oder gleich ' + moment(minTime).format(control.GetDateTimeFormatString()) + ' sein' };
    } else {
      return null;
    }
  }

  static maxTime(control: IDateTimeControl, maxTime: Date, fieldName: string): ValidationErrors | null {
    // Check abbrechen, wenn kein gültiges Datum
    if (!control.IsDateValid() || maxTime === null) {
      return null;
    }

    if (control.value !== null && maxTime < control.value) {
      return { 'datemax': true, 'message': 'Feld "' + fieldName + '" muss älter oder gleich ' + moment(maxTime).format(control.GetDateTimeFormatString()) + ' sein' };
    } else {
      return null;
    }
  }

  static isValidDate(control: IDateTimeControl, fieldName: string): ValidationErrors | null {
    if (!control.IsDateValid()) {
      return { 'dateformat': true, 'message': 'Feld "' + fieldName + '" ist kein gültiges Datum' };
    } else {
      return null;
    }
  }

}

/**
 * Klasse für die Definition von Validierungsfehlern
 */
export class ValidationMessage {

  /**
   *  Konstruktor
   *  @param type Typ der Validierungsmeldung
   */
  constructor(type: string = '') {
    this.type = type;
  }

  /**
   * Typ der Validerungsmeldung
   */
  public type: string;

  /**
   * Key der Fehlermeldung. Kann dazu verwendet werden, um die Fehlermeldung mehrsprachig zu halten.
   */
  public message_key: string;

  /**
   * Collection von Parametern
   */
  public parameters: Map<string, string> = new Map<string, string>();
}
