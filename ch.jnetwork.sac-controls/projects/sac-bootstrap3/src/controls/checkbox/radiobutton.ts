import { SacFormLayoutDirective } from '../layout/formlayout.directive';
import { SacRadiobuttonsComponent } from './radiobuttons';
import { Component, Host, Injector, Optional } from '@angular/core';
import { SacRadiobuttonCommon } from '@simpleangularcontrols/sac-common';

@Component({
    selector: 'sac-radiobutton',
    templateUrl: './radiobutton.html',
    styleUrls: ['./radiobutton.scss'],
})
export class SacRadiobuttonComponent extends SacRadiobuttonCommon {
    // #region Constructors

    /**
     * Constructor
     * @param sacRadioButtons Radio buttons group component
     * @param formLayout SacFormLayoutCommon to define scoped layout settings
     * @param injector Injector for injecting services
     */
    constructor(
        @Host() sacRadioButtons: SacRadiobuttonsComponent,
        @Host() @Optional() formLayout: SacFormLayoutDirective,
        injector: Injector
    ) {
        super(sacRadioButtons, formLayout, injector);
    }

    // #endregion Constructors
}
