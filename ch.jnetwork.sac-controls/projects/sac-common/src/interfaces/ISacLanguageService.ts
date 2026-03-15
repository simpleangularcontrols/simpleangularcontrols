import { LanguageModel } from '../models/languagemodel';
import { Observable } from 'rxjs';

/**
 * Interface for language service
 */
export interface ISacLanguageService {
    // #region Methods

    /**
     * Returns any language that the application supports. These languages are populated to the
     * Multilanguage control.
     */
    GetLanguages(): Observable<LanguageModel[]>;

    // #endregion Methods
}
