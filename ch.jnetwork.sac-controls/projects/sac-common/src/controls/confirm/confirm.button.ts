import { BUTTONROLETYPE } from '../../enums/ButtonRoleType';

/**
 * Class for button templates in Confirm Button
 */
export class SacConfirmButton {
    // #region Properties

    /**
     * Key of the button. Is returned as a result when confirming
     */
    public key = '';

    /**
     * Layout of the button
     */
    public role?: BUTTONROLETYPE | null = 'secondary';

    /**
     * Display text of the button
     */
    public text = '';

    // #endregion Properties

    // #region Constructors

    /**
     * Constructor
     * @param key Key for button
     * @param text Text for button
     * @param role Role type for the button. Default is 'default'
     */
    constructor(key: string = '', text: string = '', role: BUTTONROLETYPE = 'default') {
        this.key = key;
        this.text = text;
        this.role = role;
    }

    // #endregion Constructors
}
