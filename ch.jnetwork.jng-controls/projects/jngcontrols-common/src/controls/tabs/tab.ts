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
  @Input('name')
  public _name: string = '';

  /**
   * Input property for template. Typ TemplateRef<any>
   */
  @Input('tablabeltemplate')
  displayTabLabelTemplate: TemplateRef<any>;

  /**
   * Löscht versteckte TabItems
   */
  @Input('unloadtabitemswhenhidden')
  _unloadtabitemswhenhidden: boolean | null = null;

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
    const activeTab = this.tabItems().filter((tab) => tab._active);

    this.tabItems().forEach(itm => {
      if (this._unloadtabitemswhenhidden !== null) {
        itm._unloadwhenhidden = this._unloadtabitemswhenhidden;
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
    if (tab._disabled) {
      return;
    }

    this.tabItems().forEach(item => item._active = false);
    tab._active = true;
  }

  /**
   * Ergibt das ID vom Tab-Button
   * @param tabitemid ID des Tabs
   */
  public GetTabItemButtonId(tabitemid: string) {
    return this._name + '_' + tabitemid;
  }
}
