import { NgUploadBase } from '../../common/baseuploadcontrol';
import { UploadState } from 'ngx-uploadx';
import { Input } from '@angular/core';
import { AbstractControl, ValidationErrors, } from "@angular/forms";
import { Validation } from "../../validation";
import { IUploadControl } from '../../interfaces/iuploadcontrol';

/**
 * Upload Componente für mehrere Files
 */
export class NgUploadMultipleCommon extends NgUploadBase<string[]> implements IUploadControl  {

  @Input("maxfiles")
  public maxfiles: number = 0;

  @Input("minfiles")
  public minfiles: number = 0;

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
    let fileIds: string[] = [];

    // Add all Items with Uploaded State to Model
    this.uploads.filter(itm => itm.status === 'complete').forEach(itm => fileIds.push(itm.uploadId));

    if (fileIds.length > 0)
      super.setValue(fileIds);
    else
      super.setValue(null);
  }

  /**
   * Gibt die Anzahl der komplett hochgeladenen Files zurück
   */
  UploadedFileCount(): number {
    return this.uploads.filter(itm => itm.status === 'complete').length;
  }

  /**
   * Validiert das Control
   * 
   * @param c Control
   */
  validateData(c: AbstractControl): ValidationErrors | null {
    let error: ValidationErrors | null = super.validateData(c);

    if (error === null) {
      error = Validation.minFiles(this, this.minfiles, this._label);
    }

    return error;
  }

}
