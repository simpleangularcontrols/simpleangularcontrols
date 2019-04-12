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

  @Input("value")
  public value: any

  @Input('pagerdata')
  public pagerdata: any

  @Input("name")
  public name: string

  @Input("emptytext")
  public _emptytext: string

  @Input("maxvisiblepagenumbers") _maxvisiblepagenumbers: number;
  @Input("headers") _headers: TemplateRef<any>;
  @Input("body") _body: TemplateRef<any>;

  @Output("onpaging") _pagingEvent: EventEmitter<any> = new EventEmitter();

  @Output("onsorting") _sortingevent: EventEmitter<any> = new EventEmitter()

  //#endregion

  private sortingFlow: string = "ascending"
  private oldChosenHeader: string

  pagingSkipGrid(newStartIndex) {
    this._pagingEvent.emit(newStartIndex)
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
