import { Observable } from 'rxjs';

/**
 * Interface for Language Resource Service implementation
 */
export interface ISacLocalisationService {
    // #region Methods

    /**
     * Get String based on Key and Params
     */
    GetString(key: string, params?: any): Observable<string>;

    // #endregion Methods
}
