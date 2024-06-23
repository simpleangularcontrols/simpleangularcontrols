import { Directive, ElementRef, Injector, Input } from '@angular/core';
import { convertToBoolean } from '../../utilities/convertion';
import { SacGridCommon } from './grid';
import { SacGridColumnBaseCommon } from './gridcolumnbase';

/**
 * Komponente für SacGridColumnCommon. Extends SacGridColumnBaseCommon
 */
@Directive()
export class SacGridColumnCommon extends SacGridColumnBaseCommon {
  /**
   * Konstruktor
   */
  constructor(grid: SacGridCommon, injector: Injector, el: ElementRef) {
    super(grid, injector, el);
  }

  /**
   * Das Property enthielt boolean Wert für die CSS Klasse ellipsis. Default is false.
   */
  private _ellipsis: boolean = false;

  /**
   * Input Parameter für das css Class ellipsis. Das Setter setzt das boolean Wert auf das private property _ellipsis
   */
  @Input()
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
