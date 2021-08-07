import { TinyMceDialogSettingsMeta } from './tinymcedialogsettingsmeta';

/**
 * Settings für TinyMCE Dialog
 */
export class TinyMceDialogSettings {
  /**
   * Konstruktor
   * @param init Initale Werte
   */
  constructor(init?: Partial<TinyMceDialogSettings>) {
    Object.assign(this, init);
  }

  /**
   * Callback Methode für Dialog
   */
  public callback: any;
  /**
   * Wert aus Dialog
   */
  public value: string;
  /**
   * Meta Daten zu Dialog
   */
  public meta: TinyMceDialogSettingsMeta;
  /**
   * File Type Filter
   */
  public allowedtypes: string;
}
