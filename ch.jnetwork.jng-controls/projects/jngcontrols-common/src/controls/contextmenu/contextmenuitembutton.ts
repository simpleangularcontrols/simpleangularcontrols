import {
  Directive,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { NgContextmenuCommon } from './contextmenu';
import { NgContextmenuItemCommon } from './contextmenuitem';

/**
 * Base Context Menu Button Item
 */
@Directive()
export class NgContextmenuItemButtonCommon extends NgContextmenuItemCommon {
  /**
   * Constructor
   * @param contextmenu Instance of Context Menü.
   */
  constructor(protected contextmenu: NgContextmenuCommon) {
    super();
  }

  /**
   * Menu Item ist deaktiviert
   */
  protected _isdisabled: boolean = false;

  /**
   * Icon Column in Menü ist deaktiviert
   */
  protected _isicondisabled: boolean = false;

  /**
   * Icon für Menü
   */
  @Input()
  public icon: string;

  /**
   * Input Property für Styling des Buttons. Definiert die Css Klassen des Buttons
   */
  @Input('iconstyle')
  public iconstyle: string = 'fas';

  /**
   * Image für Menü. Wird benötigt wenn das Icon für den Button ein File und nicht ein Icon Font ist.
   */
  @Input()
  public image: string;

  /**
   * Menu Item ist deaktiviert
   */
  @Input()
  public set isdisabled(v: boolean | string) {
    if (v === null || v === undefined || typeof v === 'boolean') {
      this._isdisabled = v as boolean;
    } else {
      this._isdisabled = v === 'true';
    }
  }
  /**
   * Menu Item ist deaktiviert
   */
  public get isdisabled(): boolean | string {
    return this._isdisabled;
  }

  /**
   * Icon Column in Menü ist deaktiviert
   */
  @Input()
  public set isicondisabled(v: boolean | string) {
    if (v === null || v === undefined || typeof v === 'boolean') {
      this._isicondisabled = v as boolean;
    } else {
      this._isicondisabled = v === 'true';
    }
  }
  /**
   * Icon Column in Menü ist deaktiviert
   */
  public get isicondisabled(): boolean | string {
    return this._isicondisabled;
  }

  /**
   * Text für Menü Item.
   */
  @Input()
  public text: string;

  /**
   * Event wenn auf den Button geklickt wird
   */
  @Output('onclick')
  clickaction: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Die Methode wird das cklickaction Emitter aktivieren
   */
  public callaction() {
    if (!this._isdisabled) {
      this.clickaction.emit(this.iconstyle);
      this.contextmenu.close();
    }
  }
}
