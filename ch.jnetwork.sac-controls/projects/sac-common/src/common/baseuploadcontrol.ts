import { SacFormLayoutCommon } from '../controls/layout/formlayout';
import { ISacLocalisationService } from '../interfaces/ISacLocalisationService';
import { ISacUploadEventCompleteState } from '../interfaces/ISacUploadEventCompleteState';
import { IUploadControl } from '../interfaces/iuploadcontrol';
import { SACVALIDATIONKEY_SERVICE, SacDefaultValidationKeyService } from '../services';
import { SACLOCALISATION_SERVICE, SacDefaultLocalisationService } from '../services/sac-localisation.service';
import { Validation } from '../validation';
import { SacBaseModelControl } from './basemodelcontrol';
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
import { UploadState, UploadxOptions, UploadxService } from 'ngx-uploadx';
import { Observable, of } from 'rxjs';

// #region Exported Classes

/**
 * Base class for uploader control
 */
@Directive()
export abstract class SacUploadBase<VALUE> extends SacBaseModelControl<VALUE> implements OnInit, OnDestroy {
    // #region Properties

    /**
     * Allowed file types
     */
    private _allowedtypes = '*';

    /**
     * Automatically uploads files
     */
    private _autoupload = false;

    /**
     * Allow pausing of uploads
     */
    private _enablepause = true;

    /**
     * API Endpoint
     */
    private _endpoint: string = null;

    /**
     * Token for Bearer Authentication
     */
    private _token: string | null = null;

    /**
     * Upload Settings
     */
    private options: UploadxOptions = {};

    /**
     * File Input Control
     */
    @ViewChild('files', { static: true })
    private uploadInput: ElementRef;

    /**
     * Upload Service
     */
    protected uploadService: UploadxService;

    /**
     * Handling of new files in the input control
     */
    public fileListener = () => {
        // exit if files is null or undefined
        if (!this.uploadInput.nativeElement.files) {
            return;
        }

        if (this.GetMaxFiles() > 0) {
            const maxFiles = this.GetMaxFiles() + this.UploadedFileCount();
            const possibleFiles = maxFiles - this.uploadInput.nativeElement.files.length;

            if (possibleFiles < 0) {
                const dataTransfer = new DataTransfer();

                const files = Array.from(this.uploadInput.nativeElement.files).splice(
                    0,
                    this.uploadInput.nativeElement.files.length + possibleFiles
                );

                // clone files
                files.forEach((file: File) => dataTransfer.items.add(file));

                this.uploadInput.nativeElement.files = dataTransfer.files;
            }
        }

        this.uploadService.handleFiles(this.uploadInput.nativeElement.files);
    };

    /**
     * Defines the control as required
     */
    @Input() public isrequired = false;

    /**
     * Listener for files
     */
    public listenerFn: () => void;

    /**
     * Service für Error Localisation
     */
    public lngResourceService: ISacLocalisationService;

    /**
     * Max. file size for files that can be uploaded. 0 disables the filter
     */
    @Input() public maxfilesize = 0;

    /**
     * Event when an error is triggered in the component.
     */
    @Output() public onfileerror = new EventEmitter<string>();

    /**
     * Event when a file has been uploaded. The event is triggered for multiple uploads per file.
     */
    @Output()
    public onuploadcomplete = new EventEmitter<ISacUploadEventCompleteState>();

    /**
     * Array of uploads
     */
    public uploads: SacUploadFile[];

    /**
     * Resource key for validation message 'required' at control
     */
    @Input() public validationmessagerequired: string = this.validationKeyService.ValidationErrorRequired;

    /**
     * Resource key for validation message 'required' in validation summary
     */
    @Input()
    public validationmessagesummaryrequired: string = this.validationKeyService.ValidationErrorSummaryRequired;

    // #endregion Properties

    // #region Constructors

