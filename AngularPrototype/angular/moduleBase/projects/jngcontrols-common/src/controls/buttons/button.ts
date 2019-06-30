import { Input, Output, EventEmitter } from '@angular/core';

export class NgButtonCommon {

  /**
   * Boolean Property für Error; default Wert - false
   */
  hasError = false;

  /**
   * Input Property für Name; default Wert - ''
   */
  @Input() name: string = '';
  /**
   * Input Property für Text des Buttons; default Wert - ''
   */
  @Input() text: string = '';
  /**
   * Input Property für Icon Style Klasse; default Wert - ''
   */
  @Input() icon: string = '';
  /**
   * Boolean Property definiert, ob das Button 'disabled' ist; default - false
   */
  private _isdisabledvalue: boolean = false;

  /**
   * Deaktivieren von Buttons
   * @param v Deaktiviert den Button
   * @return Definiert ob der Button deaktiviert ist
   */
  @Input("isdisabled")
  set isdisabled(v: boolean | string) {
    if (v === null || v === undefined || typeof v === 'boolean')
      this._isdisabledvalue = v as boolean;
    else
      this._isdisabledvalue = v === 'true';
  }
  get isdisabled(): boolean | string {
    return this._isdisabledvalue;
  }

  /**
   * Das Property definiert die Rolle des Buttons. Standardwert ist 'default'.
   */
  private _role: string = 'default';

  /**
   * Definiert den Style des Buttons
   * @param  v Definiert den Style des Buttons. Folgende Typen sind Supported: primary, secondary, success, danger, warning, info, light, dark, link, default
   * @returns  Type des Buttons
   */
  @Input("role")
  set role(v: string) {

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
        if (v === '')
          this._role = 'default';
        else
          this._role = v;
        break;
      default:
        throw new Error("Invalid role " + v + " for button.")
    }
  }

  /**
   * Die Methode returns die definierte Style-Rolle des Buttons
   */
  get role(): string {
    return this._role;
  };

  /**
   * Getter Methode. Ergibt boolean Wert. Definiert, ob das Button desabled ist.
   */
  get _isdisabled(): boolean {
    return this._isdisabledvalue;
  }

  /**
   * Output Event Emitter
   */
  @Output()
  onclick = new EventEmitter();

  /**
   * Die Methode wird ein Event aufrufen, wenn das Button geklickt wird UND das Button nicht desabled ist.
   */
  buttonClick() {
    if (this._isdisabled === false)
      this.onclick.emit();
  };

}
