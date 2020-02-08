import { Observable } from 'rxjs';

/**
 * Interface für Language Resource Service implementation
 */
export interface ILanguageResourceService {
  /**
   * Get String anhand von Key und Params
   */
  GetString(key: string, params?: any): Observable<string>;
}
