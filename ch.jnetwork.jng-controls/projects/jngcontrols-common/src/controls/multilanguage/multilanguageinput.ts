import { Directive, Host, Injector, Input } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { NgInputBase } from '../../common/baseinputcontrol';
import { IconType } from '../../enums/IconType';
import { ILanguageService } from '../../interfaces/ilanguageservice';
import { LanguageModel } from '../../models/languagemodel';
import { InternalLanguageService, LANGUAGE_SERVICE } from '../../services/Language.Service';
import { Validation } from '../../validation';
import { NgFormularCommon } from '../form/form';

/**
 * Base Klasse für Multi Language Input Control
 */
@Directive()
export class NgMultilanguageInputCommon extends NgInputBase<any> {

  /**
  * Max länge an Zeichen für Eingabefeld
  */
  @Input('maxlength') _maxlength: number = null;

  /**
   * Fix breite für das Control definieren.
   */
  @Input('controlwidth') _controlwidth: string = null;

  /**
   * Aktiviert den Validator, das min. eine Sprache erfasst sein muss
   */
  @Input('requiredany') _anyrequired: boolean = false;


  /**
   * Resource Key für Validation Message Required bei Control
   */
  @Input('validationmessagerequired') _validationMessageRequired: string = 'VALIDATION_ERROR_MULTILANGUAGEREQUIRED';
  /**
   * Resource Key für Validation Message Required in Validation Summary
   */
  @Input('validationmessagesummaryrequired') _validationMessageRequiredSummary: string = 'VALIDATION_ERROR_SUMMARY_MULTILANGUAGEREQUIRED';

  /**
   * Resource Key für Validation Message Pattern bei Control
   */
  @Input('validationmessagerequiredany') _validationMessageRequiredAny: string = 'VALIDATION_ERROR_MULTILANGUAGEREQUIREDANY';
  /**
   * Resource Key für Validation Message Pattern in Validation Summary
   */
  @Input('validationmessagesummaryrequiredany') _validationMessageRequiredAnySummary: string = 'VALIDATION_ERROR_SUMMARY_MULTILANGUAGEREQUIREDANY';


  /**
  * Service für Error Localisation
  */
  protected lngLanguageService: ILanguageService;

  /**
  * Konstruktor
  * Inject des Formulars
  */
  constructor(@Host() parent: NgFormularCommon, injector: Injector) {
    super(parent, injector);

    this.lngLanguageService = injector.get(LANGUAGE_SERVICE, new InternalLanguageService());

    this.lngLanguageService.GetLanguages().subscribe((result: LanguageModel[]) => {
      this.languages = result;

      if (this.languages.length > 0) {
        this.selectedLanguage = this.languages[0];
        // Control Validierung ausführen, da Wert potentiell bereits gesetzt sein kann
        this.UpdateValueAndValidity();
      }

    });
  }

  /**
   * Sprache für das Control
   */
  private languages: LanguageModel[] = [];
  /**
   * Selektierte Sprace des Controls
   */
  private selectedLanguage: LanguageModel = null;

  /**
   * Collection der Sprachen
   */
  get Languages(): LanguageModel[] {
    return this.languages;
  }

  /**
   * Gibt das Icon der selektierten Sprache zurück
   */
  get SelectedIcon(): string {
    if (this.selectedLanguage) {
      return this.selectedLanguage.Icon;
    } else {
      return '';
    }
  }

  /**
   * Gibt den Type des Icons für die selektierte Sprache zurück
   */
  get SelectedIconType(): IconType {
    if (this.selectedLanguage) {
      return this.selectedLanguage.IconType;
    } else {
      return IconType.Image;
    }
  }

  get LanguageValue(): string {
    if (this.value) {
      const currentIsoCode: string = this.selectedLanguage ? this.selectedLanguage.IsoCode : null;

      // Fallback falls keine Selektierte Sprache
      if (currentIsoCode === null) {
        return '';
      }

      if (this.value[currentIsoCode] === undefined) {
        return '';
      } else {
        return this.value[currentIsoCode];
      }
    } else {
      return '';
    }
  }

  public SetLanguageValue(value: string) {
    if (this.value) {
      const currentIsoCode: string = this.selectedLanguage ? this.selectedLanguage.IsoCode : null;

      // Fallback falls keine Selektierte Sprache
      if (currentIsoCode === null) {
        return;
      }

      this.value[currentIsoCode] = value;
      this.propagateChange(this._value);
    }
  }

  public SelectLanguage(language: LanguageModel) {
    this.selectedLanguage = language;
  }

  public IsEmpty(sprache: LanguageModel): boolean {
    if (this.value) {
      // Fallback falls keine Selektierte Sprache
      if (sprache === null) {
        return true;
      }

      return this.value[sprache.IsoCode] === undefined || this.value[sprache.IsoCode] === '' || this.value[sprache.IsoCode] === null;
    } else {
      return true;
    }
  }

  public IsAnyEmpty(): boolean {
    let found = false;

    if (this.value) {
      this.languages.forEach((itm: LanguageModel) => {

        if (itm === null) {
          found = true;
          return;
        }

        if (this.value[itm.IsoCode] === undefined || this.value[itm.IsoCode] === '' || this.value[itm.IsoCode] === null) {
          found = true;
          return;
        }
      });
    }
    return found;
  }

  /**
   * Methode validiert, ob der Wert den gegebenen Kriterien entspricht
   */
  validateData(c: AbstractControl): { [key: string]: any; } {
    let error: ValidationErrors | null = null;

    if (error === null && c.value !== null && c.value !== undefined && c.value !== '' && this._isrequired !== undefined && this._isrequired === true) {
      error = Validation.multilanguageRequired(c, this.languages, this._label, this._validationMessageRequired, this._validationMessageRequiredSummary);
    }

    if (error === null && c.value !== null && c.value !== undefined && c.value !== '' && this._anyrequired !== undefined && this._anyrequired === true) {
      error = Validation.multilanguageRequiredAny(c, this.languages, this._label, this._validationMessageRequiredAny, this._validationMessageRequiredAnySummary);
    }

    return error;
  }
}
