import { SacPagingComponent } from './paging';
import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, ContentChild, TemplateRef, forwardRef } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SacGridCommon, SacTestingAttributePipe } from '@simpleangularcontrols/sac-common';

@Component({
    selector: 'sac-grid',
    templateUrl: './grid.html',
    // Register Value Access Provider so the value can be written and read via model
    providers: [
        { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: SacGridComponent },
        { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => SacGridComponent) },
    ],
    standalone: true,
    imports: [NgTemplateOutlet, NgFor, NgIf, SacPagingComponent, SacTestingAttributePipe],
})
export class SacGridComponent extends SacGridCommon {
    // #region Properties

    /**
     * Whether to enable text ellipsis for grid cells
     */
    public ellipsis = false;

    /**
     * Template reference for custom grid template
     */
    @ContentChild(TemplateRef, { static: true })
    public template: TemplateRef<any>;

    // #endregion Properties
}
