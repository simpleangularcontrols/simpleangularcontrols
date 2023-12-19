import { Injectable, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { ILanguageResourceService } from '../interfaces/ilanguageresource';
import { Interpolation } from '../utilities/interpolation';

/**
 * Injection Token für Language Resource Service
 */
export const LANGUAGERESOURCE_SERVICE =
  new InjectionToken<LanguageResourceService>('LanguageResourceService');

/**
 * Base Service für Localisation von Fehlermeldungen
 *
 * @example
 *
 * // Eigene Beispielimplementierung für Application mit ngx-translate
 * (at)Injectable()
 * export class ControlsLocalisation extends LanguageResourceService {
 *
 *   constructor(private translate: TranslateService) {
 *     super();
 *
 *     this.translate.setDefaultLang('de');
 *     this.translate.use('de');
 *   }
 *
 *     public GetString(key: string, params?: any): Observable<string> {
 *        return this.translate.get(key, params);
 *     }
 *  }
 *
 */

/**
 * Service für interne Übersetzungen
 * */
@Injectable({ providedIn: 'root' })
export abstract class LanguageResourceService
  implements ILanguageResourceService
{
  /**
   * Die Methode übersetzt den eingegebenen Wort/Begriff. Verlangt key und optionell params
   */
  abstract GetString(key: string, params?: any): Observable<string>;

  //#region Required Resources

  protected abstract get VALIDATION_ERROR_REQUIRED(): Map<string, string>;
  protected abstract get VALIDATION_ERROR_SUMMARY_REQUIRED(): Map<
    string,
    string
  >;
  protected abstract get VALIDATION_ERROR_MINVALUE(): Map<string, string>;
  protected abstract get VALIDATION_ERROR_SUMMARY_MINVALUE(): Map<
    string,
    string
  >;
  protected abstract get VALIDATION_ERROR_PATTERN(): Map<string, string>;
  protected abstract get VALIDATION_ERROR_SUMMARY_PATTERN(): Map<
    string,
    string
  >;
  protected abstract get VALIDATION_ERROR_MAXVALUE(): Map<string, string>;
  protected abstract get VALIDATION_ERROR_SUMMARY_MAXVALUE(): Map<
    string,
    string
  >;
  protected abstract get VALIDATION_ERROR_EMAIL(): Map<string, string>;
  protected abstract get VALIDATION_ERROR_SUMMARY_EMAIL(): Map<string, string>;
  protected abstract get VALIDATION_ERROR_MINLENGTH(): Map<string, string>;
  protected abstract get VALIDATION_ERROR_SUMMARY_MINLENGTH(): Map<
    string,
    string
  >;
  protected abstract get VALIDATION_ERROR_MINDATE(): Map<string, string>;
  protected abstract get VALIDATION_ERROR_SUMMARY_MINDATE(): Map<
    string,
    string
  >;
  protected abstract get VALIDATION_ERROR_MAXDATE(): Map<string, string>;
  protected abstract get VALIDATION_ERROR_SUMMARY_MAXDATE(): Map<
    string,
    string
  >;
  protected abstract get VALIDATION_ERROR_MINTIME(): Map<string, string>;
  protected abstract get VALIDATION_ERROR_SUMMARY_MINTIME(): Map<
    string,
    string
  >;
  protected abstract get VALIDATION_ERROR_MAXTIME(): Map<string, string>;
  protected abstract get VALIDATION_ERROR_SUMMARY_MAXTIME(): Map<
    string,
    string
  >;
  protected abstract get VALIDATION_ERROR_DATETIMEFORMAT(): Map<string, string>;
  protected abstract get VALIDATION_ERROR_SUMMARY_DATETIMEFORMAT(): Map<
    string,
    string
  >;
  protected abstract get VALIDATION_ERROR_FILESMIN(): Map<string, string>;
  protected abstract get VALIDATION_ERROR_SUMMARY_FILESMIN(): Map<
    string,
    string
  >;
  protected abstract get VALIDATION_ERROR_MULTILANGUAGEREQUIREDANY(): Map<
    string,
    string
  >;
  protected abstract get VALIDATION_ERROR_SUMMARY_MULTILANGUAGEREQUIREDANY(): Map<
    string,
    string
  >;
  protected abstract get VALIDATION_ERROR_MULTILANGUAGEREQUIRED(): Map<
    string,
    string
  >;
  protected abstract get VALIDATION_ERROR_SUMMARY_MULTILANGUAGEREQUIRED(): Map<
    string,
    string
  >;

  protected abstract get PAGING_PAGEOFTEXT(): Map<string, string>;
  protected abstract get PAGING_PAGEENTRIESTEXT(): Map<string, string>;

  protected abstract get UPLOAD_NO_FILE_SELECTED(): Map<string, string>;
  protected abstract get UPLOAD_BUTTON_UPLOAD(): Map<string, string>;
  protected abstract get UPLOAD_BUTTON_BROWSE(): Map<string, string>;

  protected abstract get TINYMCE_FILESELECT_OK(): Map<string, string>;
  protected abstract get TINYMCE_FILESELECT_CANCEL(): Map<string, string>;
  protected abstract get TINYMCE_FILESELECT_DIALOGTITLE(): Map<string, string>;

  protected abstract get FILEBROWSER_NO_FILES(): Map<string, string>;
  protected abstract get FILEBROWSER_GRID_FILE(): Map<string, string>;
  protected abstract get FILEBROWSER_GRID_SIZE(): Map<string, string>;
  protected abstract get FILEBROWSER_UPLOAD(): Map<string, string>;
  protected abstract get FILEBROWSER_NEWFOLDER(): Map<string, string>;
  protected abstract get FILEBROWSER_REFRESH(): Map<string, string>;
  protected abstract get FILEBROWSER_DELETE(): Map<string, string>;
  protected abstract get FILEBROWSER_CONFIRM_DELETEFOLDER(): Map<
    string,
    string
  >;
  protected abstract get FILEBROWSER_CONFIRM_DELETEFILE(): Map<string, string>;

  //#endregion
}

/**
 * Standardservice für interne Übersetzungen der Fehlermeldungen
 * */
@Injectable({ providedIn: 'root' })
export class InternalLanguageResourceService extends LanguageResourceService {
  /**
   * Language Resources für Controls Library
   */
  data: Map<string, Map<string, string>> = new Map<
    string,
    Map<string, string>
  >();

  /**
   * Konstruktor
   * */
  constructor() {
    super();

    // Set Languages
    this.data.set('de', new Map<string, string>());

    // Validation
    this.data
      .get('de')
      .set(
        'VALIDATION_ERROR_REQUIRED',
        this.VALIDATION_ERROR_REQUIRED.get('de')
      );
    this.data
      .get('de')
      .set(
        'VALIDATION_ERROR_SUMMARY_REQUIRED',
        this.VALIDATION_ERROR_SUMMARY_REQUIRED.get('de')
      );
    this.data
      .get('de')
      .set(
        'VALIDATION_ERROR_MINVALUE',
        this.VALIDATION_ERROR_MINVALUE.get('de')
      );
    this.data
      .get('de')
      .set(
        'VALIDATION_ERROR_SUMMARY_MINVALUE',
        this.VALIDATION_ERROR_SUMMARY_MINVALUE.get('de')
      );
    this.data
      .get('de')
      .set('VALIDATION_ERROR_PATTERN', this.VALIDATION_ERROR_PATTERN.get('de'));
    this.data
      .get('de')
      .set(
        'VALIDATION_ERROR_SUMMARY_PATTERN',
        this.VALIDATION_ERROR_SUMMARY_PATTERN.get('de')
      );
    this.data
      .get('de')
      .set(
        'VALIDATION_ERROR_MAXVALUE',
        this.VALIDATION_ERROR_MAXVALUE.get('de')
      );
    this.data
      .get('de')
      .set(
        'VALIDATION_ERROR_SUMMARY_MAXVALUE',
        this.VALIDATION_ERROR_SUMMARY_MAXVALUE.get('de')
      );
    this.data
      .get('de')
      .set('VALIDATION_ERROR_EMAIL', this.VALIDATION_ERROR_EMAIL.get('de'));
    this.data
      .get('de')
      .set(
        'VALIDATION_ERROR_SUMMARY_EMAIL',
        this.VALIDATION_ERROR_SUMMARY_EMAIL.get('de')
      );
    this.data
      .get('de')
      .set(
        'VALIDATION_ERROR_MINLENGTH',
        this.VALIDATION_ERROR_MINLENGTH.get('de')
      );
    this.data
      .get('de')
      .set(
        'VALIDATION_ERROR_SUMMARY_MINLENGTH',
        this.VALIDATION_ERROR_SUMMARY_MINLENGTH.get('de')
      );
    this.data
      .get('de')
      .set('VALIDATION_ERROR_MINDATE', this.VALIDATION_ERROR_MINDATE.get('de'));
    this.data
      .get('de')
      .set(
        'VALIDATION_ERROR_SUMMARY_MINDATE',
        this.VALIDATION_ERROR_SUMMARY_MINDATE.get('de')
      );
    this.data
      .get('de')
      .set('VALIDATION_ERROR_MAXDATE', this.VALIDATION_ERROR_MAXDATE.get('de'));
    this.data
      .get('de')
      .set(
        'VALIDATION_ERROR_SUMMARY_MAXDATE',
        this.VALIDATION_ERROR_SUMMARY_MAXDATE.get('de')
      );
    this.data
      .get('de')
      .set('VALIDATION_ERROR_MINTIME', this.VALIDATION_ERROR_MINTIME.get('de'));
    this.data
      .get('de')
      .set(
        'VALIDATION_ERROR_SUMMARY_MINTIME',
        this.VALIDATION_ERROR_SUMMARY_MINTIME.get('de')
      );
    this.data
      .get('de')
      .set('VALIDATION_ERROR_MAXTIME', this.VALIDATION_ERROR_MAXTIME.get('de'));
    this.data
      .get('de')
      .set(
        'VALIDATION_ERROR_SUMMARY_MAXTIME',
        this.VALIDATION_ERROR_SUMMARY_MAXTIME.get('de')
      );
    this.data
      .get('de')
      .set(
        'VALIDATION_ERROR_DATETIMEFORMAT',
        this.VALIDATION_ERROR_DATETIMEFORMAT.get('de')
      );
    this.data
      .get('de')
      .set(
        'VALIDATION_ERROR_SUMMARY_DATETIMEFORMAT',
        this.VALIDATION_ERROR_SUMMARY_DATETIMEFORMAT.get('de')
      );
    this.data
      .get('de')
      .set(
        'VALIDATION_ERROR_FILESMIN',
        this.VALIDATION_ERROR_FILESMIN.get('de')
      );
    this.data
      .get('de')
      .set(
        'VALIDATION_ERROR_SUMMARY_FILESMIN',
        this.VALIDATION_ERROR_SUMMARY_FILESMIN.get('de')
      );
    this.data
      .get('de')
      .set(
        'VALIDATION_ERROR_MULTILANGUAGEREQUIREDANY',
        this.VALIDATION_ERROR_MULTILANGUAGEREQUIREDANY.get('de')
      );
    this.data
      .get('de')
      .set(
        'VALIDATION_ERROR_SUMMARY_MULTILANGUAGEREQUIREDANY',
        this.VALIDATION_ERROR_SUMMARY_MULTILANGUAGEREQUIREDANY.get('de')
      );
    this.data
      .get('de')
      .set(
        'VALIDATION_ERROR_MULTILANGUAGEREQUIRED',
        this.VALIDATION_ERROR_MULTILANGUAGEREQUIRED.get('de')
      );
    this.data
      .get('de')
      .set(
        'VALIDATION_ERROR_SUMMARY_MULTILANGUAGEREQUIRED',
        this.VALIDATION_ERROR_SUMMARY_MULTILANGUAGEREQUIRED.get('de')
      );

    // Grid Component
    this.data
      .get('de')
      .set('PAGING_PAGEOFTEXT', this.PAGING_PAGEOFTEXT.get('de'));
    this.data
      .get('de')
      .set('PAGING_PAGEENTRIESTEXT', this.PAGING_PAGEENTRIESTEXT.get('de'));

    // Upload Component
    this.data
      .get('de')
      .set('UPLOAD_NO_FILE_SELECTED', this.UPLOAD_NO_FILE_SELECTED.get('de'));
    this.data
      .get('de')
      .set('UPLOAD_BUTTON_UPLOAD', this.UPLOAD_BUTTON_UPLOAD.get('de'));
    this.data
      .get('de')
      .set('UPLOAD_BUTTON_BROWSE', this.UPLOAD_BUTTON_BROWSE.get('de'));

    // TinyMCE Component
    this.data
      .get('de')
      .set('TINYMCE_FILESELECT_OK', this.TINYMCE_FILESELECT_OK.get('de'));
    this.data
      .get('de')
      .set(
        'TINYMCE_FILESELECT_CANCEL',
        this.TINYMCE_FILESELECT_CANCEL.get('de')
      );
    this.data
      .get('de')
      .set(
        'TINYMCE_FILESELECT_DIALOGTITLE',
        this.TINYMCE_FILESELECT_DIALOGTITLE.get('de')
      );

    // Browser Component
    this.data
      .get('de')
      .set('FILEBROWSER_NO_FILES', this.FILEBROWSER_NO_FILES.get('de'));
    this.data
      .get('de')
      .set('FILEBROWSER_GRID_FILE', this.FILEBROWSER_GRID_FILE.get('de'));
    this.data
      .get('de')
      .set('FILEBROWSER_GRID_SIZE', this.FILEBROWSER_GRID_SIZE.get('de'));
    this.data
      .get('de')
      .set('FILEBROWSER_UPLOAD', this.FILEBROWSER_UPLOAD.get('de'));
    this.data
      .get('de')
      .set('FILEBROWSER_NEWFOLDER', this.FILEBROWSER_NEWFOLDER.get('de'));
    this.data
      .get('de')
      .set('FILEBROWSER_REFRESH', this.FILEBROWSER_REFRESH.get('de'));
    this.data
      .get('de')
      .set('FILEBROWSER_DELETE', this.FILEBROWSER_DELETE.get('de'));
    this.data
      .get('de')
      .set(
        'FILEBROWSER_CONFIRM_DELETEFOLDER',
        this.FILEBROWSER_CONFIRM_DELETEFOLDER.get('de')
      );
    this.data
      .get('de')
      .set(
        'FILEBROWSER_CONFIRM_DELETEFILE',
        this.FILEBROWSER_CONFIRM_DELETEFILE.get('de')
      );

    // EN
    this.data.set('en', new Map<string, string>());
  }

  /**
   * Die Funktion setzt die default Sprache auf DE, falls die Sprach-Setzung nicht möglich ist.
   */
  private GetFallbackLanguage(): string {
    return 'de';
  }

  /**
   * Die Funktion ergibt die ausgewählte Sprache.
   */
  private GetLanguage(): string {
    const language: string = navigator.language;

    if (language.indexOf('-') >= 0) {
      return language.split('-')[0];
    } else {
      return language;
    }
  }

  /**
   * Die Methode ergibt die selecte Sprache (string)  anhand von Key und Params
   */
  public GetString(key: string, params?: any): Observable<string> {
    return new Observable<string>((observer) => {
      let language: string = this.GetLanguage();

      if (!this.data.has(language)) {
        language = this.GetFallbackLanguage();

        // Return Key if no Language exists
        if (!this.data.has(language)) {
          observer.next(key);
          observer.complete();
          return;
        }
      }

      if (this.data.get(language).has(key)) {
        const resource = this.data.get(language).get(key);
        if (params !== undefined && params !== null) {
          const formatter: Interpolation = new Interpolation();
          observer.next(formatter.interpolateString(resource, params));
          observer.complete();
          return;
        } else {
          observer.next(resource);
          observer.complete();
          return;
        }
      } else {
        observer.next(key);
        observer.complete();
        return;
      }
    });
  }

  protected get VALIDATION_ERROR_REQUIRED(): Map<string, string> {
    return new Map<string, string>([['de', 'Feld ist erforderlich.']]);
  }
  protected get VALIDATION_ERROR_SUMMARY_REQUIRED(): Map<string, string> {
    return new Map<string, string>([
      ['de', 'Feld "{{FIELD}}" ist erforderlich.'],
    ]);
  }
  protected get VALIDATION_ERROR_MINVALUE(): Map<string, string> {
    return new Map<string, string>([
      ['de', 'Wert darf nicht kleiner als {{MINVALUE}} sein.'],
    ]);
  }
  protected get VALIDATION_ERROR_SUMMARY_MINVALUE(): Map<string, string> {
    return new Map<string, string>([
      ['de', 'Feld "{{FIELD}}" darf nicht kleiner als {{MINVALUE}} sein.'],
    ]);
  }
  protected get VALIDATION_ERROR_PATTERN(): Map<string, string> {
    return new Map<string, string>([
      ['de', 'Wert entspricht nicht der Format Vorlage.'],
    ]);
  }
  protected get VALIDATION_ERROR_SUMMARY_PATTERN(): Map<string, string> {
    return new Map<string, string>([
      ['de', 'Feld "{{FIELD}}" entspricht nicht der Format Vorlage.'],
    ]);
  }
  protected get VALIDATION_ERROR_SUMMARY_MAXVALUE(): Map<string, string> {
    return new Map<string, string>([
      ['de', 'Wert darf nicht grösser als {{MAXVALUE}} sein.'],
    ]);
  }
  protected get VALIDATION_ERROR_MAXVALUE(): Map<string, string> {
    return new Map<string, string>([
      ['de', 'Feld "{{FIELD}}" darf nicht grösser als {{MAXVALUE}} sein.'],
    ]);
  }
  protected get VALIDATION_ERROR_EMAIL(): Map<string, string> {
    return new Map<string, string>([['de', 'Feld ist keine E-Mail Adresse']]);
  }
  protected get VALIDATION_ERROR_SUMMARY_EMAIL(): Map<string, string> {
    return new Map<string, string>([
      ['de', 'Feld "{{FIELD}}" ist keine E-Mail Adresse'],
    ]);
  }
  protected get VALIDATION_ERROR_MINLENGTH(): Map<string, string> {
    return new Map<string, string>([
      ['de', 'Feld erfordert min. {{MINLENGTH}} Zeichen.'],
    ]);
  }
  protected get VALIDATION_ERROR_SUMMARY_MINLENGTH(): Map<string, string> {
    return new Map<string, string>([
      ['de', 'Feld "{{FIELD}}" erfordert min. {{MINLENGTH}} Zeichen.'],
    ]);
  }
  protected get VALIDATION_ERROR_MINDATE(): Map<string, string> {
    return new Map<string, string>([
      ['de', 'Feld muss neuer oder gleich {{MINDATE}} sein.'],
    ]);
  }
  protected get VALIDATION_ERROR_SUMMARY_MINDATE(): Map<string, string> {
    return new Map<string, string>([
      ['de', 'Feld "{{FIELD}}" muss neuer oder gleich {{MINDATE}} sein.'],
    ]);
  }
  protected get VALIDATION_ERROR_MAXDATE(): Map<string, string> {
    return new Map<string, string>([
      ['de', 'Feld muss älter oder gleich {{MAXDATE}} sein.'],
    ]);
  }
  protected get VALIDATION_ERROR_SUMMARY_MAXDATE(): Map<string, string> {
    return new Map<string, string>([
      ['de', 'Feld "{{FIELD}}" muss älter oder gleich {{MAXDATE}} sein.'],
    ]);
  }
  protected get VALIDATION_ERROR_MINTIME(): Map<string, string> {
    return new Map<string, string>([
      ['de', 'Feld muss neuer oder gleich {{MINTIME}} sein.'],
    ]);
  }
  protected get VALIDATION_ERROR_SUMMARY_MINTIME(): Map<string, string> {
    return new Map<string, string>([
      ['de', 'Feld "{{FIELD}}" muss neuer oder gleich {{MINTIME}} sein.'],
    ]);
  }
  protected get VALIDATION_ERROR_MAXTIME(): Map<string, string> {
    return new Map<string, string>([
      ['de', 'Feld muss älter oder gleich {{MAXTIME}} sein.'],
    ]);
  }
  protected get VALIDATION_ERROR_SUMMARY_MAXTIME(): Map<string, string> {
    return new Map<string, string>([
      ['de', 'Feld "{{FIELD}}" muss älter oder gleich {{MAXTIME}} sein.'],
    ]);
  }
  protected get VALIDATION_ERROR_DATETIMEFORMAT(): Map<string, string> {
    return new Map<string, string>([['de', 'Feld ist kein gültiges Datum.']]);
  }
  protected get VALIDATION_ERROR_SUMMARY_DATETIMEFORMAT(): Map<string, string> {
    return new Map<string, string>([
      ['de', 'Feld "{{FIELD}}" ist kein gültiges Datum.'],
    ]);
  }
  protected get VALIDATION_ERROR_FILESMIN(): Map<string, string> {
    return new Map<string, string>([
      ['de', 'Es müssen min. {{MINFILES}} Dateien hochgeladen sein.'],
    ]);
  }
  protected get VALIDATION_ERROR_SUMMARY_FILESMIN(): Map<string, string> {
    return new Map<string, string>([
      [
        'de',
        'Feld "{{FIELD}}" muss min. {{MINFILES}} Dateien hochgeladen haben.',
      ],
    ]);
  }
  protected get VALIDATION_ERROR_MULTILANGUAGEREQUIREDANY(): Map<
    string,
    string
  > {
    return new Map<string, string>([
      ['de', 'Es muss min. 1 Sprache erfasst sein.'],
    ]);
  }
  protected get VALIDATION_ERROR_SUMMARY_MULTILANGUAGEREQUIREDANY(): Map<
    string,
    string
  > {
    return new Map<string, string>([
      ['de', 'Feld "{{FIELD}}" muss min. 1 Sprache erfasst haben.'],
    ]);
  }
  protected get VALIDATION_ERROR_MULTILANGUAGEREQUIRED(): Map<string, string> {
    return new Map<string, string>([
      ['de', 'Es müssen alle Sprachen erfasst sein.'],
    ]);
  }
  protected get VALIDATION_ERROR_SUMMARY_MULTILANGUAGEREQUIRED(): Map<
    string,
    string
  > {
    return new Map<string, string>([
      ['de', 'Feld "{{FIELD}}" muss alle Sprachen erfasst haben.'],
    ]);
  }

  protected get PAGING_PAGEOFTEXT(): Map<string, string> {
    return new Map<string, string>([
      ['de', 'Seite {{CURRENTPAGE}} von {{TOTALPAGES}}'],
    ]);
  }
  protected get PAGING_PAGEENTRIESTEXT(): Map<string, string> {
    return new Map<string, string>([['de', 'Einträge pro Seite']]);
  }

  protected get UPLOAD_NO_FILE_SELECTED(): Map<string, string> {
    return new Map<string, string>([['de', 'Keine Datei ausgewählt']]);
  }
  protected get UPLOAD_BUTTON_UPLOAD(): Map<string, string> {
    return new Map<string, string>([['de', 'Upload']]);
  }
  protected get UPLOAD_BUTTON_BROWSE(): Map<string, string> {
    return new Map<string, string>([['de', 'Browse...']]);
  }
  protected get TINYMCE_FILESELECT_OK(): Map<string, string> {
    return new Map<string, string>([['de', 'OK']]);
  }
  protected get TINYMCE_FILESELECT_CANCEL(): Map<string, string> {
    return new Map<string, string>([['de', 'Abbrechen']]);
  }
  protected get TINYMCE_FILESELECT_DIALOGTITLE(): Map<string, string> {
    return new Map<string, string>([['de', 'Datei auswählen']]);
  }
  protected get FILEBROWSER_NO_FILES(): Map<string, string> {
    return new Map<string, string>([['de', 'Keine Dateien vorhanden']]);
  }
  protected get FILEBROWSER_GRID_FILE(): Map<string, string> {
    return new Map<string, string>([['de', 'Dateiname']]);
  }
  protected get FILEBROWSER_GRID_SIZE(): Map<string, string> {
    return new Map<string, string>([['de', 'Grösse']]);
  }
  protected get FILEBROWSER_UPLOAD(): Map<string, string> {
    return new Map<string, string>([
      ['de', 'Legen Sie Dateien hier ab um Sie hochzuladen'],
    ]);
  }
  protected get FILEBROWSER_NEWFOLDER(): Map<string, string> {
    return new Map<string, string>([['de', 'Neuer Ordner']]);
  }
  protected get FILEBROWSER_REFRESH(): Map<string, string> {
    return new Map<string, string>([['de', 'Aktualisieren']]);
  }
  protected get FILEBROWSER_DELETE(): Map<string, string> {
    return new Map<string, string>([['de', 'Löschen']]);
  }
  protected get FILEBROWSER_CONFIRM_DELETEFOLDER(): Map<string, string> {
    return new Map<string, string>([
      ['de', 'Soll der Ordner gelöscht werden?'],
    ]);
  }
  protected get FILEBROWSER_CONFIRM_DELETEFILE(): Map<string, string> {
    return new Map<string, string>([['de', 'Soll die Datei gelöscht werden?']]);
  }
}
