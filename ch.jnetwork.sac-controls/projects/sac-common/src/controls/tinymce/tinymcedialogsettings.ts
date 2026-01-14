import { TinyMceDialogSettingsMeta } from './tinymcedialogsettingsmeta';

/**
 * Settings für TinyMCE Dialog
 */
export class TinyMceDialogSettings {
    // #region Properties

    /**
     * File Type Filter
     */
    public allowedtypes: string;

    /**
     * Callback Methode für Dialog
     */
    public callback: any;

    /**
     * Meta Daten zu Dialog
     */
    public meta: TinyMceDialogSettingsMeta;

    /**
     * Wert aus Dialog
     */
    public value: string;

    // #endregion Properties

    // #region Constructors

    /**
     * Konstruktor
     * @param init Initale Werte
     */
    constructor(init?: Partial<TinyMceDialogSettings>) {
        Object.assign(this, init);
    }

    // #endregion Constructors
}
