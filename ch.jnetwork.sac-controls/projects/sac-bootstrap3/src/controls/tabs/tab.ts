import { SacTabItemComponent } from './tabitem';
import { NgClass, NgFor, NgStyle, NgTemplateOutlet } from '@angular/common';
import { Component, ContentChildren, QueryList } from '@angular/core';
import { SacTabCommon, SacTabItemCommon, SacTestingAttributePipe } from '@simpleangularcontrols/sac-common';

/**
 * Bootstrap 3 tab container component that renders tab headers and manages selected tab state.
 */
@Component({
    selector: 'sac-tab',
    templateUrl: './tab.html',
    standalone: true,
    imports: [NgFor, NgClass, NgStyle, NgTemplateOutlet, SacTestingAttributePipe],
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
