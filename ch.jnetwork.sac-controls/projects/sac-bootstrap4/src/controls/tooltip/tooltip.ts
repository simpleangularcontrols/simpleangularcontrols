import { ChangeDetectorRef, Component, ElementRef } from '@angular/core';
import { SacTooltipCommon } from '@simpleangularcontrols/sac-common';

/**
 * Tooltip component
 *
 * @example ToolTip Control
 *
 *  <ngTooltip tooltiptext="My tooltip" [inlinemode]="true">
 *    <i class="tooltip"></i>
 *  </ngTooltip>
 *
 * @example ToolTip control in inline mode. Style on icon can be moved to a class.
 *
 *  <div class="form-inline">
 *    <ngInputSearch iconname="Search"></ngInputSearch>
 *    <ngTooltip tooltiptext="My tooltip" [inlinemode]="true">
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
     * Constructor
     * @param cdRef Change Detector Reference
     * @param ref Element Reference
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
        return 2;
    }

    // #endregion Protected Methods
}
