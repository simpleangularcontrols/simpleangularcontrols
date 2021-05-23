import { IconType } from '../enums/IconType';

/**
 * Model für Sprachen
 */
export class LanguageModel {
  /**
   * ISO Code zu Sprache
   */
  public IsoCode: string;
  /**
   * Icon für Sprache
   */
  public Icon: string;
  /**
   * Bezeichnung für Sprache
   */
  public Text: string;
  /**
   * Typ des Icons. Default ist Image
   */
  public IconType: IconType = IconType.Image;
}
