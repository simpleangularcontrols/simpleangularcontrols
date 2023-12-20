/**
 * Klasse für Button Templates in Confirm Button
 */
export class SacConfirmButton {
  /**
   * Konstruktor
   * @param key Key für Button
   * @param text Text für Button
   */
  constructor(key: string = '', text: string = '') {
    this.key = key;
    this.text = text;
  }

  /**
   * Key des Buttons. Wird als Result beim Confirm zurückgegeben
   */
  public key: string = '';

  /**
   * Anzeigetext des Buttons
   */
  public text: string = '';
}
