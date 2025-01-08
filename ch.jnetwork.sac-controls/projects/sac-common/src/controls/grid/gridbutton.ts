import { Directive, EventEmitter, Input, Output } from '@angular/core';

/**
 * Base Grid Action Button
 */
@Directive()
export class SacGridButtonCommon {
  // #region Properties

  /**
   * Button is deactivated
   */
  protected _isdisabledvalue: boolean = false;

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
   * Event when the button is clicked
   */
  @Output()
  public clicked: EventEmitter<any> = new EventEmitter<any>();

  // #endregion Properties

  // #region Public Getters And Setters

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

  public get isdisabled(): boolean | string {
    return this._isdisabledvalue;
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

  // #endregion Public Methods
}
