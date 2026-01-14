import { IConfirmComponent } from '../../interfaces/iconfirmcomponent';
import { SacConfirmButton } from './confirm.button';
import { Directive, EventEmitter, Input, Output } from '@angular/core';

/**
 * Basis Klasse für Confirm Dialog
 */
@Directive()
export class SacConfirmCommon implements IConfirmComponent {
  // #region Properties

  /**
   * Map mit Buttons die in Dialog angezeigt werden.
   */
  @Input()
  public buttons: SacConfirmButton[] = [];

  /**
   * Icon welches auf dem Dialog angezeigt wird
   */
  @Input()
  public image: string = '';

  /**
   * Definiert ob der Dialog sichtbar ist
   */
  public isvisible: boolean = false;

  /**
   * Nachricht die auf dem Dialog angezeigt wird
   */
  @Input()
  public message: string = '';

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

  // #endregion Properties

  // #region Public Methods

  /**
   * Action wenn Button auf Dialog geklickt wurde. Löst den EventEmitter aus und blendet den Dialog aus.
   * @param action
   */
  public confirm(action: string): void {
    this.onconfirm.emit(action);
    this.isvisible = false;
  }

  /**
   * Definiert, ob für den Dialog ein Image definiert wurde
   */
  public hasImage(): boolean {
    return this.image !== '';
  }

  /**
   * Blendet den Dialog aus
   */
  public hide(): void {
    this.isvisible = false;
  }

  /**
   * Zeigt den Dialog an
   */
  public show(): void {
    this.isvisible = true;
  }

  // #endregion Public Methods
}
