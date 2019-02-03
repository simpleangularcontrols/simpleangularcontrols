import { Component, Input, TemplateRef, Output, EventEmitter, HostListener, QueryList, ViewChildren, ContentChildren, Host, forwardRef, Injector } from '@angular/core';
import { NgGridCommon, NgGridColumnCommon, PagerData } from '@jnetwork/jngcontrols-common';
import { NgFormular } from '../form/form';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, ControlContainer } from '@angular/forms';
import { NgGridColumn } from './gridcolumn';
import { NgPaging } from './paging';


@Component({
  selector: 'ngGrid',
  templateUrl: './grid.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: NgGrid },
    { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => NgGrid) }
  ],
  // View Provider, damit das Formular an das Control gebunden werden kann
  viewProviders: [{ provide: ControlContainer, useExisting: NgFormular }]
})


export class NgGrid extends NgGridCommon {

  @ContentChildren(NgGridColumn)
  _columnItems: QueryList<NgGridColumn>;

  contentGridColumns(): QueryList<NgGridColumnCommon> {
    return this._columnItems as QueryList<NgGridColumnCommon>;
  }

  @ContentChildren(NgPaging)
  _pagingData: PagerData

  ellipsis: boolean = false
}
