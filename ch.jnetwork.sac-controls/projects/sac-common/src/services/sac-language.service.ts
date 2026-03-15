import { IconType } from '../enums/IconType';
import { ISacLanguageService } from '../interfaces/ISacLanguageService';
import { LanguageModel } from '../models/languagemodel';
import { Injectable, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

// #region Variables

/**
 * injection token for language service
 */
export const SACLANGUAGE_SERVICE = new InjectionToken<ISacLanguageService>('SacLanguageService');

// #endregion Variables

// #region Exported Classes

/**
 * abstract class for languages provides in components
 */
@Injectable({ providedIn: 'root' })
export abstract class SacAbstractLanguageService implements ISacLanguageService {
    // #region Public Methods

    /**
     * @inheritdoc
     */
    public abstract GetLanguages(): Observable<LanguageModel[]>;

    // #endregion Public Methods
}

/**
 * default service for languages
 * */
@Injectable({ providedIn: 'root' })
export class SacDefaultLanguageService extends SacAbstractLanguageService {
    // #region Public Methods

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

    // #endregion Public Methods
}

// #endregion Exported Classes
