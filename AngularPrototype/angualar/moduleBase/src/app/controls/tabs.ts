import { Component, Directive, Input, ElementRef, AfterViewInit, ContentChildren, QueryList, HostBinding } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ControlContainer, FormControl } from '@angular/forms';
import * as $ from "jquery";

@Directive({
  selector: 'ngTabItem'
})
export class NgTabItem {

  private tabContainer: NgTab;
  protected _active: boolean;

  // #region Constructor

  // Konstruktor
  // Inject des TabContainers
  constructor(tabContainer: NgTab) {
    this.tabContainer = tabContainer;
    this.tabContainer.initTab(this);
  }

  // #endregion

  @HostBinding('class.tab-pane') addClass = true;

  /** tab active state toggle */
  @HostBinding('class.active')
  @Input()
  get active(): boolean {
    return this._active;
  }

  set active(active: boolean) {
    if (this._active === active || !active) {
      return;
    }

    this._active = active;
    this.tabContainer.tabItems.forEach((tab: NgTabItem) => {
      if (tab !== this) {
        tab.active = false;
      }
    });
  }

  @Input("disabled")
  _disabled: boolean = false;

  @Input("id")
  _id: string;

  @Input("label")
  _label: string;

}


@Component({
  selector: 'ngTab',
  templateUrl: './tabs.html'
})

export class NgTab implements AfterViewInit {
  private baseElement: ElementRef;
  private tabs: any;

  tabItems: NgTabItem[] = [];

  // #region Constructor

  // Konstruktor
  // Inject des Formulars
  constructor(private el: ElementRef) {
    this.baseElement = el;
  }

  // #endregion

  // #region Control initialisieren

  ngAfterViewInit() {
    this.tabs = jQuery(this.baseElement.nativeElement.firstChild);
    this.tabs.tab();

    // this.tabItems.first.active = true;
  }

  // #endregion

  initTab(tab: NgTabItem): void {
    this.tabItems.push(tab);
    tab.active = this.tabItems.length === 1 && tab.active === undefined;
  }
}
