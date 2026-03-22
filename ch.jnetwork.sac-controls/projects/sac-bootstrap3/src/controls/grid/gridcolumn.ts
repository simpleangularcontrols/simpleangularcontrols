import { SacGridComponent } from './grid';
import { NgIf } from '@angular/common';
import { Component, ElementRef, Injector, forwardRef } from '@angular/core';
import { SacGridColumnBaseCommon, SacGridColumnCommon } from '@simpleangularcontrols/sac-common';

/**
 * Grid column definition component for grid layout.
 */
@Component({
    selector: 'sac-gridcolumn',
    templateUrl: './gridcolumn.html',
    providers: [
        {
            provide: SacGridColumnBaseCommon,
            useExisting: forwardRef(() => SacGridColumnComponent),
        },
    ],
    standalone: true,
    imports: [NgIf],
})
export class SacGridColumnComponent extends SacGridColumnCommon {
    // #region Constructors

    /**
     * Constructor
     * @param grid Grid reference
     * @param injector Angular dependency injection service
     * @param el HTML DOM element
     */
    constructor(grid: SacGridComponent, injector: Injector, el: ElementRef) {
        super(grid, injector, el);
    }

    // #endregion Constructors
}
