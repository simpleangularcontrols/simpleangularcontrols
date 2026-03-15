import { LanguageModel } from '../models/languagemodel';
import { emailValidator } from './email.validator';
import { equalsValueValidator } from './equals.validator';
import { isValidDateValidator } from './invaliddate.validator';
import { maxDateValidator } from './maxdate.validator';
import { maxTimeValidator } from './maxtime.validator';
import { maxValueValidator } from './maxvalue.validator';
import { minDateValidator } from './mindate.validator';
import { minFilesValidator } from './minfiles.validator';
import { minTextLengthValidator } from './mintextlength.validator';
import { minTimeValidator } from './mintime.validator';
import { minValueValidator } from './minvalue.validator';
import { multilanguageRequiredValidator } from './multilanguagerequired.validator';
import { multilanguageRequiredAnyValidator } from './multilanguagerequiredany.validator';
import { notEqualsValueValidator } from './notequals.validator';
import { patternValidator } from './pattern.validator';
import { requiredValidator } from './required.validator';
import { CreateValidationError } from './validationerrorcreator';
import { ValidatorFn } from '@angular/forms';
import * as moment_ from 'moment';

// #region Variables

/**
 * Moment
 */
const moment = moment_['default'];

// #endregion Variables

// #region Exported Classes

/**
 * Class with standard validators
 */
export class Validation {
    // #region Public Static Methods

    /**
     * This method is called by every validator. It sets both the errorType of the validated item and the ErrorMessage (according to errorType, FieldName and Parameters).
     * @param errorType Type of the error
     * @param errorMessageKey Error Message Key
     * @param errorMessageValidationSummaryKey Error Message Key for Validation Summary
     * @param fieldName Label or name of the field
     * @param parameters Parameters that can be used as placeholders in messages
     */
    public static GetValidationErrorItem(
        errorType: string,
        errorMessageKey: string,
        errorMessageValidationSummaryKey: string,
        fieldName: string = null,
        parameters: Map<string, any> = new Map<string, any>()
    ): any {
        return CreateValidationError(errorType, errorMessageKey, errorMessageValidationSummaryKey, parameters);
    }

    /**
     * Validates field for email address
     * @param validationMessage Validation message displayed at the control
     * @param validationMessageSummary Validation message displayed in the Validation Summary
     * @returns ValidatorFn validator function
     */
    public static email(validationMessage: string, validationMessageSummary): ValidatorFn {
        return emailValidator(validationMessage, validationMessageSummary);
    }

    /**
     * Validator validate if value is the requiredValue
     * @param requiredValue Value that control should have
     * @param validationMessage Validation message near the control
     * @param validationMessageSummary Validation message inside the validation summary
     * @returns ValidatorFn validator function
     */
    public static equals(requiredValue: any, validationMessage: string, validationMessageSummary): ValidatorFn {
        return equalsValueValidator(requiredValue, validationMessage, validationMessageSummary);
    }

    /**
     * Validator that checks if the value is a date.
     * @param validationMessage Validation message displayed at the control
     * @param validationMessageSummary Validation message displayed in the Validation Summary
     * @returns ValidatorFn validator function
     */
    public static isValidDate(validationMessage: string, validationMessageSummary): ValidatorFn {
        return isValidDateValidator(validationMessage, validationMessageSummary);
    }

    /**
     * Validates if the date is older than maxDate
     * @param maxDate Maximum date allowed
     * @param validationMessage Validation message displayed at the control
     * @param validationMessageSummary Validation message displayed in the Validation Summary
     * @returns ValidatorFn validator function
     */
    public static maxDate(maxDate: Date, validationMessage: string, validationMessageSummary): ValidatorFn {
        return maxDateValidator(maxDate, validationMessage, validationMessageSummary);
    }

    /**
     * Validates if the time is earlier than maxTime.
     * @param maxTime Maximum time allowed
     * @param validationMessage Validation message displayed at the control
     * @param validationMessageSummary Validation message displayed in the Validation Summary
     * @returns ValidatorFn validator function
     */
    public static maxTime(maxTime: Date, validationMessage: string, validationMessageSummary): ValidatorFn {
        return maxTimeValidator(maxTime, validationMessage, validationMessageSummary);
    }

    /**
     * Validator for Max Value
     * @param maxvalue Maximum value allowed
     * @param validationMessage Validation message displayed at the control
     * @param validationMessageSummary Validation message displayed in the Validation Summary
     * @returns ValidatorFn validator function
     */
    public static maxValue(maxvalue: number, validationMessage: string, validationMessageSummary): ValidatorFn {
        return maxValueValidator(maxvalue, validationMessage, validationMessageSummary);
    }

