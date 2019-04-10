import { Component, EventEmitter, Host, forwardRef, Injector } from '@angular/core';
import { UploadxControlEvent, UploadxOptions, UploadState } from 'ngx-uploadx';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NgUploadCommon } from '@jnetwork/jngcontrols-common';
import { NgFormular } from '@jnetwork/jngcontrols-bootstrap3';
import { NG_VALUE_ACCESSOR, ControlContainer, NG_VALIDATORS } from '@angular/forms';
import { ValidationErrors } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { Input } from '@angular/core';
import { Validation } from '@jnetwork/jngcontrols-common';

export class Ufile {
  name: string;
  uploadId: string;
  progress: number;
  status: string;
  constructor(ufile: UploadState) {
    this.uploadId = ufile.uploadId;
    this.name = ufile.name;
    this.progress = ufile.progress;
    this.status = ufile.status;
  }
}

// https://github.com/kukhariev/ngx-uploadx/

@Component({
  selector: 'ngExampleUpload',
  templateUrl: './upload.html',
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: ExampleUpload },
    { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => ExampleUpload) }
  ],
  // View Provider, damit das Formular an das Control gebunden werden kann
  viewProviders: [{ provide: ControlContainer, useExisting: NgFormular }]

})
export class ExampleUpload extends NgUploadCommon {
  control: UploadxControlEvent;
  uploads: Ufile[];
  options: UploadxOptions;
  private ngUnsubscribe: Subject<any> = new Subject();

  /**
   * Constructor
   */
  constructor( @Host() parent: NgFormular, injector: Injector) {
    super(parent, injector);
    this.uploads = [];
    this.options = {
      concurrency: 1,
      maxRetryAttempts: 3,
      // allowedTypes: 'image/*,video/*',
      allowedTypes: '*',
      url: '/services/api/upload/register',
      token: 'someToken',
      autoUpload: false,
      withCredentials: true,
      chunkSize: 1024 * 16 * 8,
      headers: (f: File) => ({
        'Content-Disposition': `filename=${encodeURI(f.name)}`
      })
    };
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  //#region Properties

  // Definiert das Control als Required
  @Input("isrequired") _isrequired: boolean = false;

  //#endregion

  //#region All File Events

  /**
   * Cancel all Uploaded files
   */
  cancelAll() {
    if (this.HasQueueItem() === true)
      this.control = { action: 'cancelAll' };
  }

  /**
   * Upload all queued Files
   */
  uploadAll() {
    if (this.IsStateToUpload() === true)
      this.control = { action: 'uploadAll' };
  }

  /**
   * Pause all Uploads
   */
  pauseAll() {
    if (this.IsUploading() === true)
      this.control = { action: 'pauseAll' };
  }

  //#endregion

  //#region Singel File Events

  /**
   * Cancel single upload
   * @param uploadId ID of File to cancel
   */
  cancel(uploadId) {
    this.control = { action: 'cancel', uploadId };
  }


  /**
   * Cancel Single File
   * @param uploadId ID of File to Cancel
   */
  pause(uploadId) {
    this.control = { action: 'pause', uploadId };
  }

  /**
   * Upload Single File
   * 
   * @param uploadId ID of File to Upload
   */
  upload(uploadId) {
    this.control = { action: 'upload', uploadId };
  }

  //#endregion

  //#region UI Property Helper

  HasQueueItem(): boolean {
    return this.uploads.length > 0;
  }

  IsStateToUpload(): boolean {
    return this.uploads.filter(itm => itm.status == 'added' || itm.status == 'paused').length > 0;
  }

  IsUploading(): boolean {
    return this.uploads.filter(itm => itm.status == 'uploading').length > 0;
  }

  Filename(): string {
    if (this.uploads.length > 0) {
      return this.uploads[0].name;
    } else {
      return 'Keine Datei ausgewählt';
    }
  }

  HasSuccessUpload(): boolean {
    if (this.uploads.length > 0) {
      return this.uploads.filter(itm => itm.status != 'complete').length == 0;
    } else {
      return false;
    }
  }

  Progress(): number {
    if (this.uploads.length > 0) {
      return this.uploads[0].progress;
    } else {
      return 0;
    }
  }

  //#endregion

  //#region Validation

  validateData(c: AbstractControl): ValidationErrors | null {
    let error: ValidationErrors | null = null;

    if (this._isrequired) {
      error = Validation.required(c, this._label);
    }

    return error;
  }


  //#endregion

  /**
   * Upload Event
   * 
   * @param uploadsOutStream Upload Item
   */
  onUpload(uploadsOutStream: Observable<UploadState>) {

    uploadsOutStream
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((ufile: UploadState) => {

        const index = this.uploads.findIndex(f => f.uploadId === ufile.uploadId);

        if (ufile.status === 'added') {
          this.uploads.push(new Ufile(ufile));
        } else if (ufile.status === 'cancelled') {
          this.uploads.splice(index, 1);
          super.setValue(null);
        }
        else if (ufile.status === 'complete') {
          this.uploads[index].progress = ufile.progress;
          this.uploads[index].status = ufile.status;
          super.setValue(ufile.uploadId);
        } else {
          this.uploads[index].progress = ufile.progress;
          this.uploads[index].status = ufile.status;
        }
      });
  }

}
