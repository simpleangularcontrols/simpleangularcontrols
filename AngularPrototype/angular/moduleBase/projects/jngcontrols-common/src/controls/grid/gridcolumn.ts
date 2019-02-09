import { Input, EventEmitter, Output, TemplateRef, Component, ElementRef } from '@angular/core';
import { NgGridColumnBaseCommon } from './gridcolumnbase';
import { NgGridCommon } from './grid';
import { convertToBoolean } from '../../utilities/convertion';

export class NgGridColumnCommon extends NgGridColumnBaseCommon {
  constructor(grid: NgGridCommon, el: ElementRef) {
    super(grid, el);
  }

  private _ellipsis: boolean = false;

  @Input("ellipsis")
  public set ellipsis(v: string | boolean) {
    this._ellipsis = convertToBoolean(v);
  }
  public get ellipsis(): string | boolean {
    return this._ellipsis;
  }

  public IsEllipsis(): boolean {
    return this._ellipsis;
  }
}
