import { ValidationErrors, ValidatorFn } from '@angular/forms';
import * as moment_ from 'moment';
import { LanguageModel } from '../models/languagemodel';
import { isValidDateValidator } from './invaliddate.validator';
import { maxDateValidator } from './maxdate.validator';
import { maxTimeValidator } from './maxtime.validator';
import { maxValueValidator } from './maxvalue.validator';
import { minDateValidator } from './mindate.validator';
import { minFilesValidator } from './minfiles.validator';
import { minLengthValidator } from './minlength.validator';
import { minTimeValidator } from './mintime.validator';
import { minValueValidator } from './minvalue.validator';
import { multilanguageRequiredValidator } from './multilanguagerequired.validator';
import { multilanguageRequiredAnyValidator } from './multilanguagerequiredany.validator';
import { patternValidator } from './pattern.validator';
import { requiredValidator } from './required.validator';
import { CreateValidationError } from './validationerrorcreator';
import { emailValidator } from './email.validator';
/**
 * Moment
 */
const moment = moment_['default'];

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
  static GetValidationErrorItem(
    errorType: string,
    errorMessageKey: string,
    errorMessageValidationSummaryKey: string,
    fieldName: string = null,
    parameters: Map<string, any> = new Map<string, any>()
  ): any {
    return CreateValidationError(
      errorType,
      errorMessageKey,
      errorMessageValidationSummaryKey,
      parameters
    );
  }

  /**
   * Validator für Required State
   * @param control Control das Validiert wird
   * @param fieldName Label des Controls
   * @param validationMessage Validierungsmeldung die
   * @param validationMessageSummary Validierungsmeldung die im Validation Summary angezeigt wird
   */
  static required(
    validationMessage: string,
    validationMessageSummary
  ): ValidatorFn {
    return requiredValidator(validationMessage, validationMessageSummary);
  }

  /**
   * Validator für Min Value
   * @param control Control das Validiert wird
   * @param minvalue Min. Value
   * @param fieldName Label des Controls
   * @param validationMessage Validierungsmeldung die
   * @param validationMessageSummary Validierungsmeldung die im Validation Summary angezeigt wird
   */
  static minValue(
    minvalue: number,
    validationMessage: string,
    validationMessageSummary
  ): ValidatorFn {
    return minValueValidator(
      minvalue,
      validationMessage,
      validationMessageSummary
    );
  }

  /**
   * Validierung mit einem RegEx Pattern
   * @param control Control das validiert werden soll.
   * @param pattern RegEx Pattern
   * @param fieldName Label des Controls
   * @param validationMessage Validierungsmeldung die
   * @param validationMessageSummary Validierungsmeldung die im Validation Summary angezeigt wird
   */
  static pattern(
    pattern: string,
    validationMessage: string,
    validationMessageSummary
  ): ValidatorFn {
    return patternValidator(
      pattern,
      validationMessage,
      validationMessageSummary
    );
  }

  /**
   * Validator für Max Value
   * @param control Control das Validiert werden soll
   * @param maxvalue Max. Wert
   * @param fieldName Label des Controls
   * @param validationMessage Validierungsmeldung die
   * @param validationMessageSummary Validierungsmeldung die im Validation Summary angezeigt wird
   */
  static maxValue(
    maxvalue: number,
    validationMessage: string,
    validationMessageSummary
  ): ValidatorFn {
    return maxValueValidator(
      maxvalue,
      validationMessage,
      validationMessageSummary
    );
  }

  /**
   * Validiert Feld auf E-Mail Adresse
   * @param control Control das Valdiert werden soll
   * @param fieldName Label des Controls
   * @param validationMessage Validierungsmeldung die
   * @param validationMessageSummary Validierungsmeldung die im Validation Summary angezeigt wird
   */
  static email(
    validationMessage: string,
    validationMessageSummary
  ): ValidatorFn {
    return emailValidator(validationMessage, validationMessageSummary);
  }

  /**
   * Validiert auf die Länge des Wertes im Control
   * @param control Control das Validiert werden soll
   * @param minlength Min. Länge des Wertes
   * @param fieldName Label des Controls
   * @param validationMessage Validierungsmeldung die
   * @param validationMessageSummary Validierungsmeldung die im Validation Summary angezeigt wird
   */
  static minLength(
    minlength: number,
    validationMessage: string,
    validationMessageSummary
  ): ValidatorFn {
    return minLengthValidator(
      minlength,
      validationMessage,
      validationMessageSummary
    );
  }

  /**
   * Validiert ob das Datum neuer als minDate ist
   * @param control Control das Validiert werden soll. Muss IDateTimeControl implementiert haben
   * @param minDate Min. Datum
   * @param fieldName Label des Controls
   * @param validationMessage Validierungsmeldung die
   * @param validationMessageSummary Validierungsmeldung die im Validation Summary angezeigt wird
   */
  static minDate(
    minDate: Date,
    validationMessage: string,
    validationMessageSummary
  ): ValidatorFn {
    return minDateValidator(
      minDate,
      validationMessage,
      validationMessageSummary
    );
  }

  /**
   * Validiert ob das Datum älter als maxDate ist
   * @param control Control das Validiert werden soll. Muss IDateTimeControl implementiert haben
   * @param maxDate max. Datum
   * @param fieldName Label des Controls
   * @param validationMessage Validierungsmeldung die
   * @param validationMessageSummary Validierungsmeldung die im Validation Summary angezeigt wird
   */
  static maxDate(
    maxDate: Date,
    validationMessage: string,
    validationMessageSummary
  ): ValidatorFn {
    return maxDateValidator(
      maxDate,
      validationMessage,
      validationMessageSummary
    );
  }

  /**
   * Validiert ob die Zeit später als minTime ist.
   * @param control Control das Validiert werden soll. Muss IDateTimeControl implementiert haben
   * @param minTime Min. Zeit
   * @param fieldName Label des Controls
   * @param validationMessage Validierungsmeldung die
   * @param validationMessageSummary Validierungsmeldung die im Validation Summary angezeigt wird
   */
  static minTime(
    minTime: Date,
    validationMessage: string,
    validationMessageSummary: string
  ): ValidatorFn {
    return minTimeValidator(
      minTime,
      validationMessage,
      validationMessageSummary
    );
  }

  /**
   * Validiert ob die Zeit früher als maxTime ist.
   * @param control Control das Validiert werden soll. Muss IDateTimeControl implementiert haben
   * @param maxTime Min. Zeit
   * @param fieldName Label des Controls
   * @param validationMessage Validierungsmeldung die
   * @param validationMessageSummary Validierungsmeldung die im Validation Summary angezeigt wird
   */
  static maxTime(
    maxTime: Date,
    validationMessage: string,
    validationMessageSummary
  ): ValidatorFn {
    return maxTimeValidator(
      maxTime,
      validationMessage,
      validationMessageSummary
    );
  }

  /**
   * Validator der prüft ob der Wert ein Datum ist.
   * @param control Control mit IDateTimeControl Interface implementierung
   * @param fieldName Label des Controls
   * @param validationMessage Validierungsmeldung die beim Control angezeigt wird
   * @param validationMessageSummary Validierungsmeldung die im Validation Summary angezeigt wird
   */
  static isValidDate(
    validationMessage: string,
    validationMessageSummary
  ): ValidatorFn {
    return isValidDateValidator(validationMessage, validationMessageSummary);
  }

  /**
   * Validator für min. Anzahl von Uploads
   * @param control Control das Validatiert werden soll. Control muss IUploadControl implementiert haben
   * @param minFiles Min. Anzahl Files die hochgeladen werden müssen
   * @param fieldName Label des Controls
   * @param validationMessage Validierungsmeldung die unterhalb des Controls angezeigt wird
   * @param validationMessageSummary Validierungsmeldung die im Validation Summary angezeigt wird
   */
  static minFiles(
    minFiles: number,
    validationMessage: string,
    validationMessageSummary
  ): ValidatorFn {
    return minFilesValidator(
      minFiles,
      validationMessage,
      validationMessageSummary
    );
  }

  /**
   * Validator für MultiLanguage Control, welcher überprüft ob alle Sprachen erfasst sind.
   * @param control Control das Validatiert werden soll
   * @param languages Sprachen die im Control erfasst werden können.
   * @param fieldName Label des Controls
   * @param validationMessage Validierungsmeldung die unterhalb des Controls angezeigt wird
   * @param validationMessageSummary Validierungsmeldung die im Validation Summary angezeigt wird
   */
  static multilanguageRequired(
    languages: LanguageModel[],
    validationMessage: string,
    validationMessageSummary
  ): ValidatorFn {
    return multilanguageRequiredValidator(
      languages,
      validationMessage,
      validationMessageSummary
    );
  }

  /**
   * Validator für MultiLanguage Control, welcher überprüft ob min. ein Wert erfasst wurde
   * @param control Control das Validatiert werden soll
   * @param languages Sprachen die im Control erfasst werden können.
   * @param fieldName Label des Controls
   * @param validationMessage Validierungsmeldung die unterhalb des Controls angezeigt wird
   * @param validationMessageSummary Validierungsmeldung die im Validation Summary angezeigt wird
   */
  static multilanguageRequiredAny(
    languages: LanguageModel[],
    validationMessage: string,
    validationMessageSummary
  ): ValidatorFn {
    return multilanguageRequiredAnyValidator(
      languages,
      validationMessage,
      validationMessageSummary
    );
  }
}
