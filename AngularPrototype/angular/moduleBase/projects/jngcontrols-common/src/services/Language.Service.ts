import { Injectable, InjectionToken } from "@angular/core";
import { ILanguageService } from "../interfaces/ilanguageservice";
import { LanguageModel } from "../models/languagemodel";
import { Interpolation } from "../utilities/interpolation";
import { Observable } from "rxjs";

/**
 * Injection Token für Language Service
 */
export const LANGUAGE_SERVICE = new InjectionToken<ILanguageService>('LanguageService');

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

  abstract GetLanguages(): Observable<LanguageModel[]>;

}

/**
 * Standardservice für interne Übersetzungen der Fehlermeldungen
 * */
@Injectable({ providedIn: 'root' })
export class InternalLanguageService extends LanguageService {

  public GetLanguages(): Observable<LanguageModel[]> {

    return new Observable<LanguageModel[]>((observer) => {

      let result: LanguageModel[] = [];

      let de: LanguageModel = new LanguageModel();
      de.IcoCode = 'de';
      de.Icon = '/icons/de.png';
      de.Text = 'Deutsch';

      let en: LanguageModel = new LanguageModel();
      en.IcoCode = 'en';
      en.Icon = '/icons/en.png';
      en.Text = 'Englisch';

      result.push(de);
      result.push(en);

      observer.next(result);
      observer.complete();

    });
  }
}
