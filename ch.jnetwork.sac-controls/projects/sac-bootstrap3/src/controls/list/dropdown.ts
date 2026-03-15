import { SacFormLayoutDirective } from '../layout/formlayout.directive';
import { SacToControlHeightPipe } from '../layout/tocontrolheight.pipe';
import { SacToControlWidthCssPipe } from '../layout/tocontrolwidthcss.pipe';
import { SacToLabelHeightPipe } from '../layout/tolabelheight.pipe';
import { SacToLabelWidthCssPipe } from '../layout/tolabelwidthcss.pipe';
import { SacTooltipComponent } from '../tooltip/tooltip';
import { SacDropdownOptionDirective } from './dropdownoption.directive';
import { DROPDOWN_TOKEN } from './list.token';
import { AsyncPipe, NgClass, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, ElementRef, Host, Injector, Optional, Renderer2, forwardRef } from '@angular/core';
import { FormsModule, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SacDropdownCommon, SacTestingAttributePipe } from '@simpleangularcontrols/sac-common';

@Component({
    selector: 'sac-dropdown',
    templateUrl: './dropdown.html',
    // Register Value Access Provider so the value can be written and read via model
    providers: [
        { provide: DROPDOWN_TOKEN, useExisting: forwardRef(() => SacDropdownComponent) },
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: SacDropdownComponent,
        },
        {
            provide: NG_VALIDATORS,
            multi: true,
            useExisting: forwardRef(() => SacDropdownComponent),
        },
    ],
    standalone: true,
    imports: [
        NgClass,
        NgIf,
        FormsModule,
        NgFor,
        NgTemplateOutlet,
        AsyncPipe,
        SacToLabelWidthCssPipe,
        SacToControlWidthCssPipe,
        SacToLabelHeightPipe,
        SacToControlHeightPipe,
        SacTooltipComponent,
        SacTestingAttributePipe,
        SacDropdownOptionDirective,
    ],
})
export class SacDropdownComponent extends SacDropdownCommon {
    // #region Constructors

    /**
     * Constructor
     * @param formLayout SacFormLayout to define scoped layout settings
     * @param injector Injector for injecting services
     * @param renderer Angular rendering engine
     * @param elementRef Reference to html dom element
     */
    constructor(
        @Host() @Optional() formLayout: SacFormLayoutDirective,
        injector: Injector,
        renderer: Renderer2,
        elementRef: ElementRef
    ) {
        super(formLayout, injector, renderer, elementRef);
    }

    // #endregion Constructors
}
