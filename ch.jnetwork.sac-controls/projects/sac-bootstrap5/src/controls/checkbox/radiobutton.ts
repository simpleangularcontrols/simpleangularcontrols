import { SacFormLayoutDirective } from '../layout/formlayout.directive';
import { SacTooltipComponent } from '../tooltip/tooltip';
import { SacRadiobuttonsComponent } from './radiobuttons';
import { NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, Host, Injector, Optional } from '@angular/core';
import { SacRadiobuttonCommon } from '@simpleangularcontrols/sac-common';

/**
 * Radiobutton component
 */
@Component({
    selector: 'sac-radiobutton',
    templateUrl: './radiobutton.html',
    styleUrls: ['./radiobutton.scss'],
    standalone: true,
    imports: [NgIf, NgTemplateOutlet, SacTooltipComponent],
})
export class SacRadiobuttonComponent extends SacRadiobuttonCommon {
    // #region Constructors

    /**
     * Constructor
     * @param SacRadioButtons Radio buttons group component
     * @param formlayout SacFormLayoutCommon to define scoped layout settings
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
