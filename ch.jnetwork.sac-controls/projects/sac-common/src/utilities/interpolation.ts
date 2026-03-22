import { isDefined } from './datatypes';

/**
 * Class for replacing placeholders in strings
 */
export class Interpolation {
    // #region Properties

    /**
     * Template for parsing placeholders
     */
    private templateMatcher = /{{\s?([^{}\s]*)\s?}}/g;

    // #endregion Properties

    // #region Public Methods

    /**
     * Replace placeholders in string
     * @param text Text in which placeholders are replaced
     * @param params Object with parameters
     * @returns The interpolated string with placeholders replaced
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

    // #endregion Public Methods

    // #region Private Methods

    /**
     * Read value from object in object or object structure
     * @param target Object to be parsed.
     * @param key Key to search for. Navigation in object properties with a dot.
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

    // #endregion Private Methods
}
