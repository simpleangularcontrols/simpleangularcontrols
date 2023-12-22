import { Directive, Host, Injector, Input } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { SacInputBase } from '../../common/baseinputcontrol';
import { IconType } from '../../enums/IconType';
import { ISacLanguageService } from '../../interfaces/ISacLanguageService';
import { LanguageModel } from '../../models/languagemodel';
import {
  SacDefaultLanguageService,
  SACLANGUAGE_SERVICE,
} from '../../services/sac-language.service';
import { Validation } from '../../validation';
import { SacFormCommon } from '../form/form';

/**
 * Base Klasse für Multi Language Input Control
 */
@Directive()
export class SacMultilanguageInputCommon extends SacInputBase<any> {
  /**
   * Max länge an Zeichen für Eingabefeld
   */
  @Input() maxlength: number = null;

  /**
   * Fix breite für das Control definieren.
   */
  @Input() controlwidth: string = null;

  /**
   * Aktiviert den Validator, das min. eine Sprache erfasst sein muss
   */
  @Input() requiredany: boolean = false;

  /**
   * Resource Key für Validation Message Required bei Control
   */
  @Input() validationmessagerequired: string =
    'VALIDATION_ERROR_MULTILANGUAGEREQUIRED';

  /**
   * Resource Key für Validation Message Required in Validation Summary
   */
  @Input()
  validationmessagesummaryrequired: string =
    'VALIDATION_ERROR_SUMMARY_MULTILANGUAGEREQUIRED';

  /**
   * Resource Key für Validation Message Pattern bei Control
   */
  @Input() validationmessagerequiredany: string =
    'VALIDATION_ERROR_MULTILANGUAGEREQUIREDANY';

  /**
   * Resource Key für Validation Message Pattern in Validation Summary
   */
  @Input()
  validationmessagesummaryrequiredany: string =
    'VALIDATION_ERROR_SUMMARY_MULTILANGUAGEREQUIREDANY';

  /**
   * Service für Error Localisation
   */
  protected lngLanguageService: ISacLanguageService;

  /**
   * Konstruktor
   * Inject des Formulars
   */
  constructor(@Host() parent: SacFormCommon, injector: Injector) {
    super(parent, injector);

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

  /**
   * Gibt den Wert der aktuell ausgewählten Sprache zurück
   */
  get LanguageValue(): string {
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
   * Selektiert die Sprache
   * @param language Sprache die selektiert werden soll
   */
  public SelectLanguage(language: LanguageModel) {
    this.selectedLanguage = language;
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
   * Methode validiert, ob der Wert den gegebenen Kriterien entspricht
   * @param c Control das validiert wird
   */
  validateData(c: AbstractControl): { [key: string]: any } {
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
}
