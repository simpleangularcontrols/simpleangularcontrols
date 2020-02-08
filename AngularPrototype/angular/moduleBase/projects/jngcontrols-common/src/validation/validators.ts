import { AbstractControl, ValidationErrors, Validators, ValidatorFn } from '@angular/forms';
import { IDateTimeControl } from '../interfaces/idatetimecontrol';
import { IUploadControl } from '../interfaces/iuploadcontrol';
import * as moment_ from 'moment';
import { LanguageModel } from '../models/languagemodel';
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
  public errorMessageValidationSummaryKey: string;

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

  /**
   * Die Methode ist von jedem Validator aufgerufen. Die setzt sowohl den errorType des gerpüfte Item, als auch die ErrorMessage (gemäss von errorType, FieldName und Parameters).
   * @param errorType Typ den Fehler
   * @param errorMessageKey Error Message Key
   * @param errorMessageValidationSummaryKey Error Message Key für Validation Summary
   * @param fieldName  Label oder Name des Feldes
   * @param parameters Parametern die in den Meldungen als Platzhalter verwendet werden können
   */
  static GetValidationErrorItem(errorType: string, errorMessageKey: string, errorMessageValidationSummaryKey: string, fieldName: string, parameters: Map<string, any> = new Map<string, any>()): any {
    const item: ValidationErrorItem = new ValidationErrorItem(errorType, errorMessageKey, errorMessageValidationSummaryKey, fieldName);

    if (parameters !== null && parameters !== undefined && parameters.size > 0) {
      parameters.forEach((v, k) => {
        item.parameters.set(k, v);
      });
    }

    return { [errorType]: item };
  }

  /**
   * Validator für Required State
   * @param control Control das Validiert wird
   * @param fieldName Label des Controls
   * @param validationMessage Validierungsmeldung die
   * @param validationMessageSummary Validierungsmeldung die im Validation Summary angezeigt wird
   */
  static required(control: AbstractControl, fieldName: string, validationMessage: string, validationMessageSummary): ValidationErrors | null {
    if (Validators.required(control) !== null) {
      return Validation.GetValidationErrorItem('required', validationMessage, validationMessageSummary, fieldName);
    } else {
      return null;
    }
  }

  /**
   * Validator für Min Value
   * @param control Control das Validiert wird
   * @param minvalue Min. Value
   * @param fieldName Label des Controls
   * @param validationMessage Validierungsmeldung die
   * @param validationMessageSummary Validierungsmeldung die im Validation Summary angezeigt wird
   */
  static minValue(control: AbstractControl, minvalue: number, fieldName: string, validationMessage: string, validationMessageSummary): ValidationErrors | null {
    const validator: ValidatorFn = Validators.min(minvalue);

    if (validator(control) !== null) {
      const parameters: Map<string, any> = new Map<string, any>();
      parameters.set('MINVALUE', minvalue);

      return Validation.GetValidationErrorItem('minvalue', validationMessage, validationMessageSummary, fieldName, parameters);
    } else {
      return null;
    }
  }

  /**
   * Validierung mit einem RegEx Pattern
   * @param control Control das validiert werden soll.
   * @param pattern RegEx Pattern
   * @param fieldName Label des Controls
   * @param validationMessage Validierungsmeldung die
   * @param validationMessageSummary Validierungsmeldung die im Validation Summary angezeigt wird
   */
  static patternValidator(control: AbstractControl, pattern: string, fieldName: string, validationMessage: string, validationMessageSummary): ValidationErrors | null {
    const validator: ValidatorFn = Validators.pattern(pattern);

    if (validator(control) !== null) {
      const parameters: Map<string, any> = new Map<string, any>();
      parameters.set('PATTERN', pattern);

      return Validation.GetValidationErrorItem('pattern', validationMessage, validationMessageSummary, fieldName, parameters);
    } else {
      return null;
    }
  }

  /**
   * Validator für Max Value
   * @param control Control das Validiert werden soll
   * @param maxvalue Max. Wert
   * @param fieldName Label des Controls
   * @param validationMessage Validierungsmeldung die
   * @param validationMessageSummary Validierungsmeldung die im Validation Summary angezeigt wird
   */
  static maxValue(control: AbstractControl, maxvalue: number, fieldName: string, validationMessage: string, validationMessageSummary): ValidationErrors | null {
    const validator: ValidatorFn = Validators.max(maxvalue);

    if (validator(control) !== null) {
      const parameters: Map<string, any> = new Map<string, any>();
      parameters.set('MAXVALUE', maxvalue);

      return Validation.GetValidationErrorItem('maxvalue', validationMessage, validationMessageSummary, fieldName, parameters);
    } else {
      return null;
    }
  }

  /**
   * Validiert Feld auf E-Mail Adresse
   * @param control Control das Valdiert werden soll
   * @param fieldName Label des Controls
   * @param validationMessage Validierungsmeldung die
   * @param validationMessageSummary Validierungsmeldung die im Validation Summary angezeigt wird
   */
  static email(control: AbstractControl, fieldName: string, validationMessage: string, validationMessageSummary): ValidationErrors | null {
    if (Validators.email(control) !== null) {
      return Validation.GetValidationErrorItem('email', validationMessage, validationMessageSummary, fieldName);
    } else {
      return null;
    }
  }

  /**
   * Validiert auf die Länge des Wertes im Control
   * @param control Control das Validiert werden soll
   * @param minlength Min. Länge des Wertes
   * @param fieldName Label des Controls
   * @param validationMessage Validierungsmeldung die
   * @param validationMessageSummary Validierungsmeldung die im Validation Summary angezeigt wird
   */
  static minLength(control: AbstractControl, minlength: number, fieldName: string, validationMessage: string, validationMessageSummary): ValidationErrors | null {
    const validator: ValidatorFn = Validators.minLength(minlength);

    if (minlength !== null && minlength !== undefined && control.value !== '' && control.value !== undefined && control.value != null && validator(control) != null) {
      const parameters: Map<string, any> = new Map<string, any>();
      parameters.set('MINLENGTH', minlength);

      return Validation.GetValidationErrorItem('minlength', validationMessage, validationMessageSummary, fieldName, parameters);
    } else {
      return null;
    }
  }

  /**
   * Validiert ob das Datum neuer als minDate ist
   * @param control Control das Validiert werden soll. Muss IDateTimeControl implementiert haben
   * @param minDate Min. Datum
   * @param fieldName Label des Controls
   * @param validationMessage Validierungsmeldung die
   * @param validationMessageSummary Validierungsmeldung die im Validation Summary angezeigt wird
   */
  static minDate(control: IDateTimeControl, minDate: Date, fieldName: string, validationMessage: string, validationMessageSummary): ValidationErrors | null {
    // Check abbrechen, wenn kein gültiges Datum
    if (!control.IsDateValid() || minDate === null) {
      return null;
    }

    if (minDate > control.value) {
      const parameters: Map<string, any> = new Map<string, any>();
      parameters.set('MINDATE', moment(minDate).format(control.GetDateTimeFormatString()));

      return Validation.GetValidationErrorItem('datemin', validationMessage, validationMessageSummary, fieldName, parameters);
    } else {
      return null;
    }
  }

  /**
   * Validiert ob das Datum älter als maxDate ist
   * @param control Control das Validiert werden soll. Muss IDateTimeControl implementiert haben
   * @param maxDate max. Datum
   * @param fieldName Label des Controls
   * @param validationMessage Validierungsmeldung die
   * @param validationMessageSummary Validierungsmeldung die im Validation Summary angezeigt wird
   */
  static maxDate(control: IDateTimeControl, maxDate: Date, fieldName: string, validationMessage: string, validationMessageSummary): ValidationErrors | null {
    // Check abbrechen, wenn kein gültiges Datum
    if (!control.IsDateValid() || maxDate === null) {
      return null;
    }

    if (maxDate < control.value) {
      const parameters: Map<string, any> = new Map<string, any>();
      parameters.set('MAXDATE', moment(maxDate).format(control.GetDateTimeFormatString()));

      return Validation.GetValidationErrorItem('datemax', validationMessage, validationMessageSummary, fieldName, parameters);
    } else {
      return null;
    }
  }

  /**
   * Validiert ob die Zeit später als minTime ist.
   * @param control Control das Validiert werden soll. Muss IDateTimeControl implementiert haben
   * @param minTime Min. Zeit
   * @param fieldName Label des Controls
   * @param validationMessage Validierungsmeldung die
   * @param validationMessageSummary Validierungsmeldung die im Validation Summary angezeigt wird
   */
  static minTime(control: IDateTimeControl, minTime: Date, fieldName: string, validationMessage: string, validationMessageSummary): ValidationErrors | null {
    // Check abbrechen, wenn kein gültiges Datum
    if (!control.IsDateValid() || minTime === null) {
      return null;
    }

    if (control.value !== null && minTime > control.value) {
      const parameters: Map<string, any> = new Map<string, any>();
      parameters.set('MINTIME', moment(minTime).format(control.GetDateTimeFormatString()));

      return Validation.GetValidationErrorItem('timemin', validationMessage, validationMessageSummary, fieldName, parameters);
    } else {
      return null;
    }
  }

  /**
   * Validiert ob die Zeit früher als maxTime ist.
   * @param control Control das Validiert werden soll. Muss IDateTimeControl implementiert haben
   * @param maxTime Min. Zeit
   * @param fieldName Label des Controls
   * @param validationMessage Validierungsmeldung die
   * @param validationMessageSummary Validierungsmeldung die im Validation Summary angezeigt wird
   */
  static maxTime(control: IDateTimeControl, maxTime: Date, fieldName: string, validationMessage: string, validationMessageSummary): ValidationErrors | null {
    // Check abbrechen, wenn kein gültiges Datum
    if (!control.IsDateValid() || maxTime === null) {
      return null;
    }

    if (control.value !== null && maxTime < control.value) {
      const parameters: Map<string, any> = new Map<string, any>();
      parameters.set('MAXTIME', moment(maxTime).format(control.GetDateTimeFormatString()));

      return Validation.GetValidationErrorItem('timemax', validationMessage, validationMessageSummary, fieldName, parameters);
    } else {
      return null;
    }
  }

  /**
   * Validator der prüft ob der Wert ein Datum ist.
   * @param control Control mit IDateTimeControl Interface implementierung
   * @param fieldName Label des Controls
   * @param validationMessage Validierungsmeldung die beim Control angezeigt wird
   * @param validationMessageSummary Validierungsmeldung die im Validation Summary angezeigt wird
   */
  static isValidDate(control: IDateTimeControl, fieldName: string, validationMessage: string, validationMessageSummary): ValidationErrors | null {
    if (!control.IsDateValid()) {
      return Validation.GetValidationErrorItem('dateformat', validationMessage, validationMessageSummary, fieldName);
      // return { 'dateformat': true, 'message': 'Feld "' + fieldName + '" ist kein gültiges Datum' };
    } else {
      return null;
    }
  }

  /**
   * Validator für min. Anzahl von Uploads
   * @param control Control das Validatiert werden soll. Control muss IUploadControl implementiert haben
   * @param minFiles Min. Anzahl Files die hochgeladen werden müssen
   * @param fieldName Label des Controls
   * @param validationMessage Validierungsmeldung die unterhalb des Controls angezeigt wird
   * @param validationMessageSummary Validierungsmeldung die im Validation Summary angezeigt wird
   */
  static minFiles(control: IUploadControl, minFiles: number, fieldName: string, validationMessage: string, validationMessageSummary): ValidationErrors | null {
    // Check abbrechen, wenn Min Files nicht gesetzt oder 0
    if (minFiles === null || minFiles === 0) {
      return null;
    }

    if (control.UploadedFileCount() !== null && minFiles > control.UploadedFileCount()) {
      const parameters: Map<string, any> = new Map<string, any>();
      parameters.set('MINFILES', minFiles);

      return Validation.GetValidationErrorItem('dateformat', validationMessage, validationMessageSummary, fieldName, parameters);
    } else {
      return null;
    }
  }


  /**
   * Validator für MultiLanguage Control, welcher überprüft ob alle Sprachen erfasst sind.
   * @param control Control das Validatiert werden soll
   * @param languages Sprachen die im Control erfasst werden können.
   * @param fieldName Label des Controls
   * @param validationMessage Validierungsmeldung die unterhalb des Controls angezeigt wird
   * @param validationMessageSummary Validierungsmeldung die im Validation Summary angezeigt wird
   */
  static multilanguageRequired(control: AbstractControl, languages: LanguageModel[], fieldName: string, validationMessage: string, validationMessageSummary): ValidationErrors | null {
    let found = false;

    languages.forEach((item: LanguageModel) => {
      if (control.value) {
        if (control.value[item.IsoCode] === undefined || control.value[item.IsoCode] === null || control.value[item.IsoCode] === '') {
          found = true;
        }
      }
    });

    if (found) {
      return Validation.GetValidationErrorItem('required', validationMessage, validationMessageSummary, fieldName);
    } else {
      return null;
    }
  }

  /**
   * Validator für MultiLanguage Control, welcher überprüft ob min. ein Wert erfasst wurde
   * @param control Control das Validatiert werden soll
   * @param languages Sprachen die im Control erfasst werden können.
   * @param fieldName Label des Controls
   * @param validationMessage Validierungsmeldung die unterhalb des Controls angezeigt wird
   * @param validationMessageSummary Validierungsmeldung die im Validation Summary angezeigt wird
   */
  static multilanguageRequiredAny(control: AbstractControl, languages: LanguageModel[], fieldName: string, validationMessage: string, validationMessageSummary): ValidationErrors | null {
    let found = false;

    languages.forEach((item: LanguageModel) => {

      if (control.value) {
        if (control.value[item.IsoCode] !== undefined && control.value[item.IsoCode] !== null && control.value[item.IsoCode] !== '') {
          found = true;
        }
      }

    });

    if (!found) {
      return Validation.GetValidationErrorItem('requiredany', validationMessage, validationMessageSummary, fieldName);
    } else {
      return null;
    }
  }
}
