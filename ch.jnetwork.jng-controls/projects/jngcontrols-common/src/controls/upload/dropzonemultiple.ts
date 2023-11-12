import { Directive, Input, OnInit } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { UploadState } from 'ngx-uploadx';
import { NgUploadBase } from '../../common/baseuploadcontrol';
import { IUploadControl } from '../../interfaces/iuploadcontrol';
import { Validation } from '../../validation';

/**
 * Upload Komponente für ein einzelnes File
 */
@Directive()
export class NgDropzoneMultipleCommon
  extends NgUploadBase<string[]>
  implements OnInit, IUploadControl
{
  /**
   * Property wenn Drag Event aktiv ist (Maus über Zone)
   */
  public active = false;

  /**
   * Höhe des Upload Controls
   */
  @Input()
  public uploadheight: string = null;

  /**
   * Max. Anzahl Files die hochgeladen werden können
   */
  @Input('maxfiles')
  public maxfiles: number = 0;

  /**
   * Min. Anzahl Files die hochgeladen werden müssen
   */
  @Input('minfiles')
  public minfiles: number = 0;

  /**
   * Resource Key für Validation Message Required bei Control
   */
  @Input('validationmessageminfiles') _validationMessageMinFiles: string =
    'VALIDATION_ERROR_FILESMIN';
  /**
   * Resource Key für Validation Message Required in Validation Summary
   */
  @Input('validationmessagesummaryminfiles')
  _validationMessageMinFilesSummary: string =
    'VALIDATION_ERROR_SUMMARY_FILESMIN';

  /**
   * Ervent wenn das Control initialisert wird
   */
  ngOnInit() {
    super.ngOnInit();

    this.autoupload = true;
  }

  /**
   * Methode für Drag and Drop von Files
   * @param event Drag Event
   */
  dropHandler(event: DragEvent): void {
    if (
      event.dataTransfer &&
      event.dataTransfer.files &&
      event.dataTransfer.files.item(0)
    ) {
      event.stopPropagation();
      event.preventDefault();
      this.active = false;
      this.uploadService.handleFiles(event.dataTransfer.files);
    }
  }

  /**
   * Methode wenn Drag in die Zone eintritt
   * @param event DragEnter Event
   */
  onDragOver(event: DragEvent): void {
    if (
      event.dataTransfer &&
      event.dataTransfer.files &&
      event.dataTransfer.types.every((itm) => itm === 'Files') &&
      event.dataTransfer.types.length > 0
    ) {
      event.dataTransfer.dropEffect = 'copy';
      event.stopPropagation();
      event.preventDefault();
      this.active = true;
    }
  }

  /**
   * Methode wenn Drag die Zone verlässt
   * @param event DragLeave Event
   */
  onDragLeave(event: DragEvent): void {
    this.active = false;
  }

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
   * Gibt die Anzahl der komplett hochgeladenen Files zurück
   */
  UploadedFileCount(): number {
    return this.uploads.filter((itm) => itm.status === 'complete').length;
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
        this,
        this.minfiles,
        this._label,
        this._validationMessageMinFiles,
        this._validationMessageMinFilesSummary
      );
    }

    return error;
  }
}
