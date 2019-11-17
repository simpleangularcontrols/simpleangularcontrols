import { Observable } from "rxjs";
import { LanguageModel } from '../models/languagemodel';

export interface ILanguageService {

  GetLanguages(): Observable<LanguageModel[]>;

}
