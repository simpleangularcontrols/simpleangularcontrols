import { SacPagingComponent } from './paging';
import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectorRef, Component, ContentChild, Injector, TemplateRef, forwardRef } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SacGridCommon, SacTestingAttributePipe } from '@simpleangularcontrols/sac-common';

/**
 * Grid component
 */
@Component({
    selector: 'sac-grid',
    templateUrl: './grid.html',
    // Register value access provider so that value can be written and read via model
    providers: [
        { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: SacGridComponent },
        {
            provide: NG_VALIDATORS,
            multi: true,
            useExisting: forwardRef(() => SacGridComponent),
        },
    ],
    standalone: true,
    imports: [NgTemplateOutlet, NgFor, NgIf, SacPagingComponent, SacTestingAttributePipe],
})
export class SacGridComponent extends SacGridCommon {
    // #region Properties

    /**
     * Sets the ellipsis function on the column
     */
    public ellipsis = false;

    /**
     * Reference to column template
     */
    @ContentChild(TemplateRef, { static: false })
    public template: TemplateRef<any>;

    // #endregion Properties

    // #region Constructors

    /**
     * Constructor
     * @param cdRef Change detection reference
     */
    constructor(cdRef: ChangeDetectorRef, injector: Injector) {
        super(cdRef, injector);
    }

    // #endregion Constructors
}
