import { Injectable, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { ILanguageService } from '../interfaces/ilanguageservice';
import { LanguageModel } from '../models/languagemodel';

/**
 * Injection Token für Language Service
 */
export const LANGUAGE_SERVICE = new InjectionToken<ILanguageService>(
  'LanguageService'
);

/**
 * Base Service für Localisation von Fehlermeldungen
 *
 * @example
 *
 * // Eigene Beispielimplementierung für Application
 *
 * (at)Injectable()
 * export class ControlsLanguageService extends LanguageService {
 *
 *   constructor(private http: HttpClient) {
 *     super();
 *   }
 *
 *    configUrl = 'assets/languages.json';
 *
 *    public GetLanguages(): Observable<LanguageModel[]> {
 *      return this.http.get(this.configUrl);
 *    }
 *  }
 *
 */
@Injectable({ providedIn: 'root' })
export abstract class LanguageService implements ILanguageService {
  /**
   * Gibt alle verfügbaren Sprachen zurück
   * @returns Observable von allen Sprachen
   */
  abstract GetLanguages(): Observable<LanguageModel[]>;
}

/**
 * Standardservice für interne Übersetzungen der Fehlermeldungen
 * */
@Injectable({ providedIn: 'root' })
export class InternalLanguageService extends LanguageService {
  /**
   * Gibt alle verfügbaren Sprachen zurück
   * @returns Observable von allen Sprachen
   */
  public GetLanguages(): Observable<LanguageModel[]> {
    return new Observable<LanguageModel[]>((observer) => {
      const result: LanguageModel[] = [];

      const de: LanguageModel = new LanguageModel();
      de.IsoCode = 'de';
      de.Icon = '/icons/de.png';
      de.Text = 'Deutsch';

      const en: LanguageModel = new LanguageModel();
      en.IsoCode = 'en';
      en.Icon = '/icons/en.png';
      en.Text = 'Englisch';

      result.push(de);
      result.push(en);

      observer.next(result);
      observer.complete();
    });
  }
}
