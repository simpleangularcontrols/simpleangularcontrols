import { AbstractControl, ValidationErrors, Validators, ValidatorFn } from "@angular/forms";
import { IDateTimeControl } from "../interfaces/idatetimecontrol";
import { IUploadControl } from '../interfaces/iuploadcontrol';
import * as moment_ from 'moment';
/**
 * Moment
 */
const moment = moment_;

/**
 * Klasse für Validierungsfehler
 * */
export class ValidationErrorItem {

  /**
   * Konstruktor
   * 
   * @param errorType Type des Fehlers
   * @param errorMessageKey Key für Fehlermeldung
   * @param errorMessageSummaryKey Key für Fehlermeldung in Validation Summary
   * @param fieldName Name des Labels oder Bezeichnung des Feldes
   */
  constructor(errorType: string, errorMessageKey: string, errorMessageSummaryKey: string, fieldName: string) {
    this.errorType = errorType;
    this.errorMessageKey = errorMessageKey;
    this.errorMessageValidationSummaryKey = errorMessageSummaryKey;
    this.fieldName = fieldName;
  }

  /**
   * Typ den Fehler
   */
  public errorType: string;

  /**
   * Error Message Key
   */
  public errorMessageKey: string;

  /**
   * Error Message Key für Validation Summary
   */
  public errorMessageValidationSummaryKey: string

  /**
   * Label oder Name des Feldes
   */
  public fieldName: string;

  /**
   * Map mit Parametern die in den Meldungen als Platzhalter verwendet werden können
   */
  public parameters: Map<string, any> = new Map<string, any>();

}

/**
 * Klasse mit Standard Validatoren
 */
export class Validation {

  static GetValidationErrorItem(errorType: string, errorMessageKey: string, errorMessageValidationSummaryKey: string, fieldName: string, parameters: Map<string, any> = new Map<string, any>()): any {
    let item: ValidationErrorItem = new ValidationErrorItem(errorType, errorMessageKey, errorMessageValidationSummaryKey, fieldName)

    if (parameters !== null && parameters !== undefined && parameters.size > 0) {
      parameters.forEach((v, k) => {
        item.parameters.set(k, v);
      })
    }

    return { [errorType]: item };
  }

  /**
   * Validator für Required State
   * 
   * @param control Control das Validiert wird
   * @param fieldName Label des Controls
   */
  static required(control: AbstractControl, fieldName: string): ValidationErrors | null {
    if (Validators.required(control) !== null) {
      return Validation.GetValidationErrorItem('required', 'VALIDATION_ERROR_REQUIRED', 'VALIDATION_ERROR_SUMMARY_REQUIRED', fieldName);
      // return { 'required': true, 'required_message': 'Feld "' + fieldName + '" ist erforderlich' };
    } else {
      return null;
    }
  }

  /**
   * Validator für Min Value
   * 
   * @param control Control das Validiert wird
   * @param minvalue Min. Value
   * @param fieldName Label des Controls
   */
  static minValue(control: AbstractControl, minvalue: number, fieldName: string): ValidationErrors | null {
    let validator: ValidatorFn = Validators.min(minvalue);

    if (validator(control) !== null) {
      let parameters: Map<string, any> = new Map<string, any>();
      parameters.set('MINVALUE', minvalue);

      return Validation.GetValidationErrorItem('minvalue', 'VALIDATION_ERROR_MINVALUE', 'VALIDATION_ERROR_SUMMARY_MINVALUE', fieldName, parameters)
      // return { 'minvalue': true, 'minvalue_message': 'Feld "' + fieldName + '" erfordert einen Minimalwert von ' + minvalue };
    } else {
      return null;
    }
  }

  /**
   * Validierung mit einem RegEx Pattern
   * @param control Control das validiert werden soll.
   * @param pattern RegEx Pattern
   * @param fieldName Label des Controls
   */
  static patternValidator(control: AbstractControl, pattern: string, fieldName: string): ValidationErrors | null {
    let validator: ValidatorFn = Validators.pattern(pattern);

    if (validator(control) !== null) {
      let parameters: Map<string, any> = new Map<string, any>();
      parameters.set('PATTERN', pattern);

      return Validation.GetValidationErrorItem('pattern', 'VALIDATION_ERROR_PATTERN', 'VALIDATION_ERROR_SUMMARY_PATTERN', fieldName, parameters)
      // return { 'pattern': true, 'pattern_message': 'Feld "' + fieldName + '" akzeptiert nur folgenden Pattern ' + pattern };
    } else {
      return null;
    }
  }

