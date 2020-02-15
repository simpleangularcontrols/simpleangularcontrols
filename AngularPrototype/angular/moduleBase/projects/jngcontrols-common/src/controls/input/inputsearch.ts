import { EventEmitter, Input, Output } from '@angular/core';
import { NgInputCommon } from './input';

/**
 * Basis Komponente für NgInputSearch
 */
export class NgInputSearchCommon extends NgInputCommon {

  /**
   * Name des Such-Icons
   */
  @Input('iconname') _searchIconName: string = '';
  /**
 * Text welcher auf dem Button angezeigt wird
 */
  @Input('buttontext') _buttontext: string = '';

  /**
   * Event wenn auf das Such-Icon geclickt wird
   */
  @Output('onclick')
  clickaction: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Methode sendet den Wert des Inputs durch das Event
   */
  searchClick() {
    this.clickaction.emit(this.value);
  }
}
