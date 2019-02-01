import { Component, ContentChildren, QueryList  } from '@angular/core';
import { NgTabItem } from './tabitem';
import { NgTabCommon, NgTabItemCommon } from '@jnetwork/jngcontrols-common';

@Component({
  selector: 'ngTab',
  templateUrl: './tab.html'
})

export class NgTab extends NgTabCommon {

  @ContentChildren(NgTabItem)
  _tabItems: QueryList<NgTabItem>;

  tabItems(): NgTabItemCommon[]{
    return this._tabItems.toArray() as Array<NgTabItemCommon>;
  }
  // protected contentRadiobuttons() : NgRadiobuttonCommon[] {
  //   return this._contentRadiobuttons.toArray() as Array<NgRadiobuttonCommon>;
  // }
  
 


}
