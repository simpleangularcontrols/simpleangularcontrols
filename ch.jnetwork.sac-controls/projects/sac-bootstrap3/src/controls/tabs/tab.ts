import { SacTabItemComponent } from './tabitem';
import { Component, ContentChildren, QueryList } from '@angular/core';
import { SacTabCommon, SacTabItemCommon } from '@simpleangularcontrols/sac-common';

/**
 * Bootstrap 3 tab container component that renders tab headers and manages selected tab state.
 */
@Component({
    selector: 'sac-tab',
    templateUrl: './tab.html',
})
export class SacTabComponent extends SacTabCommon {
    // #region Properties

    @ContentChildren(SacTabItemComponent)
    public _tabItems: QueryList<SacTabItemComponent>;

    // #endregion Properties

    // #region Public Methods

    /**
     * Returns the TabItems
     * @returns Array of TabItems
     */
    public tabItems(): SacTabItemCommon[] {
        return this._tabItems.toArray() as Array<SacTabItemCommon>;
    }

    // #endregion Public Methods
}
