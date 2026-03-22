import { ISacValidationKeyService } from '../interfaces/ISacValidationKeyService';
import { Injectable, InjectionToken } from '@angular/core';

// #region Variables

/**
 * injection token for localisation service
 */
export const SACVALIDATIONKEY_SERVICE = new InjectionToken<ISacValidationKeyService>('SacValidationkeyService');

// #endregion Variables

// #region Exported Classes

/**
 * Default implementation for validation key resolution.
 *
 * Provides predefined resource keys for many standard validation messages and
 * action labels used throughout the control library.
 */
@Injectable({ providedIn: 'root' })
export class SacDefaultValidationKeyService implements ISacValidationKeyService {
    // #region Public Getters And Setters

    /**
     * Returns the validation key for the default negative confirm button.
     */
    public get ConfirmDefaultButtonNo(): string {
        return 'CONFIRM_BUTTON_NO';
    }

    /**
     * Returns the validation key for the default positive confirm button.
     */
    public get ConfirmDefaultButtonYes(): string {
        return 'CONFIRM_BUTTON_YES';
    }

    /**
     * Returns the validation key for the browser delete button text.
     */
    public get FilebrowserButtonDelete(): string {
        return 'FILEBROWSER_DELETE';
    }

    /**
     * Returns the validation key for the browser new folder button text.
     */
    public get FilebrowserButtonNewFolder(): string {
        return 'FILEBROWSER_NEWFOLDER';
    }

    /**
     * Returns the validation key for the browser refresh button text.
     */
    public get FilebrowserButtonRefresh(): string {
        return 'FILEBROWSER_REFRESH';
    }

    /**
     * Returns the validation key for the browser upload button text.
     */
    public get FilebrowserButtonUpload(): string {
        return 'FILEBROWSER_UPLOAD';
    }

    /**
     * Returns the validation key for the delete-file confirmation text.
     */
    public get FilebrowserConfirmTextDeleteFile(): string {
        return 'FILEBROWSER_CONFIRM_DELETEFILE';
    }

    /**
     * Returns the validation key for the delete-folder confirmation text.
     */
    public get FilebrowserConfirmTextDeleteFolder(): string {
        return 'FILEBROWSER_CONFIRM_DELETEFOLDER';
    }

    /**
     * Returns the validation key for the browser file-name column title.
     */
    public get FilebrowserGridFilename(): string {
        return 'FILEBROWSER_GRID_FILE';
    }

    /**
     * Returns the validation key used when no files are available.
     */
    public get FilebrowserGridNoFiles(): string {
        return 'FILEBROWSER_NO_FILES';
    }

    /**
     * Returns the validation key for the browser file-size column title.
     */
    public get FilebrowserGridSize(): string {
        return 'FILEBROWSER_GRID_SIZE';
    }

    /**
     * Returns the validation key for the paging page-size text.
     */
    public get PagingEntries(): string {
        return 'PAGING_PAGEENTRIESTEXT';
    }

    /**
     * Returns the validation key for the paging current-page text.
     */
    public get PagingPageOf(): string {
        return 'PAGING_PAGEOFTEXT';
    }

    /**
     * Returns the validation key for the TinyMCE file-select cancel button.
     */
    public get TinyMceFileselectCancel(): string {
        return 'TINYMCE_FILESELECT_CANCEL';
    }

    /**
     * Returns the validation key for the TinyMCE file-select dialog title.
     */
    public get TinyMceFileselectDialogtitle(): string {
        return 'TINYMCE_FILESELECT_DIALOGTITLE';
    }

    /**
     * Returns the validation key for the TinyMCE file-select confirm button.
     */
    public get TinyMceFileselectOk(): string {
        return 'TINYMCE_FILESELECT_OK';
    }

    /**
     * Returns the validation key for the upload browse button text.
     */
    public get UploadButtonBrowse(): string {
        return 'UPLOAD_BUTTON_BROWSE';
    }

    /**
     * Returns the validation key for the upload action button text.
     */
    public get UploadButtonUpload(): string {
        return 'UPLOAD_BUTTON_UPLOAD';
    }

    /**
     * Returns the validation key used when no file is selected.
     */
    public get UploadNoFilesSelected(): string {
        return 'UPLOAD_NO_FILE_SELECTED';
    }

    /**
     * Returns the validation key for date-time format errors.
     */
    public get ValidationErrorDatetimeFormat(): string {
        return 'VALIDATION_ERROR_DATETIMEFORMAT';
    }

    /**
     * Returns the validation key for email validation errors.
     */
    public get ValidationErrorEmail(): string {
        return 'VALIDATION_ERROR_EMAIL';
    }

    /**
     * Returns the validation key for minimum-file-count errors.
     */
    public get ValidationErrorFilesMin(): string {
        return 'VALIDATION_ERROR_FILESMIN';
    }

    /**
     * Returns the validation key for maximum-date errors.
     */
    public get ValidationErrorMaxDate(): string {
        return 'VALIDATION_ERROR_MAXDATE';
    }

