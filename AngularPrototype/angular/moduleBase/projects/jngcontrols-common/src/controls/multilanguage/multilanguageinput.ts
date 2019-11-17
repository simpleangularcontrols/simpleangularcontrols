import { Component, Host, forwardRef, Injector, Inject, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlContainer, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';
import { NgFormularCommon } from '../form/form';
import { NgInputBase } from '../../common/baseinputcontrol';
import { InternalLanguageService, LANGUAGE_SERVICE } from '../../services/Language.Service';
import { ILanguageService } from '../../interfaces/ilanguageservice';
import { Observable } from 'rxjs/internal/Observable';
import { LanguageModel } from '../../models/languagemodel';
import { Validation } from '../../validation';

export class NgMultilanguageInputCommon extends NgInputBase<any> {

  /**
  * Max länge an Zeichen für Eingabefeld
  */
  @Input("maxlength") _maxlength: number = null;

  /**
   * Fix breite für das Control definieren.
   */
  @Input("controlwidth") _controlwidth: string = null

  /**
   * Aktiviert den Validator, das min. eine Sprache erfasst sein muss
   */
  @Input("requiredany") _anyrequired: boolean = false;

  /**
  * Service für Error Localisation
  */
  protected lngLanguageService: ILanguageService;

  /**
  * Konstruktor
  * Inject des Formulars
  */
  constructor( @Host() parent: NgFormularCommon, injector: Injector) {
    super(parent, injector);

    this.lngLanguageService = injector.get(LANGUAGE_SERVICE, new InternalLanguageService());

    this.lngLanguageService.GetLanguages().subscribe((result: LanguageModel[]) => {
      this.languages = result;

      if (this.languages.length > 0) {
        this.selectedLanguage = this.languages[0];
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

  get SelectedIcon(): string {
    if (this.selectedLanguage) {
      return this.selectedLanguage.Icon;
    } else {
      return '';
    }
  }

  get LanguageValue(): string {
    if (this.value) {
      let currentIsoCode: string = this.selectedLanguage ? this.selectedLanguage.IcoCode : null;

      // Fallback falls keine Selektierte Sprache
      if (currentIsoCode === null) {
        return '';
      }

      return this.value[currentIsoCode];
    } else {
      return '';
    }
  }

  public SetLanguageValue(value: string) {
    if (this.value) {
      let currentIsoCode: string = this.selectedLanguage ? this.selectedLanguage.IcoCode : null;

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

      return this.value[sprache.IcoCode] === undefined || this.value[sprache.IcoCode] === '' || this.value[sprache.IcoCode] === null;
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

        if (this.value[itm.IcoCode] === undefined || this.value[itm.IcoCode] === '' || this.value[itm.IcoCode] === null) {
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
      error = Validation.multilanguageRequired(c, this.languages, this._label);
    }

    if (error === null && c.value !== null && c.value !== undefined && c.value !== '' && this._anyrequired !== undefined && this._anyrequired === true) {
      error = Validation.multilanguageRequiredAny(c, this.languages, this._label);
    }

    return error;
  }
}