  /**
   * Validator für Max Value
   * 
   * @param control Control das Validiert werden soll
   * @param maxvalue Max. Wert
   * @param fieldName Label des Controls
   */
  static maxValue(control: AbstractControl, maxvalue: number, fieldName: string): ValidationErrors | null {
    let validator: ValidatorFn = Validators.max(maxvalue);

    if (validator(control) !== null) {
      let parameters: Map<string, any> = new Map<string, any>();
      parameters.set('MAXVALUE', maxvalue);

      return Validation.GetValidationErrorItem('maxvalue', 'VALIDATION_ERROR_MAXVALUE', 'VALIDATION_ERROR_SUMMARY_MAXVALUE', fieldName, parameters)
      // return { 'maxvalue': true, 'maxvalue_message': 'Feld "' + fieldName + '" erfordert einen Maximalwert von ' + maxvalue };
    } else {
      return null;
    }
  }

  /**
   * Validiert Feld auf E-Mail Adresse
   * 
   * @param control Control das Valdiert werden soll
   * @param fieldName Label des Controls
   */
  static email(control: AbstractControl, fieldName: string): ValidationErrors | null {
    if (Validators.email(control) !== null) {
      return Validation.GetValidationErrorItem('email', 'VALIDATION_ERROR_EMAIL', 'VALIDATION_ERROR_SUMMARY_EMAIL', fieldName)
      // return { 'email': true, 'message': 'Feld "' + fieldName + '" ist keine E-Mail Adresse' };
    } else {
      return null;
    }
  }

  /**
   * Validiert auf die Länge des Wertes im Control
   * 
   * @param control Control das Validiert werden soll
   * @param minlength Min. Länge des Wertes
   * @param fieldName Label des Controls
   */
  static minLength(control: AbstractControl, minlength: number, fieldName: string): ValidationErrors | null {
    let validator: ValidatorFn = Validators.minLength(minlength);

    if (minlength !== null && minlength !== undefined && control.value != '' && control.value != undefined && control.value != null && validator(control) != null) {
      let parameters: Map<string, any> = new Map<string, any>();
      parameters.set('MINLENGTH', minlength);

      return Validation.GetValidationErrorItem('minlength', 'VALIDATION_ERROR_MINLENGTH', 'VALIDATION_ERROR_SUMMARY_MINLENGTH', fieldName, parameters)
      // return { 'required': true, 'required_message': 'Feld "' + fieldName + '" erfordert min. ' + minlength + ' Zeichen' };
    } else {
      return null;
    }
  }

  /**
   * Validiert ob das Datum neuer als minDate ist
   * @param control Control das Validiert werden soll. Muss IDateTimeControl implementiert haben
   * @param minDate Min. Datum
   * @param fieldName Label des Controls
   */
  static minDate(control: IDateTimeControl, minDate: Date, fieldName: string): ValidationErrors | null {
    // Check abbrechen, wenn kein gültiges Datum
    if (!control.IsDateValid() || minDate === null) {
      return null;
    }

    if (minDate > control.value) {
      let parameters: Map<string, any> = new Map<string, any>();
      parameters.set('MINDATE', moment(minDate).format(control.GetDateTimeFormatString()));

      return Validation.GetValidationErrorItem('datemin', 'VALIDATION_ERROR_MINDATE', 'VALIDATION_ERROR_SUMMARY_MINDATE', fieldName, parameters)
      // return { 'datemin': true, 'message': 'Feld "' + fieldName + '" muss neuer oder gleich ' + moment(minDate).format(control.GetDateTimeFormatString()) + ' sein' };
    } else {
      return null;
    }
  }

  /**
   * Validiert ob das Datum älter als maxDate ist
   * @param control Control das Validiert werden soll. Muss IDateTimeControl implementiert haben
   * @param maxDate max. Datum
   * @param fieldName Label des Controls
   */
  static maxDate(control: IDateTimeControl, maxDate: Date, fieldName: string): ValidationErrors | null {
    // Check abbrechen, wenn kein gültiges Datum
    if (!control.IsDateValid() || maxDate === null) {
      return null;
    }

    if (maxDate < control.value) {
      let parameters: Map<string, any> = new Map<string, any>();
      parameters.set('MAXDATE', moment(maxDate).format(control.GetDateTimeFormatString()));

      return Validation.GetValidationErrorItem('datemax', 'VALIDATION_ERROR_MAXDATE', 'VALIDATION_ERROR_SUMMARY_MAXDATE', fieldName, parameters)
      // return { 'datemax': true, 'message': 'Feld "' + fieldName + '" muss älter oder gleich ' + moment(maxDate).format(control.GetDateTimeFormatString()) + ' sein' };
    } else {
      return null;
    }
  }

