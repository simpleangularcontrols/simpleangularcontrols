import { SacBaseModelControl } from '../../common/basemodelcontrol';
import { ISacLocalisationService } from '../../interfaces/ISacLocalisationService';
import { SACLOCALISATION_SERVICE, SACVALIDATIONKEY_SERVICE, SacDefaultValidationKeyService } from '../../services';
import { SacDefaultLocalisationService } from '../../services/sac-localisation.service';
import { Validation } from '../../validation';
import { SacFormLayoutCommon } from '../layout/formlayout';
import { TinyMceDialogSettings } from './tinymcedialogsettings';
import { TinyMceDialogSettingsMeta } from './tinymcedialogsettingsmeta';
import { Directive, EventEmitter, Host, Injector, Input, NgZone, Output, signal } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

/**
 * Base component for TinyMCE Editor
 */
@Directive()
export abstract class SacTinyMceCommon extends SacBaseModelControl<string> {
    // #region Properties

    /**
     * Default config with standard values for TinyMCE
     */
    private baseConfig: any = {
        base_url: '/tinymce',
        suffix: '.min',
        selector: '',
        license_key: 'gpl',
        promotion: false,
        branding: false,
        element_format: 'xhtml',
        file_picker_types: 'file media image',
        file_picker_callback: (callback: any, value: any, meta: any) => {
            this.showSelectDialog(callback, value, meta);
        },
        save_onsavecallback: () => {},
    };

    /**
     * TinyMCE config
     */
    public _config: any = {};

    /**
     * Allows deleting files in the file browser
     */
    @Input()
    public allowfiledelete = false;

    /**
     * Allows renaming files in the file browser
     */
    @Input()
    public allowfilerename = false;

    /**
     * Allows uploading files in the file browser
     */
    @Input()
    public allowfileupload = false;

    /**
     * Allows creating a folder in the file browser
     */
    @Input()
    public allowfoldercreate = false;

    /**
     * Allows deleting a folder in the file browser
     */
    @Input()
    public allowfolderdelete = false;

    /**
     * Allows renaming a folder in the file browser
     */
    @Input()
    public allowfolderrename = false;

    /**
     * URL to file browser backend
     */
    @Input()
    public filebrowserapiurl: string = null;

    /**
     * File extensions for links (Format: .xxx,.yyy,.eee)
     */
    @Input()
    public filetypesfiles = '';

    /**
     * File extensions for images (Format: .xxx,.yyy,.eee)
     */
    @Input()
    public filetypesimages = '.gif,.jpeg,.jpg,.png,.tif,.tiff,.bmp';

    /**
     * File extensions for media (Format: .xxx,.yyy,.eee)
     */
    @Input()
    public filetypesvideo = '.mp4,.m4v,.ogv,.webm,.mov';

    /**
     * Height of the editor
     */
    @Input()
    public height: string = undefined;

    /**
     * Defines the control as required
     */
    @Input()
    public isrequired = false;

    /**
     * Service for error localisation
     */
    public lngResourceService: ISacLocalisationService;

    /**
     * Event when save action is triggered in TinyMCE
     */
    @Output()
    public onsave: EventEmitter<string> = new EventEmitter<string>();

    /**
     * Settings instance for dialog
     */
    public selectDialogSettings: TinyMceDialogSettings;

    /**
     * The select dialog is displayed
     */
    public selectdialogvisible = signal(false);

    /**
     * Resource key for validation message required at control
     */
    @Input() public validationmessagerequired: string = this.validationKeyService.ValidationErrorRequired;

    /**
     * Resource key for validation message required in validation summary
     */
    @Input()
    public validationmessagesummaryrequired: string = this.validationKeyService.ValidationErrorSummaryRequired;

    // #endregion Properties

    // #region Constructors

    /**
     * Constructor
     * @param formlayout SacFormLayoutCommon to define scoped layout settings
     * @param injector Injector for injecting services
     * @param ngZone ngzone for handling external javascripts
     */
    constructor(
        @Host() formlayout: SacFormLayoutCommon,
        injector: Injector,
        protected ngZone: NgZone
    ) {
        super(formlayout, injector);

        this.validationKeyService = injector.get(SACVALIDATIONKEY_SERVICE, new SacDefaultValidationKeyService());

        this.lngResourceService = injector.get(
            SACLOCALISATION_SERVICE,
            new SacDefaultLocalisationService(this.validationKeyService)
        );

        this.config = {};
    }

    // #endregion Constructors

    // #region Public Getters And Setters

    /**
     * TinyMCE configuration
     */
    public get config(): any {
        return this._config;
    }

    /**
     * TinyMCE configuration
     * @link https://www.tiny.cloud/docs/configure/
     */
    @Input()
    public set config(v: any) {
        this._config = {
            ...this.getDynamicSettings(),
            ...this.baseConfig,
            ...this.overwriteDefaultSettings(),
            ...v,
        };
    }

    // #endregion Public Getters And Setters

    // #region Public Methods

    /**
     * event when control is touched
     */
    public blur(): void {
        this.propagateTouch();
    }

    /**
     * Closes the file selection dialog
     */
    public closeSelectDialog(): void {
        this.selectdialogvisible.set(false);
    }

    /**
     * get settings in effective implementation that overwrites the defaults. use {} for non overwrites.
     */
    public abstract overwriteDefaultSettings(): any;

    /**
     * Triggers the save action
     * @param content Content as string
     */
    public save(content: any): void {
        this.onsave.emit(content);
    }

    /**
     * Sets the result from the file selection dialog
     */
    public setSelectDialogResult(): void {
        if (this.selectDialogSettings.value) {
            if (this.selectDialogSettings.value.startsWith('/') || this.selectDialogSettings.value.startsWith('\\')) {
                this.selectDialogSettings.value = this.selectDialogSettings.value.substring(1);
            }

            this.selectDialogSettings.callback(this.selectDialogSettings.value);
        }

        this.closeSelectDialog();
    }

    /**
     * Shows the file selection dialog
     * @param callback Callback method which is called when the dialog is closed
     * @param value Value from the file dialog
     * @param meta Meta data for the file
     */
    public showSelectDialog(callback: any, value: string, meta: TinyMceDialogSettingsMeta): void {
        this.ngZone.run(() => {
            this.selectdialogvisible.set(true);

            this.selectDialogSettings = new TinyMceDialogSettings({
                callback: callback,
                value: value,
                meta: meta,
                allowedtypes: '',
            });

            switch (meta.filetype) {
                case 'image':
                    this.selectDialogSettings.allowedtypes = this.filetypesimages;
                    break;
                case 'media':
                    this.selectDialogSettings.allowedtypes = this.filetypesvideo;
                    break;
                default:
                    this.selectDialogSettings.allowedtypes = this.filetypesfiles;
                    break;
            }
        });
    }

    /**
     * Validates the control
     * @param c Control instance that is validated
     * @returns Returns an error message or NULL
     */
    public validateData(c: AbstractControl): ValidationErrors {
        let error: ValidationErrors | null = null;

        if (this.isrequired) {
            error = Validation.required(this.validationmessagerequired, this.validationmessagesummaryrequired)(c);
        }

        return error;
    }

    // #endregion Public Methods

    // #region Private Methods

    /**
     * Returns the TinyMCE settings that are generated from the properties of the Angular components
     * @returns Object with settings
     */
    private getDynamicSettings(): any {
        let settings = {
            selector: '#' + this.name + '_tinymce',
            height: this.height,
        };

        return settings;
    }

    // #endregion Private Methods
}
