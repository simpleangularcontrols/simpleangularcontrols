import {
  Directive,
  EventEmitter,
  Host,
  Injector,
  Input,
  NgZone,
  OnDestroy,
  Output,
} from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { NgBaseModelControl } from '../../common/basemodelcontrol';
import { NgFormularCommon } from '../../controls/form/form';
import { ILanguageResourceService } from '../../interfaces/ilanguageresource';
import { LANGUAGERESOURCE_SERVICE } from '../../services';
import { InternalLanguageResourceService } from '../../services/languageresource.service';
import { Validation } from '../../validation';
import { TinyMceDialogSettings } from './tinymcedialogsettings';
import { TinyMceDialogSettingsMeta } from './tinymcedialogsettingsmeta';
import { TinyMceInstance } from './tinymceinstance';

/**
 * Basis Komponente für TinyMCE Editor
 */
@Directive()
export class NgTinyMceCommon
  extends NgBaseModelControl<string>
{
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
   * Service für Error Localisation
   */
  public lngResourceService: ILanguageResourceService;

  /**
   * Settings Instanz für Dialog
   */
  public selectDialogSettings: TinyMceDialogSettings;

  /**
   * TinyMCE Config
   */
  public _config: any = {};

  /**
   * Der Select Dialog wird angezeigt
   */
  public selectdialogvisible = false;

  /**
   * Instanz auf TinyMCE Settings. Wird durch TinyMCE gesetzt und wird für den Callback des Dialog benötigt
   */
  public settings: TinyMceInstance;

  /**
   * Definiert das Control als Required
   */
  @Input()
  public isrequired: boolean = false;

  /**
   * Höhe des Editors
   */
  @Input()
  public height: string = undefined;

  /**
   * URL zu Filebrowser Backend
   */
  @Input()
  public filebrowserapiurl: string = null;

  /**
   * Erlaubt im Filebrowser das anlegen eines Ordners
   */
  @Input()
  public allowfoldercreate = false;

  /**
   * Erlaubt im Filebrowser das umbennen eines Ordners
   */
  @Input()
  public allowfolderrename = false;

  /**
   * Erlaubt im Filebrowser das löschen eines Ordners
   */
  @Input()
  public allowfolderdelete = false;

  /**
   * Erlaubt im Filebrowser das hochladen von Files
   */
  @Input()
  public allowfileupload = false;

  /**
   * Erlaubt im Filebrowser das umbennen von Dateien
   */
  @Input()
  public allowfilerename = false;

  /**
   * Erlaubt im Filebrowser das löschen von Dateien
   */
  @Input()
  public allowfiledelete = false;

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
   * File Extensions für Links (Format: .xxx,.yyy,.eee)
   */
  @Input()
  public filetypesfiles = '';

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
   * TinyMCE Konfiguration
   * @link https://www.tiny.cloud/docs/configure/
   */
  @Input()
  set config(v: any) {
    this._config = { ...this.getDynamicSettings(), ...this.baseConfig, ...v };
  }
  /**
   * TinyMCE Konfiguration
   */
  get config(): any {
    return this._config;
  }

  /**
   * Event wenn Save Action in TinyMCE ausgelöst wird
   */
  @Output()
  public onsave: EventEmitter<string> = new EventEmitter<string>();

  /**
   * Konstruktor
   * @param parent Instanz vom Formular
   * @param injector Injector Service
   * @param ngZone NgZone für Javascript in TinyMCE
   */
  constructor(
    @Host() parent: NgFormularCommon,
    injector: Injector,
    protected ngZone: NgZone
  ) {
    super(parent, injector);

    this.lngResourceService = injector.get(
      LANGUAGERESOURCE_SERVICE,
      new InternalLanguageResourceService()
    );

    this.config = {};
  }

  //#region Integration Select Dialog für Fileauswahl

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
   * Schliesst den Dateiauswahl Dialog
   */
  public closeSelectDialog(): void {
    this.selectdialogvisible = false;
  }

  //#endregion

  /**
   * Löst die Speichern Action aus
   * @param content Content als String
   */
  public save(content: any): void {
    this.onsave.emit(content);
  }

  /**
   * Validiert das Control
   * @param c Control Instanz die valdidiert wird
   * @returns Gibt eine Fehlermeldung oder NULL zurück
   */
  validateData(c: AbstractControl): ValidationErrors {
    let error: ValidationErrors | null = null;

    if (this.isrequired) {
      error = Validation.required(
        c,
        this.label,
        this.validationmessagerequired,
        this.validationmessagesummaryrequired
      );
    }

    return error;
  }

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
}
