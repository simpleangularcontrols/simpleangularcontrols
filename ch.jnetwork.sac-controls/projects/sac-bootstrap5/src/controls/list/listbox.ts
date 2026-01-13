import { SacFormLayoutDirective } from '../layout/formlayout.directive';
import { LISTBOX_TOKEN } from './list.token';
import { Component, Host, Injector, Optional, forwardRef } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SacListboxCommon } from '@simpleangularcontrols/sac-common';

/**
 * Listbox Komponente
 */
@Component({
    selector: 'sac-listbox',
    templateUrl: './listbox.html',
    // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
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
