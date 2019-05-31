import { Component, Input, TemplateRef, Output, EventEmitter, HostListener, QueryList, ViewChildren, ContentChildren } from '@angular/core';
import { PagerData } from './model';
import { NgGridColumnBaseCommon } from './gridcolumnbase';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { NgBaseModelControl } from '../../common/basemodelcontrol';

export abstract class NgGridCommon {

  private gridColumnCount: number = 0;

  protected paginators: Array<any> = [];
  protected activePage: number = 1;
  protected firstPageNumber: number = 1;
  protected firstVisibleIndex: number = 1;
  protected lastVisibleIndex;
  protected lastPageNumber: number;

  //#region InputOutputs

  /**
   * Grid Daten
   */
  @Input("value")
  public value: any

  /**
   * Pager Settings
   */
  @Input('pagerdata')
  public pagerdata: PagerData

  @Input("name")
  public name: string

  /**
   * Text welcher angezeigt wird, wenn keine Rows verfügbar sind.
   */
  @Input("emptytext")
  public _emptytext: string


  /**
   * Text in Pager für "Seite x von y".
   *
   * Folgende Interpolation Texte sind vorhanden:
   * {{CURRENTPAGE}}: Aktuelle Seite
   * {{TOTALPAGES}}: Anzahl Seiten
   * 
   */
  @Input("pagingtext")
  public pagingText: string = "Seite {{CURRENTPAGE}} von {{TOTALPAGES}}";

  /**
   * Text in Page für Anzahl Seitenelemente pro Seite
   *
   * Folgende Interpolation Texte sind vorhanden:
   * {{PAGESIZE}}: Anzahl Elemente pro Seite
   * 
   */
  @Input("pagesizetext")
  public pageSizeText: string = "Einträge pro Seite {{PAGESIZE}}";

  @Input("maxvisiblepagenumbers") _maxvisiblepagenumbers: number;
  @Input("headers") _headers: TemplateRef<any>;
  @Input("body") _body: TemplateRef<any>;

  @Output("onpaging") _pagingEvent: EventEmitter<number> = new EventEmitter();

  @Output("onsorting") _sortingevent: EventEmitter<any> = new EventEmitter()

  @Output("onpagesizechanged") _pageSizeChanged: EventEmitter<number> = new EventEmitter<number>();

  //#endregion

  private sortingFlow: string = "ascending"
  private oldChosenHeader: string

  /**
   * Setzt die neue Seite
   *  
   * @param newStartIndex Neuer Seiten Index (Zero-Based)
   */
  pageChange(newStartIndex) {
    this._pagingEvent.emit(newStartIndex)
  }

  /**
   * Setzt die Page Size auf dem Grid neu
   * 
   * @param pageSize Grösse der Page
   */
  pageSizeChanged(pageSize: number) {
    this._pageSizeChanged.emit(pageSize);
  }

  public RegisterColumn() {
    this.gridColumnCount++;
  }

  public UnregisterColumn() {
    this.gridColumnCount--;
  }

  public GetColumnCount(): number {
    return this.gridColumnCount;
  }

  public sortBy(command) {
    if (command == this.oldChosenHeader) {
      if (this.sortingFlow == "ascending") {
        this.sortingFlow = "descending"
      } else {
        this.sortingFlow = "ascending"
      }
    } else {
      this.sortingFlow = "ascending"
    }
    this._sortingevent.emit({ command, flow: this.sortingFlow })
    this.oldChosenHeader = command
  }
}
