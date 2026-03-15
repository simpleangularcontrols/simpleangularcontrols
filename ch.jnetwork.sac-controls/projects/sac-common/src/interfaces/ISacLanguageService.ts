import { LanguageModel } from '../models/languagemodel';
import { Observable } from 'rxjs';

/**
 * Interface for language service
 */
export interface ISacLanguageService {
    // #region Methods

    /**
     * Returns any language, that the application supports. This Languages are populated to
     * Multilanguage Control.
     */
    GetLanguages(): Observable<LanguageModel[]>;

    // #endregion Methods
}
