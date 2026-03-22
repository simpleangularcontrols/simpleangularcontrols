import { Component } from '@angular/core';
import { SacWizardItemCommon } from '@simpleangularcontrols/sac-common';

/**
 * Bootstrap 3 wizard step component, representing one item in a multi-step wizard flow.
 */
@Component({
    selector: 'sac-wizarditem',
    templateUrl: './wizarditem.html',
    standalone: true,
})
export class SacWizardItemComponent extends SacWizardItemCommon {}
