import { BUTTONROLETYPE } from '../../enums/ButtonRoleType';

/**
 * Class for button templates in Confirm Button
 */
export class SacConfirmButton {
  // #region Properties

  /**
   * Key of the button. Is returned as a result when confirming
   */
  public key: string = '';
  /**
   * Layout of the button
   */
  public role: BUTTONROLETYPE = 'secondary';
  /**
   * Display text of the buttonAnzeigetext des Buttons
   */
  public text: string = '';

  // #endregion Properties

  // #region Constructors

  /**
   * Konstruktor
   * @param key Key for button
   * @param text Text for button
   * @param role Role type for the button. Default is ‘secondary’
   */
  constructor(
    key: string = '',
    text: string = '',
    role: BUTTONROLETYPE = 'default'
  ) {
    this.key = key;
    this.text = text;
    this.role = role;
  }

  // #endregion Constructors
}