    /**
     * Constructor
     * @param formlayout SacFormLayoutCommon to define scoped layout settings
     * @param injector Injector for injecting services
     * @param renderer angular rendering engine
     * @param ngZone ngzone for handling external scripts
     */
    constructor(
        formlayout: SacFormLayoutCommon,
        injector: Injector,
        private renderer: Renderer2,
        private ngZone: NgZone
    ) {
        super(formlayout, injector);

        this.validationKeyService = injector.get(SACVALIDATIONKEY_SERVICE, new SacDefaultValidationKeyService());

        this.lngResourceService = injector.get(
            SACLOCALISATION_SERVICE,
            new SacDefaultLocalisationService(this.validationKeyService)
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
        this.uploadService = new UploadxService();
        this.uploadService.init(this.options);

        // Subscripe Event for State changes
        this.uploadService.events.subscribe((ufile: UploadState) => this.onUpload(ufile));
    }

    // #endregion Constructors

    // #region Public Getters And Setters

    /**
     * Icon for browse button
     */
    public get IconBrowse(): string {
        return this.iconService.UploadComponentBrowseIcon;
    }

    /**
     * icon for continous buttons
     */
    public get IconContinue(): string {
        return this.iconService.UploadComponentContinueIcon;
    }

    /**
     * icon for delete buttons
     */
    public get IconDelete(): string {
        return this.iconService.UploadComponentDeleteIcon;
    }

    /**
     * icon for pause buttons
     */
    public get IconPause(): string {
        return this.iconService.UploadComponentPauseIcon;
    }

    /**
     * icon for upload button
     */
    public get IconUpload(): string {
        return this.iconService.UploadComponentUploadIcon;
    }

    public get allowedtypes(): string {
        return this._allowedtypes;
    }

    /**
     * Allowed file types for upload. Format: ".xxx,.yyy,.zzz"
     */
    @Input()
    public set allowedtypes(types: string) {
        this._allowedtypes = types;
        this.setAllowedTypes(types);
    }

    public get autoupload(): boolean {
        return this._autoupload;
    }

    /**
     * Automatically uploads files after selection
     */
    @Input()
    public set autoupload(v: boolean) {
        this._autoupload = v;
        this.options.autoUpload = v;
        this.uploadService.connect(this.options);
    }

    public get enablepause(): boolean {
        return this._enablepause;
    }

    /**
     * Uploads can be paused
     */
    @Input()
    public set enablepause(v: boolean) {
        this._enablepause = v;
    }

    public get endpoint(): string {
        return this._endpoint;
    }

    /**
     * Defines the registration endpoint for uploads.
     */
    @Input()
    public set endpoint(v: string) {
        this._endpoint = v;
        this.setEndpoint(v);
    }

    /**
     * Token for Bearer Authentication
     */
    public get token(): string | null {
        return this._token;
    }

    /**
     * Token for Bearer Authentication
     */
    @Input()
    public set token(v: string | null) {
        this._token = v;
        this.setToken(v);
    }

    // #endregion Public Getters And Setters

    // #region Public Methods

    /**
     * Method can be used for controls to perform additional validations when adding files
     *
     * @param file File that was added.
     * @returns Validation is successful
     */
    public abstract CustomAddValidation(file: UploadState): boolean;

    /**
     * Name of the file being uploaded
     * @returns Observable of the file name.
     */
    public Filename(): Observable<string> {
        if (this.uploads.length > 0) {
            return of(this.uploads[0].name);
        } else {
            return this.lngResourceService.GetString(this.validationKeyService.UploadNoFilesSelected);
        }
    }

    /**
     * Indicates whether the queue contains elements
     * @returns Elements in the queue
     */
    public HasQueueItem(): boolean {
        return this.uploads.length > 0;
    }

    /**
     * Indicates whether an upload is complete
     * @returns Upload successful
     */
    public HasSuccessUpload(): boolean {
        if (this.uploads.length > 0) {
            return this.uploads.filter((itm) => itm.status !== 'complete').length === 0;
        } else {
            return false;
        }
    }

    /**
     * Checks if an upload is paused
     * @returns Paused upload is present
     */
    public IsPaused(): boolean {
        return this.uploads.filter((itm) => itm.status === 'paused').length > 0;
    }

    /**
     * Checks if there are elements in the queue ready for upload.
     * @returns Elements available for upload
     */
    public IsStateToUpload(): boolean {
        return this.uploads.filter((itm) => itm.status === 'added' || itm.status === 'paused').length > 0;
    }

    /**
     * Checks if a file upload is in progress
     * @returns Upload is in progress
     */
    public IsUploading(): boolean {
        return this.uploads.filter((itm) => itm.status === 'uploading').length > 0;
    }

    /**
     * Returns the upload progress
     * @returns Upload progress. Value from 0-100
     */
    public Progress(): number {
        if (this.uploads.length > 0) {
            return this.uploads[0].progress;
        } else {
            return 0;
        }
    }

    /**
     * Method that sets or deletes the upload IDs in the model
     *
     * @param file Type of file IDs
     */
    public abstract SetUploadValue(file: UploadState): void;

    /**
     * Cancel single upload
     * @param uploadId ID of File to cancel
     */
    public cancel(uploadId) {
        this.uploadService.control({ action: 'cancel', uploadId: uploadId });
    }

    /**
     * Cancel all Uploaded files
     */
    public cancelAll() {
        if (this.HasQueueItem() === true) {
            this.uploadService.control({ action: 'cancel' });
        }
    }

    /**
     * Destroy the control
     */
    public ngOnDestroy() {
        if (this.listenerFn) {
            this.listenerFn();
        }
    }

    /**
     * Initializes the control
     */
    public ngOnInit() {
        super.ngOnInit();
        // Init Event Listener for Input File Control and Handling Files
        this.listenerFn = this.renderer.listen(this.uploadInput.nativeElement, 'change', this.fileListener);

        this.setAllowedTypes(this._allowedtypes);
        this.setEndpoint(this._endpoint);
        this.setToken(this._token);

        if (this._endpoint === null) {
            throw new Error('endpoint is not defined!');
        }

        this.uploadService.connect(this.options);
    }

    /**
     * Upload event
     *
     * @param uploadsOutStream Upload item
     */
    public onUpload(ufile: UploadState) {
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

            const uploadState: ISacUploadEventCompleteState = {
                name: ufile.name,
                size: ufile.size,
                uploadid: this.uploads[index].uploadId,
            };

            this.onuploadcomplete.emit(uploadState);
        } else {
            if (index >= 0) {
                this.uploads[index].progress = ufile.progress;
                this.uploads[index].status = ufile.status;
            }
        }

        this.UpdateFileCount();
    }

