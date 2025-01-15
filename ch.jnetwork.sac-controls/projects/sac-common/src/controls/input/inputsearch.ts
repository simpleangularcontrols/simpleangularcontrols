import { Directive, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SacInputCommon } from './input';

/**
 * Basis Komponente für SacInputSearch
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
   * Text welcher auf dem Button angezeigt wird
   */
  @Input() public buttontext: string = '';
  /**
   * Name des Such-Icons
   */
  @Input() public iconname: string = '';
  /**
   * Event wenn auf das Such-Icon geclickt wird
   */
  @Output()
  public clicked: EventEmitter<any> = new EventEmitter<any>();

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
   * Methode sendet den Wert des Inputs durch das Event
   */
  public searchClick() {
    this.clicked.emit(this.value);
  }

  // #endregion Public Methods

  // #region Private Methods

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
