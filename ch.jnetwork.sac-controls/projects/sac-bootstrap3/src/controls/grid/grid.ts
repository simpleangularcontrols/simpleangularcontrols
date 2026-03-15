import { SacPagingComponent } from './paging';
import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, ContentChild, TemplateRef, forwardRef } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SacGridCommon, SacTestingAttributePipe } from '@simpleangularcontrols/sac-common';

@Component({
    selector: 'sac-grid',
    templateUrl: './grid.html',
    // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
    providers: [
        { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: SacGridComponent },
        { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => SacGridComponent) },
    ],
    standalone: true,
    imports: [NgTemplateOutlet, NgFor, NgIf, SacPagingComponent, SacTestingAttributePipe],
})
export class SacGridComponent extends SacGridCommon {
    // #region Properties

    public ellipsis = false;
    @ContentChild(TemplateRef, { static: true })
    public template: TemplateRef<any>;

    // #endregion Properties
}