    /**
     * Cancel single file
     * @param uploadId ID of file to cancel
     */
    public pause(uploadId) {
        this.uploadService.control({ action: 'pause', uploadId });
    }

    /**
     * Pause all uploads
     */
    public pauseAll() {
        if (this.IsUploading() === true) {
            this.uploadService.control({ action: 'pause' });
        }
    }

    /**
     * Sets the bearer token in the upload service
     */
    public setToken(value: string) {
        this.options.token = value;
    }

    /**
     * Upload Single File
     *
     * @param uploadId ID of File to Upload
     */
    public upload(uploadId) {
        this.uploadService.control({ action: 'upload', uploadId });
    }

    /**
     * Upload all queued Files
     */
    public uploadAll() {
        if (this.IsStateToUpload() === true) {
            this.uploadService.control({ action: 'upload' });
        }
    }

    /**
     * Validates the upload control
     * @param c Control to be validated
     */
    public validateData(c: AbstractControl): ValidationErrors | null {
        let error: ValidationErrors | null = null;

        if (this.isrequired) {
            error = Validation.required(this.validationmessagerequired, this.validationmessagesummaryrequired)(c);
        }

        return error;
    }

    // #endregion Public Methods

    // #region Protected Methods

    /**
     * get max. files that can be uploaded
     */
    protected abstract GetMaxFiles(): number;

    // #endregion Protected Methods

    // #region Private Methods

    /**
     * Updates the file count on the form control
     */
    private UpdateFileCount(): void {
        // HACK: Add addition property to FormControl. Can be fixed if solution for ticket: https://github.com/angular/angular/issues/19686
        if (this.ngControl) {
            (this.ngControl as unknown as IUploadControl).uploadedfilecount = this.UploadedFileCount();
        }
    }

    /**
     * Returns the number of uploaded files
     */
    private UploadedFileCount(): number {
        return this.uploads.filter((itm) => itm.status === 'complete').length;
    }

    /**
     * Checks whether the file extension is valid
     *
     * @param filename File name
     */
    private isExtensionValid(filename: string): boolean {
        if (this._allowedtypes === '*') {
            return true;
        }

        let isValid = false;
        const extensions: string[] = this._allowedtypes.split(',');

        extensions.forEach((itm) => {
            if (filename.toLowerCase().endsWith(itm.toLowerCase())) {
                isValid = true;
            }
        });

        return isValid;
    }

    /**
     * Checks if the file is not too large.
     *
     * @param filesize Max file size in bytes
     */
    private isFileSizeValid(filesize: number): boolean {
        if (this.maxfilesize === 0) {
            return true;
        }

        return this.maxfilesize >= filesize;
    }

    /**
     * Sets the allowed data types for upload
     *
     * @param types Allowed file extensions
     */
    private setAllowedTypes(types: string) {
        // Check if uploadInput is already loaded; is NULL when the directive is set after NgModel in the markup.
        if (this.uploadInput && this.uploadInput.nativeElement) {
            this.renderer.setAttribute(this.uploadInput.nativeElement, 'accept', types);
        }

        this.options.allowedTypes = types;
    }

    /**
     * Sets the upload endpoint
     * @param url Register URI
     */
    private setEndpoint(url: string) {
        this.options.endpoint = url;
    }

    // #endregion Private Methods
}

/**
 * Class for uploading a file in the upload component
 */
export class SacUploadFile {
    // #region Properties

    /**
     * Document ID
     */
    public documentid: string;

    /**
     * File name
     */
    public name: string;

    /**
     * Upload progress
     */
    public progress: number;

    /**
     * Upload status
     */
    public status: string;

    /**
     * Upload ID
     */
    public uploadId: string;

    // #endregion Properties

    // #region Constructors

    /**
     * Constructor
     * @param ufile Upload state
     */
    constructor(ufile: UploadState) {
        this.uploadId = ufile.uploadId;
        this.name = ufile.name;
        this.progress = ufile.progress;
        this.status = ufile.status;
        this.documentid = null;
    }

    // #endregion Constructors
}

// #endregion Exported Classes
