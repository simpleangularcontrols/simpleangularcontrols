import { Injectable } from '@angular/core';
import { IconType, LanguageModel, SacAbstractLanguageService } from '@simpleangularcontrols/sac-common';
import { Observable, of } from 'rxjs';

@Injectable()
export class ControlsLanguageService extends SacAbstractLanguageService {
    // #region Properties

    private languages: Observable<LanguageModel[]> | null = null;

    // #endregion Properties

    // #region Constructors

    /**
     * Initializes the language service.
     */
    constructor() {
        super();
    }

    // #endregion Constructors

    // #region Public Methods

    /**
     * Returns the static list of available UI languages.
     * @returns Observable containing available languages.
     */
    public GetLanguages(): Observable<LanguageModel[]> {
        const lang: LanguageModel[] = [];

        lang.push(
            {
                Text: 'Deutsch',
                Icon: 'assets/icons/de.png',
                IconType: IconType.Image,
                IsoCode: 'de',
            },
            {
                Text: 'English',
                Icon: 'assets/icons/en.png',
                IconType: IconType.Image,
                IsoCode: 'en',
            }
        );

        return of(lang);
    }

    // #endregion Public Methods
}
