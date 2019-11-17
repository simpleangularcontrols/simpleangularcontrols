import { Injectable, InjectionToken } from "@angular/core";
import { ILanguageResourceService } from "../interfaces/ilanguageresource";
import { Interpolation } from "../utilities/interpolation";
import { Observable } from "rxjs";

/**
 * Injection Token für Language Resource Service
 */
export const LANGUAGERESOURCE_SERVICE = new InjectionToken<LanguageResourceService>('LanguageResourceService');

/**
 * Base Service für Localisation von Fehlermeldungen
 *
 * @example
 *
 * // Eigene Beispielimplementierung für Application mit ngx-translate
 * 
 * (at)Injectable()
 * export class ControlsLocalisation extends LanguageResourceService {
 *
 *   constructor(private translate: TranslateService) {
 *     super();
 *
 *     this.translate.setDefaultLang('de');
 *     this.translate.use('de');
 *   }
 *
 *     public GetString(key: string, params?: any): Observable<string> {
 *        return this.translate.get(key, params);
 *     }
 *  }
 *
 */

 /**
 * Service für interne Übersetzungen
 * */
@Injectable({ providedIn: 'root' })
export abstract class LanguageResourceService implements ILanguageResourceService {
  /**
   * Die Methode übersetzt den eingegebenen Wort/Begriff. Verlangt key und optionell params
   */
  abstract GetString(key: string, params?: any): Observable<string>;
}

/**
 * Standardservice für interne Übersetzungen der Fehlermeldungen
 * */
@Injectable({ providedIn: 'root' })
export class InternalLanguageResourceService extends LanguageResourceService {

  /**
   * Language Resources für Controls Library
   */
  data: Map<string, Map<string, string>> = new Map<string, Map<string, string>>();

