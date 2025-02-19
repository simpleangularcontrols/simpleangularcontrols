import { SacFormLayoutDirective } from '../layout/formlayout.directive';
import { SacTooltipComponent } from '../tooltip/tooltip';
import { SacRadiobuttonsComponent } from './radiobuttons';
import { NgClass, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, Host, Injector, Optional } from '@angular/core';
import { SacRadiobuttonCommon } from '@simpleangularcontrols/sac-common';

/**
 * Radiobutton Komponente
 */
@Component({
    selector: 'sac-radiobutton',
    templateUrl: './radiobutton.html',
    styleUrls: ['./radiobutton.scss'],
    standalone: true,
    imports: [NgIf, NgTemplateOutlet, SacTooltipComponent, NgClass],
})
export class SacRadiobuttonComponent extends SacRadiobuttonCommon {
    // #region Constructors

    /**
     * Konstruktor
     * @param SacRadioButtons Radio Buttons Group Komponente
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
