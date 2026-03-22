import { SacInputCommon } from './input';
import { Directive, EventEmitter, Input, OnInit, Output } from '@angular/core';

/**
 * Base component for SacInputSearch
 */
@Directive()
export class SacInputSearchCommon extends SacInputCommon implements OnInit {
    // #region Properties

    /**
     * Defines the layout of the search button in the control
     */
    @Input()
    public buttonmode: 'icon' | 'text' | 'mixed';

    /**
     * Text displayed on the button
     */
    @Input() public buttontext = '';

    /**
     * Event when the search icon is clicked
     */
    @Output()
    public clicked: EventEmitter<any> = new EventEmitter<any>();

    /**
     * Name of the search icon
     */
    @Input() public iconname = '';

    // #endregion Properties

    // #region Public Methods

    /**
     * Init Event
     */
    public ngOnInit() {
        super.ngOnInit();

        this.setButtonMode();

        if (!this.iconname) {
            this.iconname = this.iconService.InputSearchButtonIcon;
        }
    }

    /**
     * Method sends the value of the input through the event
     */
    public searchClick() {
        this.clicked.emit(this.value);
    }

    // #endregion Public Methods

    // #region Private Methods

    /**
     * Sets the button mode for the search input
     */
    private setButtonMode(): void {
        // set mode for search button
        if (!this.buttonmode) {
            if (this.formlayout?.inputsearchiconmode) {
                this.buttonmode = this.formlayout.inputsearchiconmode;
            } else {
                this.buttonmode = this.configurationService.InputSearchIconMode;
            }
        }
    }

    // #endregion Private Methods
}
