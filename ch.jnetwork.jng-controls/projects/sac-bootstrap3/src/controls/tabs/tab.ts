import { Component, ContentChildren, QueryList } from '@angular/core';
import { SacTabItemComponent } from './tabitem';
import { SacTabCommon, SacTabItemCommon } from '@simpleangularcontrols/sac-common';

@Component({
  selector: 'sac-tab',
  templateUrl: './tab.html'
})

export class SacTabComponent extends SacTabCommon {

  @ContentChildren(SacTabItemComponent)
  _tabItems: QueryList<SacTabItemComponent>;

  tabItems(): SacTabItemCommon[] {
    return this._tabItems.toArray() as Array<SacTabItemCommon>;
  }

}
