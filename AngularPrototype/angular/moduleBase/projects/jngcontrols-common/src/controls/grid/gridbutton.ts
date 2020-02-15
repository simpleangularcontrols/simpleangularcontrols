import { EventEmitter, Input, Output } from '@angular/core';

/**
 * Base Grid Action Button
 */
export class NgGridButtonCommon {

  /**
   * Input Property für Styling des Buttons. Deffiniert die Css Klassen des Buttons
   */
  @Input('iconstyle')
  public iconstyle: string = '';

  /**
 * Icon Name aus Sprite
 */
  @Input('icon')
  public icon: string;

  /**
   * Button ist deaktiviert
   */
  protected _isdisabledvalue: boolean = false;

  /**
   * Deaktivieren von Buttons
   * @param v Deaktiviert den Button
   * @return Definiert ob der Button deaktiviert ist
   */
  @Input('isdisabled')
  set isdisabled(v: boolean | string) {
    if (v === null || v === undefined || typeof v === 'boolean') {
      this._isdisabledvalue = v as boolean;
    } else {
      this._isdisabledvalue = v === 'true';
    }
  }
  get isdisabled(): boolean | string {
    return this._isdisabledvalue;
  }

  /**
  * Event wenn auf den Button geklickt wird
  */
  @Output('onclick')
  clickaction: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Die Methode wird das cklickaction Emitter aktivieren
   */
  public callaction() {
    if (!this._isdisabledvalue) {
      this.clickaction.emit(this.iconstyle);
    }
  }
}
