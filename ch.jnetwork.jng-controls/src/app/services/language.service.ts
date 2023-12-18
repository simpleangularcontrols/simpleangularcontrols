import { LanguageService } from '@jnetwork/sac-common';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LanguageModel } from '@jnetwork/sac-common';
import { HttpClient } from '@angular/common/http';
import { shareReplay } from 'rxjs/operators';

@Injectable()
export class ControlsLanguageService extends LanguageService {

  constructor(private http: HttpClient) {
    super();
  }

  private languages: Observable<LanguageModel[]>;

  public GetLanguages(): Observable<LanguageModel[]> {

    if (!this.languages) {
      // this.languages = this.http.get<LanguageModel[]>('/languages.json').pipe(shareReplay(1));
      this.languages = this.http.get<LanguageModel[]>('/languages_sprite.json').pipe(shareReplay(1));
    }

    return this.languages;
  }
}
