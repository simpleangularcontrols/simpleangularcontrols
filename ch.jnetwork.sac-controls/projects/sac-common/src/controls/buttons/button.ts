import { BUTTONROLETYPE } from '../../enums/ButtonRoleType';
import { Directive, EventEmitter, Input, Output } from '@angular/core';

/**
 * Base component for the button
 */
@Directive()
export class SacButtonCommon {
    // #region Properties

    /**
     * Boolean property defines whether the button is 'disabled'; default - false
     */
    private _isdisabledvalue = false;

    /**
     * This property defines the role of the button. Default value is 'default'.
     */
    private _role: BUTTONROLETYPE = 'default';

    /**
     * This boolean property is used for activating the spinner of the button. Default is false.
     */
    public _isloadingvalue = false;

    /**
     * Output Event Emitter
     */
    @Output()
    public clicked = new EventEmitter();

    /**
     * Identifier used for the E2E data attribute.
     */
    @Input()
    public e2eidentifier: string | null = null;

    /**
     * Boolean property for error; default value - false
     */
    public hasError = false;

    /**
     * Input property for icon style class; default value - ''
     */
    @Input() public icon = '';

    /**
     * Input property for name; default value - ''
     */
    @Input() public name = '';

    /**
     * Input property for button text; default value - ''
     */
    @Input() public text = '';

    // #endregion Properties

    // #region Public Getters And Setters

    /**
     * Getter method. Returns boolean value. Defines whether the button is disabled.
     */
    public get _isdisabled(): boolean {
        return this._isdisabledvalue;
    }

    /**
     * Returns whether the button is disabled.
     */
    public get isdisabled(): boolean | string {
        return this._isdisabledvalue;
    }

    /**
     * Disables buttons
     * @param v Disables the button
     * @return Defines whether the button is disabled
     */
    @Input()
    public set isdisabled(v: boolean | string) {
        if (v === null || v === undefined || typeof v === 'boolean') {
            this._isdisabledvalue = v as boolean;
        } else {
            this._isdisabledvalue = v === 'true';
        }
    }

    /**
     * Returns whether the loading spinner is active.
     */
    public get isloading(): boolean | string {
        return this._isloadingvalue;
    }

    /**
     * This input property defines the status of the isloading property. It is used for activating the spinner of the button.
     */
    @Input()
    public set isloading(v: boolean | string) {
        if (v === null || v === undefined || typeof v === 'boolean') {
            this._isloadingvalue = v as boolean;
        } else {
            this._isloadingvalue = v === 'true';
        }
    }

    /**
     * This method returns the defined style role of the button
     */
    public get role(): BUTTONROLETYPE {
        return this._role;
    }

    /**
     * Defines the style of the button
     * @param  v Defines the style of the button.
     * The following types are supported: primary, secondary, success, danger, warning, info, light, dark, link, default
     * @returns  Type of the button
     */
    @Input()
    public set role(v: BUTTONROLETYPE) {
        // Validation of Input
        switch (v) {
            case '':
            case 'primary':
            case 'default':
            case 'light':
            case 'dark':
            case 'link':
            case 'success':
            case 'secondary':
            case 'danger':
            case 'warning':
            case 'info':
                // Empty Role is Default
                if (v === '') {
                    this._role = 'default';
                } else {
                    this._role = v;
                }
                break;
            default:
                throw new Error('Invalid role " + v + " for button.');
        }
    }

    // #endregion Public Getters And Setters

    // #region Public Methods

    /**
     * This method will trigger an event when the button is clicked AND the button is not disabled OR isloading.
     */
    public buttonClick() {
        if (this._isdisabled === false && this._isloadingvalue === false) {
            this.clicked.emit();
        }
    }

    // #endregion Public Methods
}
