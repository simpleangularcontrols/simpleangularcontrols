# Usage

Use this service to manage the languages in the controls. This service is used, for example, by the MultiLanguageControl to display the available languages to the user.

# Example

Example of the implementation of a SacLanguageService

```ts
@Injectable()
export class CustomLanguageService extends SacLanguageService {
  constructor(private http: HttpClient) {
    super();
  }

  configUrl = 'assets/languages.json';

  public GetLanguages(): Observable<LanguageModel[]> {
    const languages: LanguageModel[] = [];

    languages.push({
      Text: 'English',
      Icon: 'assets/icons/en.png',
      IconType: IconType.Image,
      IsoCode: 'en',
    });

    return of(languages);
  }
}
```
