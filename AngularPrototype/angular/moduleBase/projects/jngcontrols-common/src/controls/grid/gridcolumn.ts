import { Input, EventEmitter, Output, TemplateRef, Component, ElementRef } from '@angular/core';
import { NgGridColumnBaseCommon } from './gridcolumnbase';
import { NgGridCommon } from './grid';

export class NgGridColumnCommon extends NgGridColumnBaseCommon {
  constructor(grid: NgGridCommon, el: ElementRef) {
    super(grid, el);
  }
}
