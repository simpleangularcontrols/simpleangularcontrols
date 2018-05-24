import { Component, Input, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { NgTabItem } from './tabitem';

@Component({
  selector: 'ngTab',
  templateUrl: './tab.html'
})

export class NgTab implements AfterContentInit {
  private tabs: any;

  @ContentChildren(NgTabItem)
  tabItems: QueryList<NgTabItem>;

  // #region Control initialisieren

  ngAfterContentInit() {
    this.initTabs();
  }

  private initTabs(): void {
    let activeTab = this.tabItems.filter((tab) => tab._active);

    if (activeTab.length === 0)
      this.selectTab(this.tabItems.first);
  }

  // #endregion

  selectTab(tab: NgTabItem): void {
    // Cancel if Selected Tab is disabled
    if (tab._disabled)
      return;


    this.tabItems.toArray().forEach(tab => tab._active = false);
    tab._active = true;
  }

}
