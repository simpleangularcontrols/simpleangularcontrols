import { TinyMceDialogSettingsMeta } from './tinymcedialogsettingsmeta';

/**
 * Settings for TinyMCE dialog
 */
export class TinyMceDialogSettings {
    // #region Properties

    /**
     * File Type Filter
     */
    public allowedtypes: string;

    /**
     * Callback method for dialog
     */
    public callback: any;

    /**
     * Meta data for dialog
     */
    public meta: TinyMceDialogSettingsMeta;

    /**
     * Value from dialog
     */
    public value: string;

    // #endregion Properties

    // #region Constructors

    /**
     * Constructor
     * @param init Initial values
     */
    constructor(init?: Partial<TinyMceDialogSettings>) {
        Object.assign(this, init);
    }

    // #endregion Constructors
}
