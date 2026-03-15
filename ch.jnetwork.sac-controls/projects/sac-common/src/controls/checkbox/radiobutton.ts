import { ControlHeight } from '../../enums/ControlHeight';
import { ISacConfigurationService } from '../../interfaces/ISacConfigurationService';
import { ISacIconService } from '../../interfaces/ISacIconService';
import { SACICON_SERVICE, SacDefaultIconService } from '../../services';
import { SACCONFIGURATION_SERVICE, SacDefaultConfigurationService } from '../../services/sac-configuration.service';
import { SacFormLayoutCommon } from '../layout/formlayout';
import { SacRadiobuttonsCommon } from './radiobuttons';
import { Directive, EventEmitter, Host, Injector, Input, OnDestroy, OnInit, Output, TemplateRef } from '@angular/core';

/**
 * Basis Komponente für SacRadiobutton.
 */
@Directive()
export abstract class SacRadiobuttonCommon implements OnInit, OnDestroy {
    // #region Properties

    /**
     * Boolean Property zum Ausblenden des Controls; default Wert - false
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
     * public public public public public public public public public public public public ControlHeight enum for use in HTML markup
     */
    public ControlHeight: typeof ControlHeight = ControlHeight;

    /**
     * Unique Index für RadioButton
     */
    public _index: number = null;

    /**
     * Boolean Property, ob Radiobutton checked ist
     */
    @Input()
    public checked: boolean;

    /**
     * Boolean Property, ob Radiobutton disabled ist
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
     * Template für Value Element
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
     * Konstruktor
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

        // Registration des Controls in SacRadioButtons Container
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
     * Getter für Unique Index
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
     * Setter für hidden Property
     */
    @Input()
    public set hidden(v: boolean | string) {
        if (v === null || v === undefined || typeof v === 'boolean') {
            this._hidden = v as boolean;
        } else {
            this._hidden = v === 'true';
        }

        // Model Reset falls RadioButton selektiert war
        if (this._hidden && this.checked) {
            this.sacRadioButtons.SelectItem(null);
        }
    }

    /**
     * Methode ergibt Boolean, ob Control disabled ist
     */
    public get isDisabled(): boolean {
        return this.disabled || this.sacRadioButtons.disabled;
    }

    // #endregion Public Getters And Setters

    // #region Public Methods

    /**
     * Event bei Änderungen
     */
    public ChangeEvent(): void {
        if (!this.disabled) {
            this.sacRadioButtons.SelectItem(this.value);
            this.onselectitem.emit();
        }
    }

    /**
     * Event wenn die Komponente zerstört wird
     */
    public ngOnDestroy(): void {
        // De-Registration des Controls in SacRadioButtons Container
        this.sacRadioButtons.UnregisterRadioButton(this);
    }

    public ngOnInit(): void {
        // set method to display helptext
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
