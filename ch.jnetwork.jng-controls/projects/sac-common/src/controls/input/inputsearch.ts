import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { SacInputCommon } from './input';

/**
 * Basis Komponente für SacInputSearch
 */
@Directive()
export class SacInputSearchCommon extends SacInputCommon {
  /**
   * Name des Such-Icons
   */
  @Input() iconname: string = '';
  /**
   * Text welcher auf dem Button angezeigt wird
   */
  @Input() buttontext: string = '';

  /**
   * Event wenn auf das Such-Icon geclickt wird
   */
  @Output()
  clicked: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Methode sendet den Wert des Inputs durch das Event
   */
  searchClick() {
    this.clicked.emit(this.value);
  }
}
