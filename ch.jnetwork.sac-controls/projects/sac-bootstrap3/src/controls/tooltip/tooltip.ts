import { NgIf } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef } from '@angular/core';
import { SacTestingAttributePipe, SacTooltipCommon } from '@simpleangularcontrols/sac-common';

/**
 * Tooltip component
 *
 * @example ToolTip Control
 *
 *  <ngTooltip tooltiptext="My tooltip" [inlinemode]="true">
 *    <i class="tooltip"></i>
 *  </ngTooltip>
 *
 * @example ToolTip Control in inline mode. Style on icon can also be placed in class.
 *
 *  <div class="form-inline">
 *    <ngInputSearch iconname="Suchen"></ngInputSearch>
 *    <ngTooltip tooltiptext="My tooltip" [inlinemode]="true">
 *      <i class="tooltip" style="position: relative; left: 0; top: 3px; display: inline-block; margin-right: 10px;"></i>
 *    </ngTooltip>
 *  </div>
 *
 */
@Component({
    selector: 'sac-tooltip',
    templateUrl: './tooltip.html',
    standalone: true,
    imports: [NgIf, SacTestingAttributePipe],
})
export class SacTooltipComponent extends SacTooltipCommon {
    // #region Constructors

    /**
     * Constructor
     * @param cdRef Change Detection Service
     * @param ref Element Reference
     */
    constructor(cdRef: ChangeDetectorRef, ref: ElementRef) {
        super(cdRef, ref);
    }

    // #endregion Constructors

    // #region Protected Methods

    /**
     * Padding for Tooltip
     * @returns Always 0. BS3 not require Padding
     */
    protected getTooltipOffset(): number {
        return 0;
    }

    // #endregion Protected Methods
}