  /**
   * Validiert ob die Zeit später als minTime ist.
   * 
   * @param control Control das Validiert werden soll. Muss IDateTimeControl implementiert haben
   * @param minTime Min. Zeit
   * @param fieldName Label des Controls
   */
  static minTime(control: IDateTimeControl, minTime: Date, fieldName: string): ValidationErrors | null {
    // Check abbrechen, wenn kein gültiges Datum
    if (!control.IsDateValid() || minTime === null) {
      return null;
    }

    if (control.value !== null && minTime > control.value) {
      let parameters: Map<string, any> = new Map<string, any>();
      parameters.set('MINTIME', moment(minTime).format(control.GetDateTimeFormatString()));

      return Validation.GetValidationErrorItem('timemin', 'VALIDATION_ERROR_MINTIME', 'VALIDATION_ERROR_SUMMARY_MINTIME', fieldName, parameters)
      // return { 'datemin': true, 'message': 'Feld "' + fieldName + '" muss neuer oder gleich ' + moment(minTime).format(control.GetDateTimeFormatString()) + ' sein' };
    } else {
      return null;
    }
  }

  /**
   * Validiert ob die Zeit früher als maxTime ist.
   * 
   * @param control Control das Validiert werden soll. Muss IDateTimeControl implementiert haben
   * @param maxTime Min. Zeit
   * @param fieldName Label des Controls
   */
  static maxTime(control: IDateTimeControl, maxTime: Date, fieldName: string): ValidationErrors | null {
    // Check abbrechen, wenn kein gültiges Datum
    if (!control.IsDateValid() || maxTime === null) {
      return null;
    }

    if (control.value !== null && maxTime < control.value) {
      let parameters: Map<string, any> = new Map<string, any>();
      parameters.set('MAXTIME', moment(maxTime).format(control.GetDateTimeFormatString()));

      return Validation.GetValidationErrorItem('timemax', 'VALIDATION_ERROR_MAXTIME', 'VALIDATION_ERROR_SUMMARY_MAXTIME', fieldName, parameters)
      // return { 'datemax': true, 'message': 'Feld "' + fieldName + '" muss älter oder gleich ' + moment(maxTime).format(control.GetDateTimeFormatString()) + ' sein' };
    } else {
      return null;
    }
  }

  /**
   * Validator der prüft ob der Wert ein Datum ist.
   * 
   * @param control Control mit IDateTimeControl Interface implementierung
   * @param fieldName Label des Controls
   */
  static isValidDate(control: IDateTimeControl, fieldName: string): ValidationErrors | null {
    if (!control.IsDateValid()) {
      return Validation.GetValidationErrorItem('dateformat', 'VALIDATION_ERROR_DATETIMEFORMAT', 'VALIDATION_ERROR_SUMMARY_DATETIMEFORMAT', fieldName)
      // return { 'dateformat': true, 'message': 'Feld "' + fieldName + '" ist kein gültiges Datum' };
    } else {
      return null;
    }
  }

  /**
   * Validator für min. Anzahl von Uploads
   * 
   * @param control Control das Validatiert werden soll. Control muss IUploadControl implementiert haben
   * @param minFiles Min. Anzahl Files die hochgeladen werden müssen
   * @param fieldName Label des Controls
   */
  static minFiles(control: IUploadControl, minFiles: number, fieldName: string): ValidationErrors | null {
    // Check abbrechen, wenn Min Files nicht gesetzt oder 0
    if (minFiles === null || minFiles === 0) {
      return null;
    }

    if (control.UploadedFileCount() !== null && minFiles > control.UploadedFileCount()) {
      let parameters: Map<string, any> = new Map<string, any>();
      parameters.set('MINFILES', minFiles);

      return Validation.GetValidationErrorItem('dateformat', 'VALIDATION_ERROR_FILESMIN', 'VALIDATION_ERROR_SUMMARY_FILESMIN', fieldName, parameters)
    } else {
      return null;
    }
  }

}
