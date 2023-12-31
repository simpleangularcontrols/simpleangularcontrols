import {
  Directive,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { SacContextmenuCommon } from './contextmenu';
import { SacContextmenuItemCommon } from './contextmenuitem';

/**
 * Base Context Menu Button Item
 */
@Directive()
export class SacContextmenuItemButtonCommon extends SacContextmenuItemCommon {
  /**
   * Constructor
   * @param contextmenu Instance of Context Menü.
   */
  constructor(protected contextmenu: SacContextmenuCommon) {
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
   * css class for button styling
   */
  @Input()
  public cssclass: string = '';

  /**
   * Input Property für Styling des Buttons. Definiert die Css Klassen des Buttons
   */
  @Input()
  public iconstyle: string = '';

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
  @Output()
  clicked: EventEmitter<void> = new EventEmitter<void>();

  /**
   * Die Methode wird das cklickaction Emitter aktivieren
   */
  public callaction(event: MouseEvent) {
    if (!this._isdisabled) {
      this.clicked.emit();
      this.contextmenu.close();
    }
    event.stopPropagation();
  }
}
