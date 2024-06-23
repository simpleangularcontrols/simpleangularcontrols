import { Injectable, InjectionToken } from '@angular/core';
import { ISacValidationKeyService } from '../interfaces/ISacValidationKeyService';

@Injectable({ providedIn: 'root' })
export class SacDefaultValidationKeyService
  implements ISacValidationKeyService
{
  // #region Properties

  public ConfirmDefaultButtonNo: string = 'CONFIRM_BUTTON_NO';
  public ConfirmDefaultButtonYes: string = 'CONFIRM_BUTTON_YES';
  public FilebrowserButtonDelete: string = 'FILEBROWSER_DELETE';
  public FilebrowserButtonNewFolder: string = 'FILEBROWSER_NEWFOLDER';
  public FilebrowserButtonRefresh: string = 'FILEBROWSER_REFRESH';
  public FilebrowserButtonUpload: string = 'FILEBROWSER_UPLOAD';
  public FilebrowserConfirmTextDeleteFile: string =
    'FILEBROWSER_CONFIRM_DELETEFILE';
  public FilebrowserConfirmTextDeleteFolder: string =
    'FILEBROWSER_CONFIRM_DELETEFOLDER';
  public FilebrowserGridFilename: string = 'FILEBROWSER_GRID_FILE';
  public FilebrowserGridNoFiles: string = 'FILEBROWSER_NO_FILES';
  public FilebrowserGridSize: string = 'FILEBROWSER_GRID_SIZE';
  public PagingEntries: string = 'PAGING_PAGEENTRIESTEXT';
  public PagingPageOf: string = 'PAGING_PAGEOFTEXT';
  public TinyMceFileselectCancel: string = 'TINYMCE_FILESELECT_CANCEL';
  public TinyMceFileselectDialogtitle: string =
    'TINYMCE_FILESELECT_DIALOGTITLE';
  public TinyMceFileselectOk: string = 'TINYMCE_FILESELECT_OK';
  public UploadButtonBrowse: string = 'UPLOAD_BUTTON_BROWSE';
  public UploadButtonUpload: string = 'UPLOAD_BUTTON_UPLOAD';
  public UploadNoFilesSelected: string = 'UPLOAD_NO_FILE_SELECTED';
  public ValidationErrorDatetimeFormat: string =
    'VALIDATION_ERROR_DATETIMEFORMAT';
  public ValidationErrorEmail: string = 'VALIDATION_ERROR_EMAIL';
  public ValidationErrorFilesMin: string = 'VALIDATION_ERROR_FILESMIN';
  public ValidationErrorMaxDate: string = 'VALIDATION_ERROR_MAXDATE';
  public ValidationErrorMaxTime: string = 'VALIDATION_ERROR_MAXTIME';
  public ValidationErrorMaxValue: string = 'VALIDATION_ERROR_MAXVALUE';
  public ValidationErrorMinDate: string = 'VALIDATION_ERROR_MINDATE';
  public ValidationErrorMinLength: string = 'VALIDATION_ERROR_MINLENGTH';
  public ValidationErrorMinTime: string = 'VALIDATION_ERROR_MINTIME';
  public ValidationErrorMinValue: string = 'VALIDATION_ERROR_MINVALUE';
  public ValidationErrorMultilanguageRequired: string =
    'VALIDATION_ERROR_MULTILANGUAGEREQUIRED';
  public ValidationErrorMultilanguageRequiredAny: string =
    'VALIDATION_ERROR_MULTILANGUAGEREQUIREDANY';
  public ValidationErrorPattern: string = 'VALIDATION_ERROR_PATTERN';
  // Generic Messages
  public ValidationErrorRequired: string = 'VALIDATION_ERROR_REQUIRED';
  public ValidationErrorSummaryDatetimeFormat: string =
    'VALIDATION_ERROR_SUMMARY_DATETIMEFORMAT';
  public ValidationErrorSummaryEmail: string = 'VALIDATION_ERROR_SUMMARY_EMAIL';
  public ValidationErrorSummaryFilesMin: string =
    'VALIDATION_ERROR_SUMMARY_FILESMIN';
  public ValidationErrorSummaryMaxDate: string =
    'VALIDATION_ERROR_SUMMARY_MAXDATE';
  public ValidationErrorSummaryMaxTime: string =
    'VALIDATION_ERROR_SUMMARY_MAXTIME';
  public ValidationErrorSummaryMaxValue: string =
    'VALIDATION_ERROR_SUMMARY_MAXVALUE';
  public ValidationErrorSummaryMinDate: string =
    'VALIDATION_ERROR_SUMMARY_MINDATE';
  public ValidationErrorSummaryMinLength: string =
    'VALIDATION_ERROR_SUMMARY_MINLENGTH';
  public ValidationErrorSummaryMinTime: string =
    'VALIDATION_ERROR_SUMMARY_MINTIME';
  public ValidationErrorSummaryMinValue: string =
    'VALIDATION_ERROR_SUMMARY_MINVALUE';
  public ValidationErrorSummaryMultilanguageRequired: string =
    'VALIDATION_ERROR_SUMMARY_MULTILANGUAGEREQUIRED';
  public ValidationErrorSummaryMultilanguageRequiredAny: string =
    'VALIDATION_ERROR_SUMMARY_MULTILANGUAGEREQUIREDANY';
  public ValidationErrorSummaryPattern: string =
    'VALIDATION_ERROR_SUMMARY_PATTERN';
  public ValidationErrorSummaryRequired: string =
    'VALIDATION_ERROR_SUMMARY_REQUIRED';

  // #endregion Properties
}

/**
 * injection token for localisation service
 */
export const SACVALIDATIONKEY_SERVICE =
  new InjectionToken<ISacValidationKeyService>('SacValidationkeyService');
