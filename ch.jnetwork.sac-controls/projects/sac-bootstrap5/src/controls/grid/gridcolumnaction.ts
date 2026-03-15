import { SacGridComponent } from './grid';
import { NgIf } from '@angular/common';
import { Component, ElementRef, Injector, forwardRef } from '@angular/core';
import { SacGridColumnActionCommon, SacGridColumnBaseCommon } from '@simpleangularcontrols/sac-common';

/**
 * Grid action component
 */
@Component({
    selector: 'sac-gridcolumnaction',
    templateUrl: './gridcolumnaction.html',
    providers: [
        {
            provide: SacGridColumnBaseCommon,
            useExisting: forwardRef(() => SacGridColumnActionComponent),
        },
    ],
    standalone: true,
    imports: [NgIf],
})
export class SacGridColumnActionComponent extends SacGridColumnActionCommon {
    // #region Constructors

    /**
     * Constructor
     * @param grid Reference to grid
     * @param el HTML element reference
     */
    constructor(grid: SacGridComponent, injector: Injector, el: ElementRef) {
        super(grid, injector, el);

        this.width = '60px';
    }

    // #endregion Constructors
}
