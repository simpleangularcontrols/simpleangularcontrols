import { Directive, EventEmitter, Input, Output } from '@angular/core';

/**
 * Base Grid Action Button
 */
@Directive()
export class NgGridButtonCommon {
  /**
   * Input Property für Styling des Buttons. Deffiniert die Css Klassen des Buttons
   */
  @Input()
  public iconstyle: string = '';

  /**
   * Icon Name aus Sprite
   */
  @Input()
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
  @Input()
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
  @Output()
  clicked: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Die Methode wird das cklickaction Emitter aktivieren
   */
  public callaction() {
    if (!this._isdisabledvalue) {
      this.clicked.emit(this.iconstyle);
    }
  }
}
