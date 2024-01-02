import { Component, ContentChildren, QueryList } from '@angular/core';
import { SacTabCommon } from '@simpleangularcontrols/sac-common';
import { SacTabItemComponent } from './tabitem';
import { NgFor, NgClass, NgStyle } from '@angular/common';

/**
 * Komponente für Tabs
 */
@Component({
    selector: 'sac-tab',
    templateUrl: './tab.html',
    standalone: true,
    imports: [
        NgFor,
        NgClass,
        NgStyle,
    ],
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
