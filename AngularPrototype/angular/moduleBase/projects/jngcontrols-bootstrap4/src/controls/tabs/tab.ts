import { Component, ContentChildren, QueryList } from '@angular/core';
import { NgTabCommon } from '@jnetwork/jngcontrols-common';
import { NgTabItemComponent } from './tabitem';

@Component({
  selector: 'ng-tab,ngTab',
  templateUrl: './tab.html'
})
export class NgTabComponent extends NgTabCommon {

  @ContentChildren(NgTabItemComponent)
  _tabItems: QueryList<NgTabItemComponent>;

  tabItems(): NgTabItemComponent[] {
    return this._tabItems.toArray() as Array<NgTabItemComponent>;
  }
  // protected contentRadiobuttons() : NgRadiobuttonCommon[] {
  //   return this._contentRadiobuttons.toArray() as Array<NgRadiobuttonCommon>;
  // }




}
