import { Component, ContentChildren, QueryList } from '@angular/core';
import { SacTabCommon } from '@simpleangularcontrols/sac-common';
import { SacTabItemComponent } from './tabitem';

/**
 * Komponente für Tabs
 */
@Component({
  selector: 'sac-tab',
  templateUrl: './tab.html',
})
export class SacTabComponent extends SacTabCommon {
  /**
   * Collection von TabItems
   */
  @ContentChildren(SacTabItemComponent)
  _tabItems: QueryList<SacTabItemComponent>;

  /**
   * Gibt die TabItems zurück
   * @returns Array von TabItems
   */
  tabItems(): SacTabItemComponent[] {
    return this._tabItems.toArray() as Array<SacTabItemComponent>;
  }
}
