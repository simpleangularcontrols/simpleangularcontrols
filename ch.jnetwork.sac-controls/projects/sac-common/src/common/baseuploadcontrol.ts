import {
  Directive,
  ElementRef,
  EventEmitter,
  Injector,
  Input,
  NgZone,
  OnDestroy,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import {
  IdService,
  UploadState,
  UploadxOptions,
  UploadxService,
  UPLOADX_AJAX,
  UPLOADX_FACTORY_OPTIONS,
  UPLOADX_OPTIONS,
} from 'ngx-uploadx';
import {
  InternalLanguageResourceService,
  LANGUAGERESOURCE_SERVICE,
} from '../services/languageresource.service';
import { SacFormCommon } from '../controls/form/form';
import { ILanguageResourceService } from '../interfaces/ilanguageresource';
import { Validation } from '../validation';
import { SacBaseModelControl } from './basemodelcontrol';
import { Observable, of } from 'rxjs';
import { IUploadControl } from '../interfaces/iuploadcontrol';

/**
 * Klasse für den Upload einer Datei in der Upload Component
 */
export class SacUploadFile {
  /**
   * Dateiname
   */
  name: string;
  /**
   * Upload ID
   */
  uploadId: string;
  /**
   * Upload Fortschritt
   */
  progress: number;
  /**
   * Upload Status
   */
  status: string;
  /**
   * Document ID
   */
  documentid: string;

  /**
   * Konstruktor
   * @param ufile Upload Status
   */
  constructor(ufile: UploadState) {
    this.uploadId = ufile.uploadId;
    this.name = ufile.name;
    this.progress = ufile.progress;
    this.status = ufile.status;
    this.documentid = null;
  }
}

/**
 * Base Klasse für Uploader Control
 */
@Directive()
export abstract class SacUploadBase<VALUE>
  extends SacBaseModelControl<VALUE>
  implements OnInit, OnDestroy
{
  /**
   * Upload Settings
   */
  private options: UploadxOptions = {};
  /**
   * Erlaubte Dateitypen
   */
  private _allowedtypes: string = '*';
  /**
   * Files automatisch hochladen
   */
  private _autoupload: boolean = false;
  /**
   * Pausieren von Uploads erlauben
   */
  private _enablepause: boolean = true;
  /**
   * API Endpoint
   */
  private _endpoint: string = null;
  /**
   * Array von Uploads
   */
  uploads: SacUploadFile[];
  /**
   * Upload Service
   */
  protected uploadService: UploadxService;
  /**
   * Service für Error Localisation
   */
  public lngResourceService: ILanguageResourceService;

  //#region Properties

  /**
   * Resource Key für Validation Message Required bei Control
   */
  @Input() validationmessagerequired: string = 'VALIDATION_ERROR_REQUIRED';
  /**
   * Resource Key für Validation Message Required in Validation Summary
   */
  @Input()
  validationmessagesummaryrequired: string =
    'VALIDATION_ERROR_SUMMARY_REQUIRED';
  /**
   * Erlaubte Dateitypen für den Upload. Format: ".xxx,.yyy,.zzz"
   */
  @Input()
  set allowedtypes(types: string) {
    this._allowedtypes = types;
    this.setAllowedTypes(types);
  }
  get allowedtypes(): string {
    return this._allowedtypes;
  }
  /**
   * Files nach der Auswahl automatisch hochladen
   */
  @Input()
  set autoupload(v: boolean) {
    this._autoupload = v;
    this.options.autoUpload = v;
    this.uploadService.connect(this.options);
  }
  get autoupload(): boolean {
    return this._autoupload;
  }

  /**
   * Uploads können unterbrochen werden
   */
  @Input()
  set enablepause(v: boolean) {
    this._enablepause = v;
  }
  get enablepause(): boolean {
    return this._enablepause;
  }

  /**
   * Max. Dateigrösse für Files die hochgeladen werden können. 0 deaktiviert den Filter
   */
  @Input() maxfilesize: number = 0;

  /**
   * Definiert das Control als Required
   */
  @Input() isrequired: boolean = false;

  //#endregion

  /**
   * Definiert den Registration Endpoint für Uploads.
   */
  @Input()
  set endpoint(v: string) {
    this._endpoint = v;
    this.setEndpoint(v);
  }
  get endpoint(): string {
    return this._endpoint;
  }

  /**
   * Event wenn ein Error in der Komponente ausgelöst wird.
   */
  @Output() onfileerror = new EventEmitter<string>();

  /**
   * File Input Control
   */
  @ViewChild('files', { static: true })
  private uploadInput: ElementRef;
  /**
   * Listener für Files
   */
  listenerFn: () => void;

  /**
   * Constructor
   * @param parent Formular Component
   * @param injector Injector für Komponenten Injection
   * @param renderer Rendering Engine
   * @param ngZone NgZone
   */
  constructor(
    parent: SacFormCommon,
    injector: Injector,
    private renderer: Renderer2,
    private ngZone: NgZone
  ) {
    super(parent, injector);

    this.lngResourceService = injector.get(
      LANGUAGERESOURCE_SERVICE,
      new InternalLanguageResourceService()
    );

    this.uploads = [];

    this.options.allowedTypes = '*';
    this.options.concurrency = 1;
    this.options.token = 'sometoken';
    this.options.autoUpload = this._autoupload;
    this.options.withCredentials = true;
    this.options.chunkSize = 1024 * 16 * 8;
    this.options.headers = (f: File) => ({
      'Content-Disposition': `filename=${encodeURI(f.name)}`,
    });

    // Init new Service Instance
    this.uploadService = new UploadxService(
      injector.get(UPLOADX_OPTIONS, null),
      injector.get(UPLOADX_FACTORY_OPTIONS),
      injector.get(UPLOADX_AJAX),
      this.ngZone,
      injector.get(IdService)
    );
    this.uploadService.init(this.options);

    // Subscripe Event for State changes
    this.uploadService.events.subscribe((ufile: UploadState) =>
      this.onUpload(ufile)
    );
  }

  /**
   * Initialisiert das Control
   */
  ngOnInit() {
    super.ngOnInit();
    // Init Event Listener for Input File Control and Handling Files
    this.listenerFn = this.renderer.listen(
      this.uploadInput.nativeElement,
      'change',
      this.fileListener
    );

    this.setAllowedTypes(this._allowedtypes);
    this.setEndpoint(this._endpoint);

    if (this._endpoint === null) {
      throw new Error('endpoint is not defined!');
    }

    this.uploadService.connect(this.options);
  }

  /**
   * Destroy des Controls
   */
  ngOnDestroy() {
    if (this.listenerFn) {
      this.listenerFn();
    }
  }

  //#region All File Events

  /**
   * Cancel all Uploaded files
   */
  cancelAll() {
    if (this.HasQueueItem() === true) {
      this.uploadService.control({ action: 'cancel' });
    }
  }

  /**
   * Upload all queued Files
   */
  uploadAll() {
    if (this.IsStateToUpload() === true) {
      this.uploadService.control({ action: 'upload' });
    }
  }

  /**
   * Pause all Uploads
   */
  pauseAll() {
    if (this.IsUploading() === true) {
      this.uploadService.control({ action: 'pause' });
    }
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

  /**
   * Gibt an ob Queue Elemente beinhaltet
   * @returns Elemente in der Queue
   */
  HasQueueItem(): boolean {
    return this.uploads.length > 0;
  }

  /**
   * Prüft ob in der Queue Elemente die zum Upload bereit sind vorhanden sind.
   * @returns Elemente für Upload vorhanden
   */
  IsStateToUpload(): boolean {
    return (
      this.uploads.filter(
        (itm) => itm.status === 'added' || itm.status === 'paused'
      ).length > 0
    );
  }

  /**
   * Prüft ob ein Upload eines Files am laufen ist
   * @returns Upload ist am laufen
   */
  IsUploading(): boolean {
    return this.uploads.filter((itm) => itm.status === 'uploading').length > 0;
  }

  /**
   * Prüft ob ein Upload pausiert
   * @returns Pausierter Upload ist vorhanden
   */
  IsPaused(): boolean {
    return this.uploads.filter((itm) => itm.status === 'paused').length > 0;
  }

  /**
   * Name der Datei die Hochgeladen wird
   * @returns Observable des Dateinamens.
   */
  Filename(): Observable<string> {
    if (this.uploads.length > 0) {
      return of(this.uploads[0].name);
    } else {
      return this.lngResourceService.GetString('UPLOAD_NO_FILE_SELECTED');
    }
  }

  /**
   * Gibt an ob ein Upload abgeschlossen ist
   * @returns Upload erfolgreich
   */
  HasSuccessUpload(): boolean {
    if (this.uploads.length > 0) {
      return (
        this.uploads.filter((itm) => itm.status !== 'complete').length === 0
      );
    } else {
      return false;
    }
  }

  /**
   * Gibt den Uploadfortschritt zurück
   * @returns Upload Fortschritt. Wert von 0-100
   */
  Progress(): number {
    if (this.uploads.length > 0) {
      return this.uploads[0].progress;
    } else {
      return 0;
    }
  }

  //#endregion

  //#region Validation

  /**
   * Validiert das Upload Control
   * @param c Control das validiert werden soll
   */
  validateData(c: AbstractControl): ValidationErrors | null {
    let error: ValidationErrors | null = null;

    if (this.isrequired) {
      error = Validation.required(
        this.validationmessagerequired,
        this.validationmessagesummaryrequired
      )(c);
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
    // Prüfen UploadInput bereits geladen, ist NULL wenn Extension im Markup nach NgModel gesetzt wird.
    if (this.uploadInput && this.uploadInput.nativeElement) {
      this.renderer.setAttribute(
        this.uploadInput.nativeElement,
        'accept',
        types
      );
    }

    this.options.allowedTypes = types;
  }

  /**
   * Setzt den Upload Endpoit
   * @param url Register URI
   */
  private setEndpoint(url: string) {
    this.options.endpoint = url;
  }

  /**
   * Prüft ob die Dateierweiterung gültig ist
   *
   * @param filename Dateiname
   */
  private isExtensionValid(filename: string): boolean {
    if (this._allowedtypes === '*') {
      return true;
    }

    let isValid: boolean = false;
    const extensions: string[] = this._allowedtypes.split(',');

    extensions.forEach((itm) => {
      if (filename.toLowerCase().endsWith(itm.toLowerCase())) {
        isValid = true;
      }
    });

    return isValid;
  }

  /**
   * Prüft ob das File nicht zu gross ist.
   *
   * @param filesize Max File Size in Bytes
   */
  private isFileSizeValid(filesize: number): boolean {
    if (this.maxfilesize === 0) {
      return true;
    }

    return this.maxfilesize >= filesize;
  }

  /**
   * Upload Event
   *
   * @param uploadsOutStream Upload Item
   */
  onUpload(ufile: UploadState) {
    const index = this.uploads.findIndex((f) => f.uploadId === ufile.uploadId);

    if (ufile.status === 'added' || (ufile.status === 'queue' && index < 0)) {
      if (
        this.isExtensionValid(ufile.name) &&
        this.isFileSizeValid(ufile.size) &&
        this.CustomAddValidation(ufile)
      ) {
        this.uploads.push(new SacUploadFile(ufile));
      } else {
        this.cancel(ufile.uploadId);

        if (!this.isExtensionValid(ufile.name)) {
          this.onfileerror.emit('INVALID_EXTENSION');
        } else if (!this.isFileSizeValid(ufile.size)) {
          this.onfileerror.emit('INVALID_FILESIZE');
        }
      }
    } else if (ufile.status === 'cancelled') {
      if (index >= 0) {
        this.uploads.splice(index, 1);
      }

      this.SetUploadValue(null);
    } else if (ufile.status === 'complete') {
      this.uploads[index].progress = ufile.progress;
      this.uploads[index].status = ufile.status;
      this.SetUploadValue(ufile);
    } else {
      if (index >= 0) {
        this.uploads[index].progress = ufile.progress;
        this.uploads[index].status = ufile.status;
      }
    }

    this.UpdateFileCount();
  }

  /**
   * Handling von neuen Files im Input Control
   */
  fileListener = () => {
    if (this.uploadInput.nativeElement.files) {
      this.uploadService.handleFiles(this.uploadInput.nativeElement.files);
    }
  };

  /**
   * Methode welche die Upload ID's in das Model setzt oder löscht
   *
   * @param file Type von File ID's
   */
  abstract SetUploadValue(file: UploadState): void;

  /**
   * Methode kann für Controls verwendet werden, zusätzliche Validierungen bei hinzufügen der Files zu machen
   *
   * @param file File das hinzugefügt wurde.
   * @returns Valdierung ist erfolgreich
   */
  abstract CustomAddValidation(file: UploadState): boolean;

  /**
   * Returns the number of uploaded files
   */
  private UploadedFileCount(): number {
    return this.uploads.filter((itm) => itm.status === 'complete').length;
  }

  private UpdateFileCount(): void {
    // HACK: Add addition property to FormControl. Can be fixed if solution for ticket: https://github.com/angular/angular/issues/19686
    if (this.ngControl) {
      (this.ngControl as unknown as IUploadControl).uploadedfilecount =
        this.UploadedFileCount();
    }
  }
}
