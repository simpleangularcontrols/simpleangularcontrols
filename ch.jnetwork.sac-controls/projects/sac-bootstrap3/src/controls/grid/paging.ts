import { AsyncPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Injector, forwardRef } from '@angular/core';
import { FormsModule, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SacPagingCommon, SacTestingAttributePipe } from '@simpleangularcontrols/sac-common';

@Component({
    selector: 'sac-paging',
    templateUrl: './paging.html',
    // Register Value Access Provider so the value can be written and read via model
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: SacPagingComponent,
        },
        {
            provide: NG_VALIDATORS,
            multi: true,
            useExisting: forwardRef(() => SacPagingComponent),
        },
    ],
    standalone: true,
    imports: [NgClass, NgFor, FormsModule, AsyncPipe, NgIf, SacTestingAttributePipe],
})
export class SacPagingComponent extends SacPagingCommon {
    // #region Constructors

    /**
     * Constructor
     */
    constructor(injector: Injector) {
        super(injector);
    }

    // #endregion Constructors
}
