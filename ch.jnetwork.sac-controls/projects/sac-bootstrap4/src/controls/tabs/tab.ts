import { SacTabItemComponent } from './tabitem';
import { Component, ContentChildren, QueryList } from '@angular/core';
import { SacTabCommon } from '@simpleangularcontrols/sac-common';

/**
 * Komponente für Tabs
 */
@Component({
  selector: 'sac-tab',
  templateUrl: './tab.html',
})
export class SacTabComponent extends SacTabCommon {
    // #region Properties

    /**
     * Collection von TabItems
     */
    @ContentChildren(SacTabItemComponent)
    public _tabItems: QueryList<SacTabItemComponent>;

    // #endregion Properties

    // #region Public Methods

    /**
     * Gibt die TabItems zurück
     * @returns Array von TabItems
     */
    public tabItems(): SacTabItemComponent[] {
        return this._tabItems.toArray() as Array<SacTabItemComponent>;
    }

    // #endregion Public Methods
}
