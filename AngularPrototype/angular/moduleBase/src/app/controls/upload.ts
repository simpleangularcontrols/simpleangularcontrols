import { Component, EventEmitter, Host, forwardRef, Injector, ViewChild, Input, Output } from '@angular/core';
import { OnInit, OnDestroy, ElementRef, Renderer2, ContentChild } from '@angular/core';
import { UploadxControlEvent, UploadxOptions, UploadState, UploadxService } from 'ngx-uploadx';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NgUploadCommon } from '@jnetwork/jngcontrols-common';
import { NgFormular } from '@jnetwork/jngcontrols-bootstrap3';
import { NG_VALUE_ACCESSOR, ControlContainer, NG_VALIDATORS } from '@angular/forms';
import { ValidationErrors, AbstractControl } from '@angular/forms';
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
export class ExampleUpload extends NgUploadCommon implements OnInit, OnDestroy {
  uploads: Ufile[];
  private options: UploadxOptions;
  private uploadService: UploadxService;
  private _allowedtypes: string = "*";
  private _autoupload: boolean = false;
  private _enablepause: boolean = true;

  @Input("allowedtypes")
  set allowedtypes(types: string) {
    this._allowedtypes = types;
    this.setAllowedTypes(types);
  }
  get allowedtypes(): string {
    return this._allowedtypes;
  }

  @Input("autoupload")
  set autoupload(v: boolean) {
    this._autoupload = v;
    this.options.autoUpload = v;
    this.uploadService.connect(this.options);
  }
  get autoupload(): boolean {
    return this._autoupload;
  }

  @Input("enablepause")
  set enablepause(v: boolean) {
    this._enablepause = v;
  }
  get enablepause(): boolean {
    return this._enablepause;
  }

  @Input("maxfilesize") maxfilesize: number = 0;

  @Output("fileerror") onfileerror = new EventEmitter<string>();

  // File Input Control
  @ViewChild("files")
  private uploadInput: ElementRef;
  // Listener für Files
  listenerFn: () => void;

  /**
   * Constructor
   */
  constructor( @Host() parent: NgFormular, injector: Injector, private renderer: Renderer2) {
    super(parent, injector);

    this.uploads = [];
    this.options = {
      concurrency: 1,
      maxRetryAttempts: 3,
      // allowedTypes: 'image/*,video/*',
      allowedTypes: '*',
      url: '/services/api/upload/register',
      token: 'someToken',
      autoUpload: this._autoupload,
      withCredentials: true,
      chunkSize: 1024 * 16 * 8,
      headers: (f: File) => ({
        'Content-Disposition': `filename=${encodeURI(f.name)}`
      })
    };

    // Init new Service Instance
    this.uploadService = new UploadxService();
    this.uploadService.init(this.options);

    // Subscripe Event for State changes
    this.uploadService.events.subscribe((ufile: UploadState) => this.onUpload(ufile));
  }

  /**
   * Initialisiert das Control
   */
  ngOnInit() {
    super.ngOnInit();
    // Init Event Listener for Input File Control and Handling Files
    this.listenerFn = this.renderer.listen(this.uploadInput.nativeElement, 'change', this.fileListener);
    this.setAllowedTypes(this._allowedtypes);
  }

  /**
   * Destroy des Controls
   */
  ngOnDestroy() {
    if (this.listenerFn) {
      this.listenerFn();
    }
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
      this.uploadService.control({ action: 'cancelAll' });
  }

  /**
   * Upload all queued Files
   */
  uploadAll() {
    if (this.IsStateToUpload() === true)
      this.uploadService.control({ action: 'uploadAll' });
  }

  /**
   * Pause all Uploads
   */
  pauseAll() {
    if (this.IsUploading() === true)
      this.uploadService.control({ action: 'pauseAll' });
  }

  //#endregion

  //#region Singel File Events

  /**
   * Cancel single upload
   * @param uploadId ID of File to cancel
   */
  cancel(uploadId) {
    this.uploadService.control({ action: 'cancel', uploadId: uploadId });
  }


  /**
   * Cancel Single File
   * @param uploadId ID of File to Cancel
   */
  pause(uploadId) {
    this.uploadService.control({ action: 'pause', uploadId });
  }

  /**
   * Upload Single File
   * 
   * @param uploadId ID of File to Upload
   */
  upload(uploadId) {
    this.uploadService.control({ action: 'upload', uploadId });
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

  IsPaused(): boolean {
    return this.uploads.filter(itm => itm.status == 'paused').length > 0;
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
   * Setzt die erlaubten Datentypen für den Upload
   * 
   * @param types Erlaubte File Extensions
   */
  private setAllowedTypes(types: string) {
    this.renderer.setAttribute(this.uploadInput.nativeElement, "accept", types);
    this.options.allowedTypes = types;
  }

  /**
   * Prüft ob die Dateierweiterung gültig ist
   * 
   * @param filename Dateiname
   */
  private isExtensionValid(filename: string): boolean {

    if (this._allowedtypes === "*")
      return true;

    let isValid: boolean = false;
    let extensions: string[] = this._allowedtypes.split('|');

    extensions.forEach(itm => {
      if (filename.endsWith(itm))
        isValid = true;
    });

    return isValid;
  }

  /**
   * Prüft ob das File nicht zu gross ist.
   * 
   * @param filesize Max File Size in Bytes
   */
  private isFileSizeValid(filesize: number): boolean {
    if (this.maxfilesize === 0)
      return true;

    return this.maxfilesize >= filesize
  }

  /**
   * Upload Event
   * 
   * @param uploadsOutStream Upload Item
   */
  onUpload(ufile: UploadState) {
    const index = this.uploads.findIndex(f => f.uploadId === ufile.uploadId);

    if (ufile.status === 'added') {
      if (this.isExtensionValid(ufile.name) && this.isFileSizeValid(ufile.size)) {
        this.uploads.push(new Ufile(ufile));
      } else {
        this.cancel(ufile.uploadId);

        if (!this.isExtensionValid(ufile.name))
          this.onfileerror.emit("INVALID_EXTENSION");
        else if (!this.isFileSizeValid(ufile.size))
          this.onfileerror.emit("INVALID_FILESIZE");
      }
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
  }

  /**
   * Handling von neuen Files im Input Control
   */
  fileListener = () => {
    if (this.uploadInput.nativeElement.files) {
      this.uploadService.handleFileList(this.uploadInput.nativeElement.files);
    }
  };
}