    /**
     * Validates if the date is newer than minDate
     * @param minDate Minimum date allowed
     * @param validationMessage Validation message displayed at the control
     * @param validationMessageSummary Validation message displayed in the Validation Summary
     * @returns ValidatorFn validator function
     */
    public static minDate(minDate: Date, validationMessage: string, validationMessageSummary): ValidatorFn {
        return minDateValidator(minDate, validationMessage, validationMessageSummary);
    }

    /**
     * Validator for min. number of uploads
     * @param minFiles Minimum number of files that must be uploaded
     * @param validationMessage Validation message displayed below the control
     * @param validationMessageSummary Validation message displayed in the Validation Summary
     * @returns ValidatorFn validator function
     */
    public static minFiles(minFiles: number, validationMessage: string, validationMessageSummary): ValidatorFn {
        return minFilesValidator(minFiles, validationMessage, validationMessageSummary);
    }

    /**
     * Validates the length of the value in the control
     * @param mintextlength Minimum length of the value
     * @param validationMessage Validation message displayed at the control
     * @param validationMessageSummary Validation message displayed in the Validation Summary
     * @returns ValidatorFn validator function
     */
    public static minTextLength(
        mintextlength: number,
        validationMessage: string,
        validationMessageSummary
    ): ValidatorFn {
        return minTextLengthValidator(mintextlength, validationMessage, validationMessageSummary);
    }

    /**
     * Validates if the time is later than minTime.
     * @param minTime Minimum time allowed
     * @param validationMessage Validation message displayed at the control
     * @param validationMessageSummary Validation message displayed in the Validation Summary
     * @returns ValidatorFn validator function
     */
    public static minTime(minTime: Date, validationMessage: string, validationMessageSummary: string): ValidatorFn {
        return minTimeValidator(minTime, validationMessage, validationMessageSummary);
    }

    /**
     * Validator that checks if the value is greater than minValue.
     * @param minvalue Minimum value allowed
     * @param validationMessage Validation message displayed at the control
     * @param validationMessageSummary Validation message displayed in the Validation Summary
     * @returns ValidatorFn validator function
     */
    public static minValue(minvalue: number, validationMessage: string, validationMessageSummary): ValidatorFn {
        return minValueValidator(minvalue, validationMessage, validationMessageSummary);
    }

    /**
     * Validator for MultiLanguage Control that checks if a value has been entered in all languages
     * @param languages Languages that can be captured in the control
     * @param validationMessage Validation message displayed below the control
     * @param validationMessageSummary Validation message displayed in the Validation Summary
     * @returns ValidatorFn validator function
     */
    public static multilanguageRequired(
        languages: LanguageModel[],
        validationMessage: string,
        validationMessageSummary
    ): ValidatorFn {
        return multilanguageRequiredValidator(languages, validationMessage, validationMessageSummary);
    }

    /**
     * Validator for MultiLanguage Control that checks if at least one value has been entered
     * @param languages Languages that can be captured in the control
     * @param validationMessage Validation message displayed below the control
     * @param validationMessageSummary Validation message displayed in the Validation Summary
     * @returns ValidatorFn validator function
     */
    public static multilanguageRequiredAny(
        languages: LanguageModel[],
        validationMessage: string,
        validationMessageSummary
    ): ValidatorFn {
        return multilanguageRequiredAnyValidator(languages, validationMessage, validationMessageSummary);
    }

    /**
     * Validator validate if value is not the invalidValue
     * @param invalidValue Value that control should not have
     * @param validationMessage Validation message near the control
     * @param validationMessageSummary Validation message inside the validation summary
     * @returns ValidatorFn validator function
     */
    public static notequals(invalidValue: any, validationMessage: string, validationMessageSummary): ValidatorFn {
        return notEqualsValueValidator(invalidValue, validationMessage, validationMessageSummary);
    }

    /**
     * Validation with a RegEx pattern
     * @param pattern RegEx pattern that the value must match
     * @param validationMessage Validation message displayed below the control
     * @param validationMessageSummary Validation message displayed in the Validation Summary
     * @returns ValidatorFn validator function
     */
    public static pattern(pattern: string, validationMessage: string, validationMessageSummary): ValidatorFn {
        return patternValidator(pattern, validationMessage, validationMessageSummary);
    }

    /**
     * Validator for Required State
     * @returns ValidatorFn validator function
     * @param validationMessage Validation message that
     * @param validationMessageSummary Validation message that is displayed in the Validation Summary
     */
    public static required(validationMessage: string, validationMessageSummary): ValidatorFn {
        return requiredValidator(validationMessage, validationMessageSummary);
    }

    // #endregion Public Static Methods
}

// #endregion Exported Classes
