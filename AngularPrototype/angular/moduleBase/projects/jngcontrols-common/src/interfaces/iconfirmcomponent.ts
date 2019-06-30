import { EventEmitter } from "@angular/core";

/**
 * Interface für Comfirm Dialog implementation
 */
export interface IConfirmComponent {
  /**
   * Anzeigen
   */
  show(): void;
  /**
   * Ausblenden
   */
  hide(): void;
  /**
   * EventEmitter beim Bestätigen
   */
  onconfirm: EventEmitter<string>;
}
