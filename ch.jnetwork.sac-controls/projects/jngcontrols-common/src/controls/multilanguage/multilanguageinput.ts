import { Directive, Host, Injector, Input } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { SacInputBase } from '../../common/baseinputcontrol';
import { IconType } from '../../enums/IconType';
import { ISacLanguageService } from '../../interfaces/ISacLanguageService';
import { LanguageModel } from '../../models/languagemodel';
import {
  SACLANGUAGE_SERVICE,
  SacDefaultLanguageService,
} from '../../services/sac-language.service';
import { Validation } from '../../validation';
import { SacFormLayoutCommon } from '../layout/formlayout';

/**
 * Base Klasse für Multi Language Input Control
 */
@Directive()
export class SacMultilanguageInputCommon extends SacInputBase<any> {
  // #region Properties

  /**
   * Sprache für das Control
   */
  private languages: LanguageModel[] = [];
  /**
   * Selektierte Sprace des Controls
   */
  private selectedLanguage: LanguageModel = null;

  /**
   * Service für Error Localisation
   */
  protected lngLanguageService: ISacLanguageService;

  /**
   * Fix breite für das Control definieren.
   */
  @Input() public controlwidth: string = null;
  /**
   * Max länge an Zeichen für Eingabefeld
   */
  @Input() public maxlength: number = null;
  /**
   * Aktiviert den Validator, das min. eine Sprache erfasst sein muss
   */
  @Input() public requiredany: boolean = false;
  /**
   * Resource Key für Validation Message Required bei Control
   */
  @Input() public validationmessagerequired: string =
    this.validationKeyService.ValidationErrorMultilanguageRequired;
  /**
   * Resource Key für Validation Message Pattern bei Control
   */
  @Input() public validationmessagerequiredany: string =
    this.validationKeyService.ValidationErrorMultilanguageRequiredAny;
  /**
   * Resource Key für Validation Message Required in Validation Summary
   */
  @Input()
  public validationmessagesummaryrequired: string =
    this.validationKeyService.ValidationErrorSummaryMultilanguageRequired;
  /**
   * Resource Key für Validation Message Pattern in Validation Summary
   */
  @Input()
  public validationmessagesummaryrequiredany: string =
    this.validationKeyService.ValidationErrorSummaryMultilanguageRequiredAny;

  // #endregion Properties

  // #region Constructors

  /**
   * Constructor
   * @param formlayout SacFormLayoutCommon to define scoped layout settings
   * @param injector Injector for injecting services
   */
  constructor(@Host() formlayout: SacFormLayoutCommon, injector: Injector) {
    super(formlayout, injector);

    this.lngLanguageService = injector.get(
      SACLANGUAGE_SERVICE,
      new SacDefaultLanguageService()
    );

    this.lngLanguageService
      .GetLanguages()
      .subscribe((result: LanguageModel[]) => {
        this.languages = result;

        if (this.languages.length > 0) {
          this.selectedLanguage = this.languages[0];
          // Control Validierung ausführen, da Wert potentiell bereits gesetzt sein kann
          this.UpdateValueAndValidity();
        }
      });
  }

  // #endregion Constructors

  // #region Public Getters And Setters

  /**
   * Gibt den Wert der aktuell ausgewählten Sprache zurück
   */
  public get LanguageValue(): string {
    if (this.value) {
      const currentIsoCode: string = this.selectedLanguage
        ? this.selectedLanguage.IsoCode
        : null;

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

  /**
   * Collection der Sprachen
   */
  public get Languages(): LanguageModel[] {
    return this.languages;
  }

  /**
   * Gibt das Icon der selektierten Sprache zurück
   */
  public get SelectedIcon(): string {
    if (this.selectedLanguage) {
      return this.selectedLanguage.Icon;
    } else {
      return '';
    }
  }

  /**
   * Gibt den Type des Icons für die selektierte Sprache zurück
   */
  public get SelectedIconType(): IconType {
    if (this.selectedLanguage) {
      return this.selectedLanguage.IconType;
    } else {
      return IconType.Image;
    }
  }

  // #endregion Public Getters And Setters

  // #region Public Methods

  /**
   * Prüft ob in irgendeiner Sprache kein Wert definiert wurde
   * @returns Leerwert ist vorhanden
   */
  public IsAnyEmpty(): boolean {
    let found = false;

    if (this.value) {
      this.languages.forEach((itm: LanguageModel) => {
        if (itm === null) {
          found = true;
          return;
        }

        if (
          this.value[itm.IsoCode] === undefined ||
          this.value[itm.IsoCode] === '' ||
          this.value[itm.IsoCode] === null
        ) {
          found = true;
          return;
        }
      });
    }
    return found;
  }

  /**
   * Prüft ob in einer bestimmten Sprache ein Wert vorhanden ist.
   * @param sprache Sprache in welcher der Wert geprüft werden soll
   * @returns Wert ist vorhanden
   */
  public IsEmpty(sprache: LanguageModel): boolean {
    if (this.value) {
      // Fallback falls keine Selektierte Sprache
      if (sprache === null) {
        return true;
      }

      return (
        this.value[sprache.IsoCode] === undefined ||
        this.value[sprache.IsoCode] === '' ||
        this.value[sprache.IsoCode] === null
      );
    } else {
      return true;
    }
  }

  /**
   * Selektiert die Sprache
   * @param language Sprache die selektiert werden soll
   */
  public SelectLanguage(language: LanguageModel) {
    this.selectedLanguage = language;
  }

  /**
   * Setzt den Wert für die aktuell gewählte Sprache
   * @param value Wert welcher gesetzt werden soll
   */
  public SetLanguageValue(value: string): void {
    if (this.value) {
      const currentIsoCode: string = this.selectedLanguage
        ? this.selectedLanguage.IsoCode
        : null;

      // Fallback falls keine Selektierte Sprache
      if (currentIsoCode === null) {
        return;
      }

      this.value[currentIsoCode] = value;
      this.propagateChange(this._value);
    }
  }

  /**
   * Methode validiert, ob der Wert den gegebenen Kriterien entspricht
   * @param c Control das validiert wird
   */
  public validateData(c: AbstractControl): { [key: string]: any } {
    let error: ValidationErrors | null = null;

    if (
      error === null &&
      c.value !== null &&
      c.value !== undefined &&
      c.value !== '' &&
      this.isrequired !== undefined &&
      this.isrequired === true
    ) {
      error = Validation.multilanguageRequired(
        this.languages,
        this.validationmessagerequired,
        this.validationmessagesummaryrequired
      )(c);
    }

    if (
      error === null &&
      c.value !== null &&
      c.value !== undefined &&
      c.value !== '' &&
      this.requiredany !== undefined &&
      this.requiredany === true
    ) {
      error = Validation.multilanguageRequiredAny(
        this.languages,
        this.validationmessagerequiredany,
        this.validationmessagesummaryrequiredany
      )(c);
    }

    return error;
  }

  // #endregion Public Methods
}
