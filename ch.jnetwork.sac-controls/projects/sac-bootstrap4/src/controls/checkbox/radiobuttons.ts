import { SacFormLayoutDirective } from '../layout/formlayout.directive';
import { SacToControlWidthCssPipe } from '../layout/tocontrolwidthcss.pipe';
import { SacToLabelHeightPipe } from '../layout/tolabelheight.pipe';
import { SacToLabelWidthCssPipe } from '../layout/tolabelwidthcss.pipe';
import { SacTooltipComponent } from '../tooltip/tooltip';
import { NgClass, NgIf } from '@angular/common';
import { Component, Host, Injector, Optional, forwardRef } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SacRadiobuttonsCommon, SacTestingAttributePipe } from '@simpleangularcontrols/sac-common';

/**
 * Radiobuttons Group component
 */
@Component({
    selector: 'sac-radiobuttons',
    templateUrl: './radiobuttons.html',
    // Register value access provider so that value can be written and read via model
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SacRadiobuttonsComponent),
            multi: true,
        },
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => SacRadiobuttonsComponent),
            multi: true,
        },
    ],
    standalone: true,
    imports: [
        NgIf,
        NgClass,
        SacToLabelWidthCssPipe,
        SacToControlWidthCssPipe,
        SacToLabelHeightPipe,
        SacTooltipComponent,
        SacTestingAttributePipe,
    ],
})
export class SacRadiobuttonsComponent extends SacRadiobuttonsCommon {
    // #region Constructors

    /**
     * Initializes the radiobutton group control with layout context and dependency injector.
     * @param formLayout SacFormLayout to define scoped layout settings
     * @param injector Injector for injecting services
     */
    constructor(@Host() @Optional() formLayout: SacFormLayoutDirective, injector: Injector) {
        super(formLayout, injector);
    }

    // #endregion Constructors
}
