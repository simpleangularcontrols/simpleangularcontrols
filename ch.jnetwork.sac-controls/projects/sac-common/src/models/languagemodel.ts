import { IconType } from '../enums/IconType';

/**
 * Model für Sprachen
 */
export class LanguageModel {
    // #region Properties

    /**
     * Icon für Sprache
     */
    public Icon: string;

    /**
     * Typ des Icons. Default ist Image
     */
    public IconType: IconType = IconType.Image;

    /**
     * ISO Code zu Sprache
     */
    public IsoCode: string;

    /**
     * Bezeichnung für Sprache
     */
    public Text: string;

    // #endregion Properties
}
