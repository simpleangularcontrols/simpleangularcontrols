import { ElementRef, Input } from '@angular/core';
import { convertToBoolean } from '../../utilities/convertion';
import { NgGridCommon } from './grid';
import { NgGridColumnBaseCommon } from './gridcolumnbase';

/**
 * Komponente für NgGridColumnCommon. Extends NgGridColumnBaseCommon
 */
export class NgGridColumnCommon extends NgGridColumnBaseCommon {
  /**
   * Konstruktor
   */
  constructor(grid: NgGridCommon, el: ElementRef) {
    super(grid, el);
  }

   /**
   * Das Property enthielt boolean Wert für die CSS Klasse ellipsis. Default is false.
   */
  private _ellipsis: boolean = false;

  /**
   * Input Parameter für das css Class ellipsis. Das Setter setzt das boolean Wert auf das private property _ellipsis
   */
  @Input('ellipsis')
  public set ellipsis(v: string | boolean) {
    this._ellipsis = convertToBoolean(v);
  }

  /**
   * Getter für das private property _ellipsis. Ergibt das boolean Wert des Property
   */
  public get ellipsis(): string | boolean {
    return this._ellipsis;
  }

  /**
   * Die Methode returns das Wert des Property _ellipsis
   */
  public IsEllipsis(): boolean {
    return this._ellipsis;
  }
}