    /**
     * Returns the validation key for maximum-time errors.
     */
    public get ValidationErrorMaxTime(): string {
        return 'VALIDATION_ERROR_MAXTIME';
    }

    /**
     * Returns the validation key for maximum-value errors.
     */
    public get ValidationErrorMaxValue(): string {
        return 'VALIDATION_ERROR_MAXVALUE';
    }

    /**
     * Returns the validation key for minimum-date errors.
     */
    public get ValidationErrorMinDate(): string {
        return 'VALIDATION_ERROR_MINDATE';
    }

    /**
     * Returns the validation key for minimum-text-length errors.
     */
    public get ValidationErrorMinTextLength(): string {
        return 'VALIDATION_ERROR_MINTEXTLENGTH';
    }

    /**
     * Returns the validation key for minimum-time errors.
     */
    public get ValidationErrorMinTime(): string {
        return 'VALIDATION_ERROR_MINTIME';
    }

    /**
     * Returns the validation key for minimum-value errors.
     */
    public get ValidationErrorMinValue(): string {
        return 'VALIDATION_ERROR_MINVALUE';
    }

    /**
     * Returns the validation key for required multilanguage fields.
     */
    public get ValidationErrorMultilanguageRequired(): string {
        return 'VALIDATION_ERROR_MULTILANGUAGEREQUIRED';
    }

    /**
     * Returns the validation key when at least one multilanguage value is required.
     */
    public get ValidationErrorMultilanguageRequiredAny(): string {
        return 'VALIDATION_ERROR_MULTILANGUAGEREQUIREDANY';
    }

    /**
     * Returns the validation key for pattern-mismatch errors.
     */
    public get ValidationErrorPattern(): string {
        return 'VALIDATION_ERROR_PATTERN';
    }

    // Generic Messages
    /**
     * Returns the validation key for required-field errors.
     */
    public get ValidationErrorRequired(): string {
        return 'VALIDATION_ERROR_REQUIRED';
    }

    /**
     * Returns the summary validation key for date-time format errors.
     */
    public get ValidationErrorSummaryDatetimeFormat(): string {
        return 'VALIDATION_ERROR_SUMMARY_DATETIMEFORMAT';
    }

    /**
     * Returns the summary validation key for email errors.
     */
    public get ValidationErrorSummaryEmail(): string {
        return 'VALIDATION_ERROR_SUMMARY_EMAIL';
    }

    /**
     * Returns the summary validation key for minimum-file-count errors.
     */
    public get ValidationErrorSummaryFilesMin(): string {
        return 'VALIDATION_ERROR_SUMMARY_FILESMIN';
    }

    /**
     * Returns the summary validation key for maximum-date errors.
     */
    public get ValidationErrorSummaryMaxDate(): string {
        return 'VALIDATION_ERROR_SUMMARY_MAXDATE';
    }

    /**
     * Returns the summary validation key for maximum-time errors.
     */
    public get ValidationErrorSummaryMaxTime(): string {
        return 'VALIDATION_ERROR_SUMMARY_MAXTIME';
    }

    /**
     * Returns the summary validation key for maximum-value errors.
     */
    public get ValidationErrorSummaryMaxValue(): string {
        return 'VALIDATION_ERROR_SUMMARY_MAXVALUE';
    }

    /**
     * Returns the summary validation key for minimum-date errors.
     */
    public get ValidationErrorSummaryMinDate(): string {
        return 'VALIDATION_ERROR_SUMMARY_MINDATE';
    }

    /**
     * Returns the summary validation key for minimum-text-length errors.
     */
    public get ValidationErrorSummaryMinTextLength(): string {
        return 'VALIDATION_ERROR_SUMMARY_MINTEXTLENGTH';
    }

    /**
     * Returns the summary validation key for minimum-time errors.
     */
    public get ValidationErrorSummaryMinTime(): string {
        return 'VALIDATION_ERROR_SUMMARY_MINTIME';
    }

    /**
     * Returns the summary validation key for minimum-value errors.
     */
    public get ValidationErrorSummaryMinValue(): string {
        return 'VALIDATION_ERROR_SUMMARY_MINVALUE';
    }

    /**
     * Returns the summary validation key for required multilanguage-field errors.
     */
    public get ValidationErrorSummaryMultilanguageRequired(): string {
        return 'VALIDATION_ERROR_SUMMARY_MULTILANGUAGEREQUIRED';
    }

    /**
     * Returns the summary validation key when any multilanguage value is required.
     */
    public get ValidationErrorSummaryMultilanguageRequiredAny(): string {
        return 'VALIDATION_ERROR_SUMMARY_MULTILANGUAGEREQUIREDANY';
    }

    /**
     * Returns the summary validation key for pattern-mismatch errors.
     */
    public get ValidationErrorSummaryPattern(): string {
        return 'VALIDATION_ERROR_SUMMARY_PATTERN';
    }

    /**
     * Returns the summary validation key for required-field errors.
     */
    public get ValidationErrorSummaryRequired(): string {
        return 'VALIDATION_ERROR_SUMMARY_REQUIRED';
    }

    // #endregion Public Getters And Setters
}

// #endregion Exported Classes
