import { IconType } from '../enums/IconType';

/**
 * Model for languages
 */
export class LanguageModel {
    // #region Properties

    /**
     * Icon for language
     */
    public Icon: string;

    /**
     * Type of the icon. Default is Image
     */
    public IconType: IconType = IconType.Image;

    /**
     * ISO Code for language
     */
    public IsoCode: string;

    /**
     * Designation for language
     */
    public Text: string;

    // #endregion Properties
}
