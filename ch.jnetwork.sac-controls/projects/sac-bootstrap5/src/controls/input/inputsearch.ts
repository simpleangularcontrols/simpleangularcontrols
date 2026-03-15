import { SacFormLayoutDirective } from '../layout/formlayout.directive';
import { SacToControlHeightPipe } from '../layout/tocontrolheight.pipe';
import { SacToControlWidthCssPipe } from '../layout/tocontrolwidthcss.pipe';
import { SacToLabelHeightPipe } from '../layout/tolabelheight.pipe';
import { SacToLabelWidthCssPipe } from '../layout/tolabelwidthcss.pipe';
import { SacTooltipComponent } from '../tooltip/tooltip';
import { NgClass, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, Host, Injector, Optional, forwardRef } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SacInputSearchCommon, SacTestingAttributePipe } from '@simpleangularcontrols/sac-common';

/**
 * Input box for search
 */
@Component({
    selector: 'sac-inputsearch',
    templateUrl: './inputsearch.html',
    // Register value access provider so that value can be written and read via model
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: SacInputSearchComponent,
        },
        {
            provide: NG_VALIDATORS,
            multi: true,
            useExisting: forwardRef(() => SacInputSearchComponent),
        },
    ],
    standalone: true,
    imports: [
        NgClass,
        NgIf,
        NgTemplateOutlet,
        SacToControlWidthCssPipe,
        SacToLabelWidthCssPipe,
        SacToLabelHeightPipe,
        SacToControlHeightPipe,
        SacTooltipComponent,
        SacTestingAttributePipe,
    ],
})
export class SacInputSearchComponent extends SacInputSearchCommon {
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
