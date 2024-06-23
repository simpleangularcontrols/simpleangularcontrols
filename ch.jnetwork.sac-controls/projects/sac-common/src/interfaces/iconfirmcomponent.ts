import { EventEmitter } from '@angular/core';

/**
 * Interface für Comfirm Dialog implementation
 */
export interface IConfirmComponent {

  /**
   * EventEmitter beim Bestätigen
   */
  onconfirm: EventEmitter<string>;

  /**
   * Anzeigen
   */
  show(): void;
  /**
   * Ausblenden
   */
  hide(): void;
}
