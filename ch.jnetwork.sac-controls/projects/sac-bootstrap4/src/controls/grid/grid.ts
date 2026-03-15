import { ChangeDetectorRef, Component, ContentChild, Injector, TemplateRef, forwardRef } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SacGridCommon } from '@simpleangularcontrols/sac-common';

/**
 * Grid component
 */
@Component({
    selector: 'sac-grid',
    templateUrl: './grid.html',
    // Register Value Access Provider so the value can be written and read via model
    providers: [
        { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: SacGridComponent },
        {
            provide: NG_VALIDATORS,
            multi: true,
            useExisting: forwardRef(() => SacGridComponent),
        },
    ],
})
export class SacGridComponent extends SacGridCommon {
    // #region Properties

    /**
     * Enables ellipsis function on the column
     */
    public ellipsis: boolean = false;

    /**
     * Reference to column template
     */
    @ContentChild(TemplateRef, { static: false })
    public template: TemplateRef<any>;

    // #endregion Properties

    // #region Constructors

    /**
     * Konstrukor
     * @param cdRef Change Detection Reference
     */
    constructor(cdRef: ChangeDetectorRef, injector: Injector) {
        super(cdRef, injector);
    }

    // #endregion Constructors
}
