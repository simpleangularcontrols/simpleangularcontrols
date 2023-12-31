import { Directive, Input } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { UploadState } from 'ngx-uploadx';
import { SacUploadBase } from '../../common/baseuploadcontrol';
import { IUploadControl } from '../../interfaces/iuploadcontrol';
import { Validation } from '../../validation';

/**
 * Upload Componente für mehrere Files
 */
@Directive()
export class SacUploadMultipleCommon extends SacUploadBase<string[]> {
  /**
   * Max. Files die hochgeladen werden können. 0 deaktiviert das Limit
   */
  @Input()
  public maxfiles: number = 0;

  /**
   * Min. Files die hochgeladen werden müssen. 0 deaktiviert das Limit
   */
  @Input()
  public minfiles: number = 0;

  /**
   * Label für Browse Button
   */
  @Input()
  buttonbrowse: string = 'Browse';

  /**
   * Label für Upload Button
   */
  @Input()
  buttonupload: string = 'Upload';

  /**
   * Resource Key für Validation Message Required bei Control
   */
  @Input() validationmessageminfiles: string = 'VALIDATION_ERROR_FILESMIN';
  /**
   * Resource Key für Validation Message Required in Validation Summary
   */
  @Input()
  validationmessagesummaryminfiles: string =
    'VALIDATION_ERROR_SUMMARY_FILESMIN';

  /**
   * Prüft ob die max. Files in der Queue nicht überschritten werden
   *
   * @param file File das hinzugefügt wurde
   */
  CustomAddValidation(file: UploadState): boolean {
    if (this.maxfiles > 0 && this.uploads.length >= this.maxfiles) {
      this.onfileerror.emit('INVALID_MAXFILES');
      return false;
    } else {
      return true;
    }
  }

  /**
   * Setzt die File ID's der hochgeladen Files in das Model
   *
   * @param file ID des Files welches hochgeladen wurde.
   */
  SetUploadValue(file: UploadState) {
    let documentid: string = null;
    if (file === null) {
      documentid = null;
    } else {
      if (
        file.response !== undefined &&
        file.response !== null &&
        file.response.documentid !== null &&
        file.response.documentid !== undefined
      ) {
        documentid = file.response.documentid;
      } else {
        documentid = file.uploadId;
      }

      // Document ID aktualisieren, damit Wert von Server in Model gesetzt werden kann.
      this.uploads
        .filter((itm) => itm !== null && itm.uploadId === file.uploadId)
        .forEach((itm) => {
          itm.documentid = documentid;
        });
    }

    // List of Files
    const fileIds: string[] = [];

    // Add all Items with Uploaded State to Model
    this.uploads
      .filter((itm) => itm.status === 'complete')
      .forEach((itm) => {
        if (itm.documentid !== null && itm.documentid !== undefined) {
          fileIds.push(itm.documentid);
        }
      });

    if (fileIds.length > 0) {
      super.setValue(fileIds);
    } else {
      super.setValue(null);
    }
  }

  /**
   * Validiert das Control
   *
   * @param c Control
   */
  validateData(c: AbstractControl): ValidationErrors | null {
    let error: ValidationErrors | null = super.validateData(c);

    if (error === null) {
      error = Validation.minFiles(
        this.minfiles,
        this.validationmessageminfiles,
        this.validationmessagesummaryminfiles
      )(c);
    }

    return error;
  }
}
