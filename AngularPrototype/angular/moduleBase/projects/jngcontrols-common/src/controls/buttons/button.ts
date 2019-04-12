import { Input, Output, EventEmitter } from '@angular/core';

export class NgButtonCommon {

  hasError = false;

  @Input() name: string = '';
  @Input() text: string = '';
  @Input() icon: string = '';

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

  // Button Role
  private _role: string = 'default';

  /**
   * Definiert den Style des Buttons
   * @param  v Definiert den Style des Buttons. Folgende Typen sind Supported: primary, default
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
  get role(): string {
    return this._role;
  };

  get _isdisabled(): boolean {
    return this._isdisabledvalue;
  }

  @Output()
  onclick = new EventEmitter();

  buttonClick() {
    if (this._isdisabled === false)
      this.onclick.emit();
  };

}
