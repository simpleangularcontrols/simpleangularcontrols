import { SacFormLayoutDirective } from '../layout/formlayout.directive';
import { DROPDOWN_TOKEN } from './list.token';
import { Component, ElementRef, Host, Injector, Optional, Renderer2, forwardRef } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SacDropdownCommon } from '@simpleangularcontrols/sac-common';

/**
 * Dropdown component
 */
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
