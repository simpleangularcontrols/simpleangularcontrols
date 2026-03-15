import { SacFormLayoutDirective } from '../layout/formlayout.directive';
import { Component, Host, Injector, Optional, forwardRef } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SacStaticFormContainerCommon } from '@simpleangularcontrols/sac-common';

/**
 * Component for integrating any arbitrary control into the form structure
 *
 * @example
 *  <ngStaticFormContainer name='myformcontainer' label="My Custom Form Control" [isrequired]='false'>
 *      <input type="range" class="form-control" />
 *  </ngStaticFormContainer>
 *
 * @example
 * <ngStaticFormContainer name='myformcintainer' label="My Custom Form Control" [isrequired]='false' tooltiptext="This is a tooltip text">
 *     <input type="range" class="form-control" />
 * </ngStaticFormContainer>
 *
 **/
@Component({
    selector: 'sac-staticformcontainer',
    templateUrl: './formcontainer.html',
    // Register Value Access Provider so the value can be written and read via model
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: SacStaticFormContainerComponent,
        },
        {
            provide: NG_VALIDATORS,
            multi: true,
            useExisting: forwardRef(() => SacStaticFormContainerComponent),
        },
    ],
})
export class SacStaticFormContainerComponent extends SacStaticFormContainerCommon {
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
