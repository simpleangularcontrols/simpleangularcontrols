import {
  AfterContentInit,
  Directive,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';
import { SacTabItemCommon } from './tabitem';

/**
 * Base component for SacTab
 */
@Directive()
export abstract class SacTabCommon implements AfterContentInit {
  /**
   * control name
   */
  @Input()
  public name: string = '';

  /**
   * input property for template. Typ TemplateRef<any>
   */
  @Input()
  tablabeltemplate: TemplateRef<any>;

  /**
   * dispose tabs when they are hidden
   */
  @Input()
  unloadtabitemswhenhidden: boolean | null = null;

  /**
   * Event when new tab is selected
   */
  @Output()
  tabselected: EventEmitter<string> = new EventEmitter<string>();

  /**
   * Array von TabItems
   */
  abstract tabItems(): SacTabItemCommon[];

  // #region Control initialisieren

  /**
   * AfterContentInit Event
   */
  ngAfterContentInit() {
    this.initTabs();
  }

  /**
   * Initialisiert die Tabs
   */
  private initTabs(): void {
    const activeTab = this.tabItems().filter((tab) => tab.active);

    this.tabItems().forEach((itm) => {
      if (this.unloadtabitemswhenhidden !== null) {
        itm.unloadwhenhidden = this.unloadtabitemswhenhidden;
      }
    });

    if (activeTab.length === 0) {
      this.selectTab(this.tabItems()[0]);
    }
  }

  // #endregion

  /**
   * select new tab
   * @param tab tab that should be selected
   */
  selectTab(tab: SacTabItemCommon): void {
    // Cancel if Selected Tab is disabled
    if (tab.disabled) {
      return;
    }

    this.tabItems().forEach((item) => (item.active = false));
    tab.active = true;
    this.tabselected.emit(tab.id);
  }

  /**
   * get id of tab button
   * @param tabitemid id of tab
   */
  public GetTabItemButtonId(tabitemid: string) {
    return this.name + '_' + tabitemid;
  }
}
