import { Component, QueryList, ContentChildren, forwardRef } from '@angular/core';
import { NgGridCommon, NgGridColumnBaseCommon, PagerData } from '@jnetwork/jngcontrols-common';
import { NgFormular } from '../form/form';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, ControlContainer } from '@angular/forms';
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

  @ContentChildren(NgGridColumnBaseCommon)
  _columnItems: QueryList<NgGridColumnBaseCommon>;

  contentGridColumns(): QueryList<NgGridColumnBaseCommon> {
    return this._columnItems as QueryList<NgGridColumnBaseCommon>;
  }

  ellipsis: boolean = false
}
