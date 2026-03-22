import { SacContextmenuItemCommon } from './contextmenuitem';
import { Directive, EventEmitter, Input, Output } from '@angular/core';

/**
 * Base Context Menu Button Item
 */
@Directive()
export class SacContextmenuItemButtonCommon extends SacContextmenuItemCommon {
    // #region Properties

    /**
     * Menu item is disabled
     */
    protected _isdisabled = false;

    /**
     * Icon column in menu is disabled
     */
    protected _isicondisabled = false;

    /**
     * Event when the button is clicked
     */
    @Output()
    public clicked: EventEmitter<void> = new EventEmitter<void>();

    /**
     * css class for button styling
     */
    @Input()
    public cssclass = '';

    /**
     * Icon for menu
     */
    @Input()
    public icon: string;

    /**
     * Input property for button styling. Defines the CSS classes of the button
     */
    @Input()
    public iconstyle = '';

    /**
     * Image for menu. Required if the icon for the button is a file and not an icon font.
     */
    @Input()
    public image: string;

    /**
     * name of button. used for generate id and name
     */
    @Input()
    public name = '';

    /**
     * Text for menu item.
     */
    @Input()
    public text: string;

    // #endregion Properties

    // #region Constructors

    /**
     * Constructor
     */
    constructor() {
        super();
    }

    // #endregion Constructors

    // #region Public Getters And Setters

    /**
     * Menu item is disabled
     */
    public get isdisabled(): boolean | string {
        return this._isdisabled;
    }

    /**
     * Menu item is disabled
     */
    @Input()
    public set isdisabled(v: boolean | string) {
        if (v === null || v === undefined || typeof v === 'boolean') {
            this._isdisabled = v as boolean;
        } else {
            this._isdisabled = v === 'true';
        }
    }

    /**
     * Icon column in menu is disabled
     */
    public get isicondisabled(): boolean | string {
        return this._isicondisabled;
    }

    /**
     * Icon column in menu is disabled
     */
    @Input()
    public set isicondisabled(v: boolean | string) {
        if (v === null || v === undefined || typeof v === 'boolean') {
            this._isicondisabled = v as boolean;
        } else {
            this._isicondisabled = v === 'true';
        }
    }

    // #endregion Public Getters And Setters

    // #region Public Methods

    /**
     * This method will trigger the click action emitter
     */
    public callaction(event: MouseEvent) {
        if (!this._isdisabled) {
            this.clicked.emit();

            if (this.contextmenu !== null) {
                this.contextmenu.close();
            }
        }
        event.stopPropagation();
    }

    // #endregion Public Methods
}
