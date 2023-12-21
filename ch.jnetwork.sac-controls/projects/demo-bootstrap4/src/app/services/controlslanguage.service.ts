import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  IconType,
  LanguageModel,
  LanguageService,
} from '@simpleangularcontrols/sac-common';
import { Observable, of } from 'rxjs';

@Injectable()
export class ControlsLanguageService extends LanguageService {
  constructor() {
    super();
  }

  private languages: Observable<LanguageModel[]> | null = null;

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
}
