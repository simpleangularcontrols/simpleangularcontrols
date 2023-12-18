import { AfterContentInit, Directive, Input, TemplateRef } from '@angular/core';
import { NgTabItemCommon } from './tabitem';

/**
 *Basis Komponente für NgTab
 */
@Directive()
export abstract class NgTabCommon implements AfterContentInit {

  /**
   * Name des Controls
   */
  @Input()
  public name: string = '';

  /**
   * Input property for template. Typ TemplateRef<any>
   */
  @Input()
  tablabeltemplate: TemplateRef<any>;

  /**
   * Löscht versteckte TabItems
   */
  @Input()
  unloadtabitemswhenhidden: boolean | null = null;

  /**
   * Array von TabItems
   */
  abstract tabItems(): NgTabItemCommon[];

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

    this.tabItems().forEach(itm => {
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
   * Tab selektieren
   * @param tab
   */
  selectTab(tab: NgTabItemCommon): void {
    // Cancel if Selected Tab is disabled
    if (tab.disabled) {
      return;
    }

    this.tabItems().forEach(item => item.active = false);
    tab.active = true;
  }

  /**
   * Ergibt das ID vom Tab-Button
   * @param tabitemid ID des Tabs
   */
  public GetTabItemButtonId(tabitemid: string) {
    return this.name + '_' + tabitemid;
  }
}
