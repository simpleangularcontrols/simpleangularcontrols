import { SacTooltipCommon } from '@simpleangularcontrols/sac-common';
import { Component, ChangeDetectorRef, ElementRef } from '@angular/core';
import { NgIf } from '@angular/common';

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
    standalone: true,
    imports: [NgIf],
})
export class SacTooltipComponent extends SacTooltipCommon {

  /**
   * Konstrukor
   * @param parent SacFormular Instanz
   * @param injector Component Injector
   */
  constructor(cdRef: ChangeDetectorRef, ref: ElementRef) {
    super(cdRef, ref);
  }
}
