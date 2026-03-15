import { ControlHeight } from '../../enums/ControlHeight';
import { ISacConfigurationService } from '../../interfaces/ISacConfigurationService';
import { ISacIconService } from '../../interfaces/ISacIconService';
import { SACICON_SERVICE, SacDefaultIconService } from '../../services';
import { SACCONFIGURATION_SERVICE, SacDefaultConfigurationService } from '../../services/sac-configuration.service';
import { SacFormLayoutCommon } from '../layout/formlayout';
import { SacRadiobuttonsCommon } from './radiobuttons';
import { Directive, EventEmitter, Host, Injector, Input, OnDestroy, OnInit, Output, TemplateRef } from '@angular/core';

/**
 * Base component for SacRadiobutton.
 */
@Directive()
export abstract class SacRadiobuttonCommon implements OnInit, OnDestroy {
    // #region Properties

    /**
     * Boolean property to hide the control; default value - false
     */
    private _hidden = false;

    /**
     * Service for loading default settings for the controls
     */
    protected readonly configurationService: ISacConfigurationService;

    /**
     * Form layout instance if exists
     */
    protected formlayout: SacFormLayoutCommon = null;

    /**
     * icon service
     */
    protected iconService: ISacIconService;

    /**
     * ControlHeight enum for use in HTML markup
     */
    public ControlHeight: typeof ControlHeight = ControlHeight;

    /**
     * Unique index for radio button
     */
    public _index: number = null;

    /**
     * Boolean property whether the radio button is checked
     */
    @Input()
    public checked: boolean;

    /**
     * Boolean property whether the radio button is disabled
     */
    @Input()
    public disabled: boolean;

    /**
     * Text to support the user during input.
     */
    @Input() public helptext = '';

    /**
     * Mode for display helptext
     */
    @Input()
    public helptextmode: 'tooltip' | 'text' | null;

    /**
     * Label Text
     */
    @Input()
    public label: string;

    /**
     * Template for value element
     */
    @Input()
    public labeltemplate: TemplateRef<any>;

    /**
     * Output Event
     */
    @Output()
    public onselectitem = new EventEmitter();

    /**
     * Wert
     */
    @Input()
    public value: any;

    // #endregion Properties

    // #region Constructors

    /**
     * Constructor
     * @param SacRadioButtons
     * @param formlayout SacFormLayoutCommon to define scoped layout settings
     * @param injector Injector for injecting services
     */
    constructor(
        protected sacRadioButtons: SacRadiobuttonsCommon,
        @Host() formlayout: SacFormLayoutCommon,
        private readonly injector: Injector
    ) {
        this.formlayout = formlayout;

        this.configurationService = injector.get(SACCONFIGURATION_SERVICE, new SacDefaultConfigurationService());

        this.iconService = injector.get(SACICON_SERVICE, new SacDefaultIconService());

        // Registration of the control in SacRadioButtons container
        this.sacRadioButtons.RegisterRadioButton(this);
    }

    // #endregion Constructors

    // #region Public Getters And Setters

    /**
     * Get Icon for Helptext Tooltip
     */
    public get HelptextTooltipIcon(): string {
        return this.iconService.GenericHelptextIcon;
    }

    /**
     * define the control height from parent control
     */
    public get componentHeight(): ControlHeight | null {
        return this.sacRadioButtons.componentHeight;
    }

    /**
     * Getter for unique index
     */
    public get getIndex(): number {
        if (this._index === null && this.sacRadioButtons !== null && this.sacRadioButtons !== undefined) {
            this._index = this.sacRadioButtons.GetRadionButtonIndex();
        }

        return this._index;
    }

    /**
     * Parent Control Name
     */
    public get getName(): string {
        return this.sacRadioButtons.name;
    }

    public get hidden(): boolean | string {
        return this._hidden;
    }

    /**
     * Setter for hidden property
     */
    @Input()
    public set hidden(v: boolean | string) {
        if (v === null || v === undefined || typeof v === 'boolean') {
            this._hidden = v as boolean;
        } else {
            this._hidden = v === 'true';
        }

        // Model reset if radio button was selected
        if (this._hidden && this.checked) {
            this.sacRadioButtons.SelectItem(null);
        }
    }

    /**
     * Method returns boolean whether control is disabled
     */
    public get isDisabled(): boolean {
        return this.disabled || this.sacRadioButtons.disabled;
    }

    // #endregion Public Getters And Setters

    // #region Public Methods

    /**
     * Event on changes
     */
    public ChangeEvent(): void {
        if (!this.disabled) {
            this.sacRadioButtons.SelectItem(this.value);
            this.onselectitem.emit();
        }
    }

    /**
     * Event when the component is destroyed
     */
    public ngOnDestroy(): void {
        // De-registration of the control in SacRadioButtons container
        this.sacRadioButtons.UnregisterRadioButton(this);
    }

    public ngOnInit(): void {
        // Set method to display helptext
        this.setHelpTextMode();

        if (this.value === this.sacRadioButtons.value) {
            this.checked = true;
        }
    }

    // #endregion Public Methods

    // #region Private Methods

    /**
     * Set mode for helptext. Can be tooltip or text
     */
    private setHelpTextMode() {
        if (!this.helptextmode) {
            if (this.formlayout?.helptextmode) {
                this.helptextmode = this.formlayout.helptextmode;
            } else {
                this.helptextmode = this.configurationService.HelptextMode;
            }
        }
    }

    // #endregion Private Methods
}
