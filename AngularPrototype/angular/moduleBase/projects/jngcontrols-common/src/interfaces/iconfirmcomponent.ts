import { EventEmitter } from "@angular/core";

/**
 * Interface für Comfirm Dialog implementation
 */
export interface IConfirmComponent {
  show(): void;
  hide(): void;
  onconfirm: EventEmitter<string>;
}
