import { SacFormLayoutDirective } from '../layout/formlayout.directive';
import { SacToControlHeightPipe } from '../layout/tocontrolheight.pipe';
import { SacToControlWidthCssPipe } from '../layout/tocontrolwidthcss.pipe';
import { SacToLabelHeightPipe } from '../layout/tolabelheight.pipe';
import { SacToLabelWidthCssPipe } from '../layout/tolabelwidthcss.pipe';
import { SacTooltipComponent } from '../tooltip/tooltip';
import { AsyncPipe, NgClass, NgIf } from '@angular/common';
import { Component, Host, Injector, Optional, forwardRef } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SacInputCommon, SacTestingAttributePipe } from '@simpleangularcontrols/sac-common';

/**
 * Input component
 */
@Component({
    selector: 'sac-input',
    templateUrl: './input.html',
    // Register Value Access Provider so the value can be written and read via model
    providers: [
        { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: SacInputComponent },
        {
            provide: NG_VALIDATORS,
            multi: true,
            useExisting: forwardRef(() => SacInputComponent),
        },
    ],
    standalone: true,
    imports: [
        NgClass,
        NgIf,
        AsyncPipe,
        SacToLabelWidthCssPipe,
        SacToControlWidthCssPipe,
        SacToLabelHeightPipe,
        SacToControlHeightPipe,
        SacTooltipComponent,
        SacTestingAttributePipe,
    ],
})
export class SacInputComponent extends SacInputCommon {
    // #region Constructors

    /**
     * Constructor
     * @param formLayout SacFormLayout to define scoped layout settings
     * @param injector Injector for injecting services
     */
    constructor(@Host() @Optional() formLayout: SacFormLayoutDirective, injector: Injector) {
        super(formLayout, injector);
    }

    // #endregion Constructors
}
