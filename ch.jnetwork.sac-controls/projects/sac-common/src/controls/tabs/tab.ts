import { createGuid } from '../../utilities/guid';
import { SacTabItemCommon } from './tabitem';
import { AfterContentInit, Directive, EventEmitter, Input, Output, TemplateRef } from '@angular/core';

/**
 * Base component for SacTab
 */
@Directive()
export abstract class SacTabCommon implements AfterContentInit {
    // #region Properties

    /**
     * Identifier used for the E2E data attribute.
     */
    @Input()
    public e2eidentifier: string | null = null;

    /**
     * name of control
     */
    @Input()
    public name: string = createGuid();

    /**
     * input property for template. Typ TemplateRef<any>
     */
    @Input()
    public tablabeltemplate: TemplateRef<any>;

    /**
     * Event when new tab is selected
     */
    @Output()
    public tabselected: EventEmitter<string> = new EventEmitter<string>();

    /**
     * dispose tabs when they are hidden
     */
    @Input()
    public unloadtabitemswhenhidden: boolean | null = null;

    // #endregion Properties

    // #region Public Methods

    /**
     * get id of tab button
     * @param tabitemid id of tab
     */
    public GetTabItemButtonId(tabitemid: string) {
        return this.name + '_' + tabitemid;
    }

    /**
     * AfterContentInit Event
     */
    public ngAfterContentInit() {
        this.initTabs();
    }

    /**
     * select new tab
     * @param tab tab that should be selected
     */
    public selectTab(tab: SacTabItemCommon): void {
        // Cancel if Selected Tab is disabled
        if (tab.disabled) {
            return;
        }

        this.tabItems().forEach((item) => (item.active = false));
        tab.active = true;
        this.tabselected.emit(tab.id);
    }

    /**
     * Array von TabItems
     */
    public abstract tabItems(): SacTabItemCommon[];

    // #endregion Public Methods

    // #region Private Methods

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

    // #endregion Private Methods
}