  /**
   * Konstruktor
   * */
  constructor() {

    super();

    // Set Languages
    this.data.set('de', new Map<string, string>());

    this.data.get('de').set('VALIDATION_ERROR_REQUIRED', 'Feld ist erforderlich.');
    this.data.get('de').set('VALIDATION_ERROR_SUMMARY_REQUIRED', 'Feld "{{FIELD}}" ist erforderlich.');
    this.data.get('de').set('VALIDATION_ERROR_MINVALUE', 'Wert darf nicht kleiner als {{MINVALUE}} sein.');
    this.data.get('de').set('VALIDATION_ERROR_SUMMARY_MINVALUE', 'Feld "{{FIELD}}" darf nicht kleiner als {{MINVALUE}} sein.');
    this.data.get('de').set('VALIDATION_ERROR_PATTERN', 'Wert entspricht nicht der Format Vorlage.');
    this.data.get('de').set('VALIDATION_ERROR_SUMMARY_PATTERN', 'Feld "{{FIELD}}" entspricht nicht der Format Vorlage.');
    this.data.get('de').set('VALIDATION_ERROR_MAXVALUE', 'Wert darf nicht grösser als {{MAXVALUE}} sein.');
    this.data.get('de').set('VALIDATION_ERROR_SUMMARY_MAXVALUE', 'Feld "{{FIELD}}" darf nicht grösser als {{MAXVALUE}} sein.');
    this.data.get('de').set('VALIDATION_ERROR_EMAIL', 'Feld ist keine E-Mail Adresse');
    this.data.get('de').set('VALIDATION_ERROR_SUMMARY_EMAIL', 'Feld "{{FIELD}}" ist keine E-Mail Adresse');
    this.data.get('de').set('VALIDATION_ERROR_MINLENGTH', 'Feld erfordert min. {{MINLENGTH}} Zeichen.');
    this.data.get('de').set('VALIDATION_ERROR_SUMMARY_MINLENGTH', 'Feld "{{FIELD}}" erfordert min. {{MINLENGTH}} Zeichen.');
    this.data.get('de').set('VALIDATION_ERROR_MINDATE', 'Feld muss neuer oder gleich {{MINDATE}} sein.');
    this.data.get('de').set('VALIDATION_ERROR_SUMMARY_MINDATE', 'Feld "{{FIELD}}" muss neuer oder gleich {{MINDATE}} sein.');
    this.data.get('de').set('VALIDATION_ERROR_MAXDATE', 'Feld muss älter oder gleich {{MAXDATE}} sein.');
    this.data.get('de').set('VALIDATION_ERROR_SUMMARY_MAXDATE', 'Feld "{{FIELD}}" muss älter oder gleich {{MAXDATE}} sein.');
    this.data.get('de').set('VALIDATION_ERROR_MINTIME', 'Feld muss neuer oder gleich {{MINTIME}} sein.');
    this.data.get('de').set('VALIDATION_ERROR_SUMMARY_MINTIME', 'Feld "{{FIELD}}" muss neuer oder gleich {{MINTIME}} sein.');
    this.data.get('de').set('VALIDATION_ERROR_MAXTIME', 'Feld muss älter oder gleich {{MAXTIME}} sein.');
    this.data.get('de').set('VALIDATION_ERROR_SUMMARY_MAXTIME', 'Feld "{{FIELD}}" muss älter oder gleich {{MAXTIME}} sein.');
    this.data.get('de').set('VALIDATION_ERROR_DATETIMEFORMAT', 'Feld ist kein gültiges Datum.');
    this.data.get('de').set('VALIDATION_ERROR_SUMMARY_DATETIMEFORMAT', 'Feld "{{FIELD}}" ist kein gültiges Datum.');
    this.data.get('de').set('VALIDATION_ERROR_FILESMIN', 'Es müssen min. {{MINFILES}} Dateien hochgeladen sein.');
    this.data.get('de').set('VALIDATION_ERROR_SUMMARY_FILESMIN', 'Feld "{{FIELD}}" muss min. {{MINFILES}} Dateien hochgeladen haben.');
    this.data.get('de').set('VALIDATION_ERROR_MULTILANGUAGEREQUIREDANY', 'Es muss min. 1 Sprache erfasst sein.');
    this.data.get('de').set('VALIDATION_ERROR_SUMMARY_MULTILANGUAGEREQUIREDANY', 'Feld "{{FIELD}}" muss min. 1 Sprache erfasst haben.');
    this.data.get('de').set('VALIDATION_ERROR_MULTILANGUAGEREQUIRED', 'Es müssen alle Sprachen erfasst sein.');
    this.data.get('de').set('VALIDATION_ERROR_SUMMARY_MULTILANGUAGEREQUIRED', 'Feld "{{FIELD}}" muss alle Sprachen erfasst haben.');

    // EN
    this.data.set('en', new Map<string, string>());

  }

  /**
   * Die Funktion setzt die default Sprache auf DE, falls die Sprach-Setzung nicht möglich ist.
   */
  private GetFallbackLanguage(): string {
    return 'de';
  }

  /**
   * Die Funktion ergibt die ausgewählte Sprache.
   */
  private GetLanguage(): string {
    let language: string = navigator.language;

    if (language.indexOf('-') >= 0) {
      return language.split('-')[0];
    } else {
      return language;
    }
  }

  /**
  * Die Methode ergibt die selecte Sprache (string)  anhand von Key und Params
  */
  public GetString(key: string, params?: any): Observable<string> {

    return new Observable<string>((observer) => {
      let language: string = this.GetLanguage();

      if (!this.data.has(language)) {
        language = this.GetFallbackLanguage();

        // Return Key if no Language exists
        if (!this.data.has(language)) {
          observer.next(key);
          observer.complete();
          return;
        }
      }

      if (this.data.get(language).has(key)) {
        let resource = this.data.get(language).get(key);
        if (params !== undefined && params !== null) {
          let formatter: Interpolation = new Interpolation();
          observer.next(formatter.interpolateString(resource, params));
          observer.complete();
          return;
        }
        else {
          observer.next(resource);
          observer.complete();
          return;
        }

      } else {
        observer.next(key);
        observer.complete();
        return;
      }
    })
  }
}
