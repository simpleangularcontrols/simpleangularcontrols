import {
  Directive,
  EventEmitter,
  Host,
  Injector,
  Input,
  NgZone,
  Output,
} from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { SacBaseModelControl } from '../../common/basemodelcontrol';
import { ISacLocalisationService } from '../../interfaces/ISacLocalisationService';
import { SACLOCALISATION_SERVICE } from '../../services';
import { SacDefaultLocalisationService } from '../../services/sac-localisation.service';
import { Validation } from '../../validation';
import { SacFormLayoutCommon } from '../layout/formlayout';
import { TinyMceDialogSettings } from './tinymcedialogsettings';
import { TinyMceDialogSettingsMeta } from './tinymcedialogsettingsmeta';
import { TinyMceInstance } from './tinymceinstance';

/**
 * Basis Komponente für TinyMCE Editor
 */
@Directive()
export abstract class SacTinyMceCommon extends SacBaseModelControl<string> {
  // #region Properties

  /**
   * Default Config mit Standardwerten für TinyMCE
   */
  private baseConfig: any = {
    base_url: '/tinymce',
    suffix: '.min',
    branding: false,
    angular: this,
    file_picker_types: 'file media image',
    file_picker_callback: this.showSelectDialog,
    save_onsavecallback: () => {},
  };

  /**
   * Erlaubt im Filebrowser das löschen von Dateien
   */
  @Input()
  public allowfiledelete = false;
  /**
   * Erlaubt im Filebrowser das umbennen von Dateien
   */
  @Input()
  public allowfilerename = false;
  /**
   * Erlaubt im Filebrowser das hochladen von Files
   */
  @Input()
  public allowfileupload = false;
  /**
   * Erlaubt im Filebrowser das anlegen eines Ordners
   */
  @Input()
  public allowfoldercreate = false;
  /**
   * Erlaubt im Filebrowser das löschen eines Ordners
   */
  @Input()
  public allowfolderdelete = false;
  /**
   * Erlaubt im Filebrowser das umbennen eines Ordners
   */
  @Input()
  public allowfolderrename = false;
  /**
   * URL zu Filebrowser Backend
   */
  @Input()
  public filebrowserapiurl: string = null;
  /**
   * File Extensions für Links (Format: .xxx,.yyy,.eee)
   */
  @Input()
  public filetypesfiles = '';
  /**
   * File Extensions für Images (Format: .xxx,.yyy,.eee)
   */
  @Input()
  public filetypesimages = '.gif,.jpeg,.jpg,.png,.tif,.tiff,.bmp';
  /**
   * File Extensions für Media (Format: .xxx,.yyy,.eee)
   */
  @Input()
  public filetypesvideo = '.mp4,.m4v,.ogv,.webm,.mov';
  /**
   * Höhe des Editors
   */
  @Input()
  public height: string = undefined;
  /**
   * Definiert das Control als Required
   */
  @Input()
  public isrequired: boolean = false;
  /**
   * Resource Key für Validation Message Required bei Control
   */
  @Input() public validationmessagerequired: string =
    'VALIDATION_ERROR_REQUIRED';
  /**
   * Resource Key für Validation Message Required in Validation Summary
   */
  @Input()
  public validationmessagesummaryrequired: string =
    'VALIDATION_ERROR_SUMMARY_REQUIRED';
  /**
   * Event wenn Save Action in TinyMCE ausgelöst wird
   */
  @Output()
  public onsave: EventEmitter<string> = new EventEmitter<string>();

  /**
   * TinyMCE Config
   */
  public _config: any = {};
  /**
   * Service für Error Localisation
   */
  public lngResourceService: ISacLocalisationService;
  /**
   * Settings Instanz für Dialog
   */
  public selectDialogSettings: TinyMceDialogSettings;
  /**
   * Der Select Dialog wird angezeigt
   */
  public selectdialogvisible = false;
  /**
   * Instanz auf TinyMCE Settings. Wird durch TinyMCE gesetzt und wird für den Callback des Dialog benötigt
   */
  public settings: TinyMceInstance;

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

    this.lngResourceService = injector.get(
      SACLOCALISATION_SERVICE,
      new SacDefaultLocalisationService()
    );

    this.config = {};
  }

  // #endregion Constructors

  // #region Public Getters And Setters

  /**
   * TinyMCE Konfiguration
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

  /**
   * TinyMCE Konfiguration
   */
  public get config(): any {
    return this._config;
  }

  // #endregion Public Getters And Setters

  // #region Public Methods

  /**
   * Schliesst den Dateiauswahl Dialog
   */
  public closeSelectDialog(): void {
    this.selectdialogvisible = false;
  }

  /**
   * Löst die Speichern Action aus
   * @param content Content als String
   */
  public save(content: any): void {
    this.onsave.emit(content);
  }

  /**
   * Setzt das Resultat aus dem Dateiauswahl Dialog
   */
  public setSelectDialogResult(): void {
    if (this.selectDialogSettings.value) {
      if (
        this.selectDialogSettings.value.startsWith('/') ||
        this.selectDialogSettings.value.startsWith('\\')
      ) {
        this.selectDialogSettings.value =
          this.selectDialogSettings.value.substring(1);
      }

      this.selectDialogSettings.callback(this.selectDialogSettings.value);
    }

    this.closeSelectDialog();
  }

  /**
   * Zeigt den Dateiauswahl Dialog an
   * @param callback Callback Methode welche aufgerufen wird, wenn der Dialog geschlossen wird
   * @param value Wert aus dem Datei Dialog
   * @param meta Meta Daten zur Datei
   */
  public showSelectDialog(
    callback,
    value: string,
    meta: TinyMceDialogSettingsMeta
  ): void {
    this.settings.angular.ngZone.runOutsideAngular(() => {
      this.settings.angular.ngZone.run(() => {
        this.settings.angular.selectdialogvisible = true;

        // Set Dialog Settings
        this.settings.angular.selectDialogSettings = new TinyMceDialogSettings({
          callback: callback,
          value: value,
          meta: meta,
          allowedtypes: '',
        });

        switch (meta.filetype) {
          case 'image':
            this.settings.angular.selectDialogSettings.allowedtypes =
              this.settings.angular.filetypesimages;
            break;
          case 'media':
            this.settings.angular.selectDialogSettings.allowedtypes =
              this.settings.angular.filetypesvideo;
            break;
          default:
            this.settings.angular.selectDialogSettings.allowedtypes =
              this.settings.angular.filetypesfiles;
            break;
        }
      });
    });
  }

  /**
   * Validiert das Control
   * @param c Control Instanz die valdidiert wird
   * @returns Gibt eine Fehlermeldung oder NULL zurück
   */
  public validateData(c: AbstractControl): ValidationErrors {
    let error: ValidationErrors | null = null;

    if (this.isrequired) {
      error = Validation.required(
        this.validationmessagerequired,
        this.validationmessagesummaryrequired
      )(c);
    }

    return error;
  }

  // #endregion Public Methods

  // #region Public Abstract Methods

  /**
   * get settings in effective implementation that overwrites the defaults. use {} for non overwrites.
   */
  public abstract overwriteDefaultSettings(): any;

  // #endregion Public Abstract Methods

  // #region Private Methods

  /**
   * Gibt die TinyMCE Settings zurück, die aus den Properties der Angular Komponenten erzeugt werden
   * @returns Objekt mit Settings
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
