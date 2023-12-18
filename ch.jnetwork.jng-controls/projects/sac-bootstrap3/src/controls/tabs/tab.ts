import { Component, ContentChildren, QueryList } from '@angular/core';
import { NgTabItemComponent } from './tabitem';
import { NgTabCommon, NgTabItemCommon } from '@jnetwork/sac-common';

@Component({
  selector: 'sac-tab',
  templateUrl: './tab.html'
})

export class NgTabComponent extends NgTabCommon {

  @ContentChildren(NgTabItemComponent)
  _tabItems: QueryList<NgTabItemComponent>;

  tabItems(): NgTabItemCommon[] {
    return this._tabItems.toArray() as Array<NgTabItemCommon>;
  }

}
