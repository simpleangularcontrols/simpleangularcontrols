import { SacFormLayoutDirective } from '../layout/formlayout.directive';
import { SacToControlHeightPipe } from '../layout/tocontrolheight.pipe';
import { SacToControlWidthCssPipe } from '../layout/tocontrolwidthcss.pipe';
import { SacToLabelHeightPipe } from '../layout/tolabelheight.pipe';
import { SacToLabelWidthCssPipe } from '../layout/tolabelwidthcss.pipe';
import { SacTooltipComponent } from '../tooltip/tooltip';
import { AsyncPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Directive, ElementRef, Host, Injector, Optional, Renderer2, forwardRef } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SacListboxCommon, SacListboxOptionCommon, SacTestingAttributePipe } from '@simpleangularcontrols/sac-common';

// #region Exported Classes

/**
 * Option Item in Listbox
 */
@Directive({ selector: '[sacOption],option', standalone: true })
export class SacListboxOptionDirective extends SacListboxOptionCommon {
    // #region Constructors

    /**
     * Konstruktor
     * @param elementRef Referenz auf DOM Element
     * @param renderer Angular Rendering Engine
     * @param listbox Referenz auf Listbox Komponente
     */
    constructor(elementRef: ElementRef, renderer: Renderer2, @Optional() @Host() listbox: SacListboxComponent) {
        super(elementRef, renderer, listbox);
    }

    // #endregion Constructors
}

/**
 * Listbox component
 */
@Component({
    selector: 'sac-listbox',
    templateUrl: './listbox.html',
    // Register value access provider so that value can be written and read via model
    providers: [
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
        AsyncPipe,
        forwardRef(() => SacListboxOptionDirective),
        SacToControlWidthCssPipe,
        SacToLabelWidthCssPipe,
        SacToLabelHeightPipe,
        SacTooltipComponent,
        SacToControlHeightPipe,
        SacTestingAttributePipe,
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

// #endregion Exported Classes
