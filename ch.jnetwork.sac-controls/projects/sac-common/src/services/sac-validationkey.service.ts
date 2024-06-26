import { Injectable, InjectionToken } from '@angular/core';
import { ISacValidationKeyService } from '../interfaces/ISacValidationKeyService';

@Injectable({ providedIn: 'root' })
export class SacDefaultValidationKeyService
  implements ISacValidationKeyService
{
  // #region Public Getters And Setters

  public get ConfirmDefaultButtonNo(): string {
    return 'CONFIRM_BUTTON_NO';
  }

  public get ConfirmDefaultButtonYes(): string {
    return 'CONFIRM_BUTTON_YES';
  }

  public get FilebrowserButtonDelete(): string {
    return 'FILEBROWSER_DELETE';
  }

  public get FilebrowserButtonNewFolder(): string {
    return 'FILEBROWSER_NEWFOLDER';
  }

  public get FilebrowserButtonRefresh(): string {
    return 'FILEBROWSER_REFRESH';
  }

  public get FilebrowserButtonUpload(): string {
    return 'FILEBROWSER_UPLOAD';
  }

  public get FilebrowserConfirmTextDeleteFile(): string {
    return 'FILEBROWSER_CONFIRM_DELETEFILE';
  }

  public get FilebrowserConfirmTextDeleteFolder(): string {
    return 'FILEBROWSER_CONFIRM_DELETEFOLDER';
  }

  public get FilebrowserGridFilename(): string {
    return 'FILEBROWSER_GRID_FILE';
  }

  public get FilebrowserGridNoFiles(): string {
    return 'FILEBROWSER_NO_FILES';
  }

  public get FilebrowserGridSize(): string {
    return 'FILEBROWSER_GRID_SIZE';
  }

  public get PagingEntries(): string {
    return 'PAGING_PAGEENTRIESTEXT';
  }

  public get PagingPageOf(): string {
    return 'PAGING_PAGEOFTEXT';
  }

  public get TinyMceFileselectCancel(): string {
    return 'TINYMCE_FILESELECT_CANCEL';
  }

  public get TinyMceFileselectDialogtitle(): string {
    return 'TINYMCE_FILESELECT_DIALOGTITLE';
  }

  public get TinyMceFileselectOk(): string {
    return 'TINYMCE_FILESELECT_OK';
  }

  public get UploadButtonBrowse(): string {
    return 'UPLOAD_BUTTON_BROWSE';
  }

  public get UploadButtonUpload(): string {
    return 'UPLOAD_BUTTON_UPLOAD';
  }

  public get UploadNoFilesSelected(): string {
    return 'UPLOAD_NO_FILE_SELECTED';
  }

  public get ValidationErrorDatetimeFormat(): string {
    return 'VALIDATION_ERROR_DATETIMEFORMAT';
  }

  public get ValidationErrorEmail(): string {
    return 'VALIDATION_ERROR_EMAIL';
  }

  public get ValidationErrorFilesMin(): string {
    return 'VALIDATION_ERROR_FILESMIN';
  }

  public get ValidationErrorMaxDate(): string {
    return 'VALIDATION_ERROR_MAXDATE';
  }

  public get ValidationErrorMaxTime(): string {
    return 'VALIDATION_ERROR_MAXTIME';
  }

  public get ValidationErrorMaxValue(): string {
    return 'VALIDATION_ERROR_MAXVALUE';
  }

  public get ValidationErrorMinDate(): string {
    return 'VALIDATION_ERROR_MINDATE';
  }

  public get ValidationErrorMinLength(): string {
    return 'VALIDATION_ERROR_MINLENGTH';
  }

  public get ValidationErrorMinTime(): string {
    return 'VALIDATION_ERROR_MINTIME';
  }

  public get ValidationErrorMinValue(): string {
    return 'VALIDATION_ERROR_MINVALUE';
  }

  public get ValidationErrorMultilanguageRequired(): string {
    return 'VALIDATION_ERROR_MULTILANGUAGEREQUIRED';
  }

  public get ValidationErrorMultilanguageRequiredAny(): string {
    return 'VALIDATION_ERROR_MULTILANGUAGEREQUIREDANY';
  }

  public get ValidationErrorPattern(): string {
    return 'VALIDATION_ERROR_PATTERN';
  }

  // Generic Messages
  public get ValidationErrorRequired(): string {
    return 'VALIDATION_ERROR_REQUIRED';
  }

  public get ValidationErrorSummaryDatetimeFormat(): string {
    return 'VALIDATION_ERROR_SUMMARY_DATETIMEFORMAT';
  }

  public get ValidationErrorSummaryEmail(): string {
    return 'VALIDATION_ERROR_SUMMARY_EMAIL';
  }

  public get ValidationErrorSummaryFilesMin(): string {
    return 'VALIDATION_ERROR_SUMMARY_FILESMIN';
  }

  public get ValidationErrorSummaryMaxDate(): string {
    return 'VALIDATION_ERROR_SUMMARY_MAXDATE';
  }

  public get ValidationErrorSummaryMaxTime(): string {
    return 'VALIDATION_ERROR_SUMMARY_MAXTIME';
  }

  public get ValidationErrorSummaryMaxValue(): string {
    return 'VALIDATION_ERROR_SUMMARY_MAXVALUE';
  }

  public get ValidationErrorSummaryMinDate(): string {
    return 'VALIDATION_ERROR_SUMMARY_MINDATE';
  }

  public get ValidationErrorSummaryMinLength(): string {
    return 'VALIDATION_ERROR_SUMMARY_MINLENGTH';
  }

  public get ValidationErrorSummaryMinTime(): string {
    return 'VALIDATION_ERROR_SUMMARY_MINTIME';
  }

  public get ValidationErrorSummaryMinValue(): string {
    return 'VALIDATION_ERROR_SUMMARY_MINVALUE';
  }

  public get ValidationErrorSummaryMultilanguageRequired(): string {
    return 'VALIDATION_ERROR_SUMMARY_MULTILANGUAGEREQUIRED';
  }

  public get ValidationErrorSummaryMultilanguageRequiredAny(): string {
    return 'VALIDATION_ERROR_SUMMARY_MULTILANGUAGEREQUIREDANY';
  }

  public get ValidationErrorSummaryPattern(): string {
    return 'VALIDATION_ERROR_SUMMARY_PATTERN';
  }

  public get ValidationErrorSummaryRequired(): string {
    return 'VALIDATION_ERROR_SUMMARY_REQUIRED';
  }

  // #endregion Public Getters And Setters
}

/**
 * injection token for localisation service
 */
export const SACVALIDATIONKEY_SERVICE =
  new InjectionToken<ISacValidationKeyService>('SacValidationkeyService');
