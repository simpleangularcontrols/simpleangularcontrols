import { SacGridComponent } from './grid';
import { NgIf } from '@angular/common';
import { Component, ElementRef, Injector, forwardRef } from '@angular/core';
import { SacGridColumnBaseCommon, SacGridColumnCommon } from '@simpleangularcontrols/sac-common';

/**
 * Grid Column Komponente
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
     * Konstruktor
     * @param grid Grid Referenz
     * @param el HTML DOM Element
     */
    constructor(grid: SacGridComponent, injector: Injector, el: ElementRef) {
        super(grid, injector, el);
    }

    // #endregion Constructors
}
