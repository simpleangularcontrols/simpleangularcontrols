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
