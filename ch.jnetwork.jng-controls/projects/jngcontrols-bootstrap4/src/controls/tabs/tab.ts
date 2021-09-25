import { Component, ContentChildren, QueryList } from '@angular/core';
import { NgTabCommon } from '@jnetwork/jngcontrols-common';
import { NgTabItemComponent } from './tabitem';

/**
 * Komponente für Tabs
 */
@Component({
  selector: 'ng-tab,ngTab',
  templateUrl: './tab.html',
})
export class NgTabComponent extends NgTabCommon {
  /**
   * Collection von TabItems
   */
  @ContentChildren(NgTabItemComponent)
  _tabItems: QueryList<NgTabItemComponent>;

  /**
   * Gibt die TabItems zurück
   * @returns Array von TabItems
   */
  tabItems(): NgTabItemComponent[] {
    return this._tabItems.toArray() as Array<NgTabItemComponent>;
  }
}
