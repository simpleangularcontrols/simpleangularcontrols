import { Observable } from "rxjs";

export interface ILanguageResourceService {
  GetString(key: string, params?: any): Observable<string>;
}
