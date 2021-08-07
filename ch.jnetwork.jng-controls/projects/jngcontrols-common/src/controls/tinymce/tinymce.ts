import { Host, Injector, Input, NgZone, OnDestroy } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { NgBaseModelControl } from '../../common/basemodelcontrol';
import { NgFormularCommon } from '../../controls/form/form';
import { Validation } from '../../validation';
import { TinyMceDialogSettings } from './tinymcedialogsettings';
import { TinyMceDialogSettingsMeta } from './tinymcedialogsettingsmeta';
import { TinyMceInstance } from './tinymceinstance';

/**
 * Basis Komponente für TinyMCE Editor
 */
export class NgTinyMceCommon
  extends NgBaseModelControl<string>
  implements OnDestroy
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
  };
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

  @Input()
  public allowfoldercreate = false;
  @Input()
  public allowfolderrename = false;
  @Input()
  public allowfolderdelete = false;
  @Input()
  public allowfileupload = false;
  @Input()
  public allowfilerename = false;
  @Input()
  public allowfiledelete = false;

  @Input()
  public filetypesimages = '.gif,.jpeg,.jpg,.png,.tif,.tiff,.bmp';
  @Input()
  public filetypesvideo = '.mp4,.m4v,.ogv,.webm,.mov';
  @Input()
  public filetypesfiles = '';

  /**
   * Resource Key für Validation Message Required bei Control
   */
  @Input('validationmessagerequired') _validationMessageRequired: string =
    'VALIDATION_ERROR_REQUIRED';

  /**
   * Resource Key für Validation Message Required in Validation Summary
   */
  @Input('validationmessagesummaryrequired')
  _validationMessageRequiredSummary: string =
    'VALIDATION_ERROR_SUMMARY_REQUIRED';

  @Input()
  set config(v: any) {
    this._config = { ...this.getDynamicSettings(), ...this.baseConfig, ...v };
  }
  get config(): any {
    return this._config;
  }

  /**
   *
   * @param parent
   * @param injector
   * @param ngZone
   */
  constructor(
    @Host() parent: NgFormularCommon,
    injector: Injector,
    protected ngZone: NgZone
  ) {
    super(parent, injector);
    this.config = {};
  }

  //#region Integration Select Dialog für Fileauswahl

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

  public closeSelectDialog(): void {
    this.selectdialogvisible = false;
  }

  //#endregion

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
        this._label,
        this._validationMessageRequired,
        this._validationMessageRequiredSummary
      );
    }

    return error;
  }

  /**
   * Methode wenn die Control Instanz zerstört wird
   */
  ngOnDestroy(): void {}

  private getDynamicSettings(): any {
    let settings = {
      selector: '#' + this._name + '_tinymce',
      height: this.height,
    };

    return settings;
  }
}
