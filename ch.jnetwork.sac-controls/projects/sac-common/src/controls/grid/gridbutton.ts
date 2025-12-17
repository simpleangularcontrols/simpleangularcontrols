import { ISacIconService } from '../../interfaces/ISacIconService';
import { SACICON_SERVICE, SacDefaultIconService } from '../../services';
import { Directive, EventEmitter, Injector, Input, Output } from '@angular/core';

/**
 * Base Grid Action Button
 */
@Directive()
export class SacGridButtonCommon {
    // #region Properties

    /**
     * Service for reading standard icon
     */
    private iconService: ISacIconService;

    /**
     * Button is deactivated
     */
    protected _isdisabledvalue: boolean = false;

    /**
     * Event when the button is clicked
     */
    @Output()
    public clicked: EventEmitter<any> = new EventEmitter<any>();

    /**
     * Icon name from sprite
     */
    @Input()
    public icon: string;

    /**
     * Input property for styling the button. Defines the CSS classes of the button
     */
    @Input()
    public iconstyle: string = '';

    /**
     * Name of Button inside Grid
     */
    @Input()
    public name: string;

    // #endregion Properties

    // #region Constructors

    /**
     * Constructor
     *
     * @param injector Injector to resovle services
     */
    constructor(protected readonly injector: Injector) {
        this.iconService = injector.get(SACICON_SERVICE, new SacDefaultIconService());
    }

    // #endregion Constructors

    // #region Public Getters And Setters

    public get isdisabled(): boolean | string {
        return this._isdisabledvalue;
    }

    /**
     * Deactivating buttons
     * @param v Deactivates the button. Can be a Boolean or the strings `true` or `false`.
     * @return Defines whether the button is deactivated. Is always a Boolean type
     */
    @Input()
    public set isdisabled(v: boolean | string) {
        if (v === null || v === undefined || typeof v === 'boolean') {
            this._isdisabledvalue = v as boolean;
        } else {
            this._isdisabledvalue = v === 'true';
        }
    }

    // #endregion Public Getters And Setters

    // #region Public Methods

    /**
     * Triggers the clicked event if the button is not deactivated.
     */
    public callaction() {
        if (!this._isdisabledvalue) {
            this.clicked.emit(this.iconstyle);
        }
    }

    /**
     * Defines the CSS class for the icon on the button
     */
    public getIconClass(): string {
        let cssclass;

        // Handle Default Icons
        if (this.iconstyle === '') {
            switch (this.icon) {
                case 'edit':
                    cssclass = `${this.iconService.GridButtonDefaultEditIconSet} ${this.iconService.GridButtonDefaultEditIcon}`;
                    break;
                case 'delete':
                    cssclass = `${this.iconService.GridButtonDefaultDeleteIconSet} ${this.iconService.GridButtonDefaultDeleteIcon}`;
                    break;
                default:
                    cssclass = this.icon;
                    break;
            }
        } else {
            cssclass = `${this.iconstyle} ${this.icon}`;
        }

        // trim style
        cssclass = cssclass.trim();

        if (this._isdisabledvalue) {
            cssclass += this.iconService.GridButtonDisabledIconSuffix;
        }

        return cssclass;
    }

    // #endregion Public Methods
}
