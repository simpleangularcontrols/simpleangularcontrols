import { Observable } from 'rxjs';
import { LanguageModel } from '../models/languagemodel';

/**
 * Interface for language service
 */
export interface ISacLanguageService {
  /**
   * Returns any language, that the application supports. This Languages are populated to
   * Multilanguage Control.
   */

  GetLanguages(): Observable<LanguageModel[]>;
}
