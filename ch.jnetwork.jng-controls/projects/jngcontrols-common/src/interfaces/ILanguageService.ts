import { Observable } from 'rxjs';
import { LanguageModel } from '../models/languagemodel';

/**
 * Interface für Language Service
 */
export interface ILanguageService {
  /**
   * Gibt die möglichen Sprachen zurück
   */

  GetLanguages(): Observable<LanguageModel[]>;
}
