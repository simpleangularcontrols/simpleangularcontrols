import { isDefined } from './datatypes';

/**
 *  Klasse zum ersetzen von Platzhaltern in Strings
 */
export class Interpolation {

  /**
   *  Template zum Parsen der Platzhalter
   */
  private templateMatcher: RegExp = /{{\s?([^{}\s]*)\s?}}/g;

  /**
   * Platzhalter in String ersetzen
   * @param text Text in welchem die Platzhalter ersetzt werden
   * @param params Objekt mit Parameter.
   */
  public interpolateString(text: string, params?: any) {
    if (!params) {
      return text;
    }

    return text.replace(this.templateMatcher, (substring: string, b: string) => {
      const r = this.getValue(params, b);
      return isDefined(r) ? r : substring;
    });
  }

  /**
   * Wert aus Objekt in Objekt oder Objektstruktur lesen
   * @param target Objekt das zu parsen ist.
   * @param key Key nach welchem gesucht wird. Navigation in Properties des Objekt mit einem Punkt.
   */
  private getValue(target: any, key: string): any {
    const keys = key.split('.');
    key = '';
    do {
      key += keys.shift();
      if (isDefined(target) && isDefined(target[key]) && (typeof target[key] === 'object' || !keys.length)) {
        target = target[key];
        key = '';
      } else if (!keys.length) {
        target = undefined;
      } else {
        key += '.';
      }
    } while (keys.length);

    return target;
  }

}
