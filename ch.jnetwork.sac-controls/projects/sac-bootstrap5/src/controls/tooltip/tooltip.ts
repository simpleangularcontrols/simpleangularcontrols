import { ChangeDetectorRef, Component, ElementRef } from '@angular/core';
import { SacTooltipCommon } from '@simpleangularcontrols/sac-common';

/**
 * Tooltip Komponente
 *
 * @example ToolTip Control
 *
 *  <ngTooltip tooltiptext="Mein Tooltip" [inlinemode]="true">
 *    <i class="tooltip"></i>
 *  </ngTooltip>
 *
 * @example ToolTip Control im Inline Mode. Style auf Icon kann auch in Klasse ausgelagert werden.
 *
 *  <div class="form-inline">
 *    <ngInputSearch iconname="Suchen"></ngInputSearch>
 *    <ngTooltip tooltiptext="Mein Tooltip" [inlinemode]="true">
 *      <i class="tooltip" style="position: relative; left: 0; top: 3px; display: inline-block; margin-right: 10px;"></i>
 *    </ngTooltip>
 *  </div>
 *
 */
@Component({
  selector: 'sac-tooltip',
  templateUrl: './tooltip.html',
})
export class SacTooltipComponent extends SacTooltipCommon {
  // #region Constructors

  /**
   * Konstrukor
   * @param parent SacFormular Instanz
   * @param injector Component Injector
   */
  constructor(cdRef: ChangeDetectorRef, ref: ElementRef) {
    super(cdRef, ref);
  }

  // #endregion Constructors

  // #region Protected Methods

  /**
   * Padding Value for Bootstrap5 Tooltip Padding
   * @returns Static Padding Value for BS5
   */
  protected getTooltipOffset(): number {
    return 8;
  }

  // #endregion Protected Methods
}
