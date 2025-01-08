import { Directive, ElementRef, Injector, Input } from '@angular/core';
import { convertToBoolean } from '../../utilities/convertion';
import { SacGridCommon } from './grid';
import { SacGridColumnBaseCommon } from './gridcolumnbase';

/**
 * Component for SacGridColumnCommon. Extends SacGridColumnBaseCommon
 */
@Directive()
export class SacGridColumnCommon extends SacGridColumnBaseCommon {
  // #region Properties

  /**
   *  Defines whether the CSS class ellipsis is set.
   */
  private _ellipsis: boolean = false;

  // #endregion Properties

  // #region Constructors

  /**
   * Constructor
   */
  constructor(grid: SacGridCommon, injector: Injector, el: ElementRef) {
    super(grid, injector, el);
  }

  // #endregion Constructors

  // #region Public Getters And Setters

  /**
   * Sets the ellipsis property. Can be a Boolean or the strings `true` or `false`.
   */
  @Input()
  public set ellipsis(v: string | boolean) {
    this._ellipsis = convertToBoolean(v);
  }

  /**
   * Getter for the ellipsis property. Always returns a boolean type.
   */
  public get ellipsis(): string | boolean {
    return this._ellipsis;
  }

  // #endregion Public Getters And Setters

  // #region Public Methods

  /**
   * Checks whether ellipsis is set
   */
  public IsEllipsis(): boolean {
    return this._ellipsis;
  }

  // #endregion Public Methods
}
