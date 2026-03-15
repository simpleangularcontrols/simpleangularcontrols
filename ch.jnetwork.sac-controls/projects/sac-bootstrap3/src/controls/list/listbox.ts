import { SacFormLayoutDirective } from '../layout/formlayout.directive';
import { SacToControlHeightPipe } from '../layout/tocontrolheight.pipe';
import { SacToControlWidthCssPipe } from '../layout/tocontrolwidthcss.pipe';
import { SacToLabelHeightPipe } from '../layout/tolabelheight.pipe';
import { SacToLabelWidthCssPipe } from '../layout/tolabelwidthcss.pipe';
import { SacTooltipComponent } from '../tooltip/tooltip';
import { LISTBOX_TOKEN } from './list.token';
import { SacListboxOptionDirective } from './listboxoption.directive';
import { AsyncPipe, NgClass, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, Host, Injector, Optional, forwardRef } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SacListboxCommon, SacTestingAttributePipe } from '@simpleangularcontrols/sac-common';

/**
 * Listbox component
 */
@Component({
    selector: 'sac-listbox',
    templateUrl: './listbox.html',
    // Register Value Access Provider so the value can be written and read via model
    providers: [
        { provide: LISTBOX_TOKEN, useExisting: SacListboxComponent },
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: SacListboxComponent,
        },
        {
            provide: NG_VALIDATORS,
            multi: true,
            useExisting: forwardRef(() => SacListboxComponent),
        },
    ],
    standalone: true,
    imports: [
        NgClass,
        NgIf,
        NgFor,
        NgTemplateOutlet,
        AsyncPipe,
        SacToLabelWidthCssPipe,
        SacToControlWidthCssPipe,
        SacToLabelHeightPipe,
        SacToControlHeightPipe,
        SacTooltipComponent,
        SacTestingAttributePipe,
        SacListboxOptionDirective,
    ],
})
export class SacListboxComponent extends SacListboxCommon {
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
