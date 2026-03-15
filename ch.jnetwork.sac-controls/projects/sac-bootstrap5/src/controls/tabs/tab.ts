import { SacTabItemComponent } from './tabitem';
import { NgClass, NgFor, NgStyle } from '@angular/common';
import { Component, ContentChildren, QueryList } from '@angular/core';
import { SacTabCommon, SacTestingAttributePipe } from '@simpleangularcontrols/sac-common';

/**
 * Component for tabs
 */
@Component({
    selector: 'sac-tab',
    templateUrl: './tab.html',
    standalone: true,
    imports: [NgFor, NgClass, NgStyle, SacTestingAttributePipe],
})
export class SacTabComponent extends SacTabCommon {
    // #region Properties

    /**
     * Collection of tab items
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
