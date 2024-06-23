import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { BUTTONROLETYPE } from '../../enums/ButtonRoleType';

/**
 * Base Komponente für das Button
 */
@Directive()
export class SacButtonCommon {
  // #region Properties

  /**
   * Boolean Property definiert, ob das Button 'disabled' ist; default - false
   */
  private _isdisabledvalue: boolean = false;
  /**
   * Das Property definiert die Rolle des Buttons. Standardwert ist 'default'.
   */
  private _role: BUTTONROLETYPE = 'default';

  /**
   * Input Property für Icon Style Klasse; default Wert - ''
   */
  @Input() public icon: string = '';
  /**
   * Input Property für Name; default Wert - ''
   */
  @Input() public name: string = '';
  /**
   * Input Property für Text des Buttons; default Wert - ''
   */
  @Input() public text: string = '';
  /**
   * Output Event Emitter
   */
  @Output()
  public clicked = new EventEmitter();

  /**
   * Das boolean property ist benutzt für Aktivation des Spinner des Button. Default ist false.
   */
  public _isloadingvalue: boolean = false;
  /**
   * Boolean Property für Error; default Wert - false
   */
  public hasError = false;

  // #endregion Properties

  // #region Public Getters And Setters

  /**
   * Deaktivieren von Buttons
   * @param v Deaktiviert den Button
   * @return Definiert ob der Button deaktiviert ist
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
   * Das Input property. Definiert der Status des islaoding property. Es ist benutzt für Aktivation des Spinner des Button.
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
   * Definiert den Style des Buttons
   * @param  v Definiert den Style des Buttons.
   * Folgende Typen sind Supported: primary, secondary, success, danger, warning, info, light, dark, link, default
   * @returns  Type des Buttons
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

  /**
   * Getter Methode. Ergibt boolean Wert. Definiert, ob das Button desabled ist.
   */
  public get _isdisabled(): boolean {
    return this._isdisabledvalue;
  }

  public get isdisabled(): boolean | string {
    return this._isdisabledvalue;
  }

  public get isloading(): boolean | string {
    return this._isloadingvalue;
  }

  /**
   * Die Methode returns die definierte Style-Rolle des Buttons
   */
  public get role(): BUTTONROLETYPE {
    return this._role;
  }

  // #endregion Public Getters And Setters

  // #region Public Methods

  /**
   * Die Methode wird ein Event aufrufen, wenn das Button geklickt wird UND das Button nicht disabled ODER isloading ist.
   */
  public buttonClick() {
    if (this._isdisabled === false && this._isloadingvalue === false) {
      this.clicked.emit();
    }
  }

  // #endregion Public Methods
}
