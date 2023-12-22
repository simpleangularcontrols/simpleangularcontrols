import { Injectable, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { ISacLanguageService } from '../interfaces/ISacLanguageService';
import { LanguageModel } from '../models/languagemodel';
import { IconType } from '../public_api';

/**
 * injection token for language service
 */
export const SACLANGUAGE_SERVICE = new InjectionToken<ISacLanguageService>(
  'SacLanguageService'
);

/**
 * abstract class for languages provides in components
 */
@Injectable({ providedIn: 'root' })
export abstract class SacAbstractLanguageService
  implements ISacLanguageService
{
  /**
   * @inheritdoc
   */
  abstract GetLanguages(): Observable<LanguageModel[]>;
}

/**
 * default service for languages
 * */
@Injectable({ providedIn: 'root' })
export class SacDefaultLanguageService extends SacAbstractLanguageService {
  /**
   * @inheritdoc
   */
  public GetLanguages(): Observable<LanguageModel[]> {
    return new Observable<LanguageModel[]>((observer) => {
      const result: LanguageModel[] = [];

      result.push({
        Icon: '/icons/en.png',
        IconType: IconType.Image,
        IsoCode: 'en',
        Text: 'English',
      });

      observer.next(result);
      observer.complete();
    });
  }
}
