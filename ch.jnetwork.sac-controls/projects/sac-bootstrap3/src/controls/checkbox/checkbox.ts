import { SacFormLayoutDirective } from '../layout/formlayout.directive';
import { SacToControlWidthCssPipe } from '../layout/tocontrolwidthcss.pipe';
import { SacToLabelHeightPipe } from '../layout/tolabelheight.pipe';
import { SacToLabelWidthCssPipe } from '../layout/tolabelwidthcss.pipe';
import { SacTooltipComponent } from '../tooltip/tooltip';
import { NgClass, NgIf } from '@angular/common';
import { Component, Host, Injector, Optional, forwardRef } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SacCheckboxCommon, SacTestingAttributePipe } from '@simpleangularcontrols/sac-common';

/**
 * Checkbox component for binary true/false selection.
 */
@Component({
    selector: 'sac-checkbox',
    templateUrl: './checkbox.html',
    styleUrls: ['./checkbox.scss'],
    // Register Value Access Provider so the value can be written and read via model
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: SacCheckboxComponent,
        },
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => SacCheckboxComponent),
            multi: true,
        },
    ],
    standalone: true,
    imports: [
        NgClass,
        NgIf,
        SacToLabelWidthCssPipe,
        SacToControlWidthCssPipe,
        SacToLabelHeightPipe,
        SacTooltipComponent,
        SacTestingAttributePipe,
    ],
})
export class SacCheckboxComponent extends SacCheckboxCommon {
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
