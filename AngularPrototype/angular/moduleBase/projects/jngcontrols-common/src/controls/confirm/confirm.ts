import { EventEmitter, Input, Output } from '@angular/core';
import { IConfirmComponent } from '../../interfaces/iconfirmcomponent';
import { NgConfirmButton } from './confirm.button';

/**
 * Basis Klasse für Confirm Dialog
 */
export class NgConfirmCommon implements IConfirmComponent {

  //#region Input / Output Properties

  /**
   * Event wenn Dialog geschlossen wird
   */
  @Output()
  public onconfirm: EventEmitter<string> = new EventEmitter<string>();

  /**
 * Dialog Titel für Confirm Dialog
 */
  @Input()
  public title: string = '';

  /**
   * Nachricht die auf dem Dialog angezeigt wird
   */
  @Input()
  public message: string = '';

  /**
   * Icon welches auf dem Dialog angezeigt wird
   */
  @Input()
  public image: string = '';

  /**
   * Map mit Buttons die in Dialog angezeigt werden.
   */
  @Input()
  public buttons: NgConfirmButton[] = [];

  //#endregion

  //#region Internal Properties and Methods

  /**
   * Definiert ob der Dialog sichtbar ist
   */
  isvisible: boolean = false;

  /**
   * Definiert, ob für den Dialog ein Image definiert wurde
   */
  hasImage(): boolean {
    return this.image !== '';
  }

  //#endregion

  //#region Public Methods

  /**
   * Action wenn Button auf Dialog geklickt wurde. Löst den EventEmitter aus und blendet den Dialog aus.
   * @param action
   */
  public confirm(action: string): void {
    this.onconfirm.emit(action);
    this.isvisible = false;
  }

  /**
   * Zeigt den Dialog an
   */
  public show(): void {
    this.isvisible = true;
  }

  /**
   * Blendet den Dialog aus
   */
  public hide(): void {
    this.isvisible = false;
  }

  //#endregion

}
