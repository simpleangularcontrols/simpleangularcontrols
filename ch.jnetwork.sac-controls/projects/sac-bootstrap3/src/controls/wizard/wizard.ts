import { SacWizardItemComponent } from './wizarditem';
import { NgClass, NgFor, NgStyle } from '@angular/common';
import { Component, ContentChildren, QueryList } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { SacWizardCommon, SacWizardItemCommon } from '@simpleangularcontrols/sac-common';

@Component({
    selector: 'sac-wizard',
    templateUrl: './wizard.html',
    // Register value access provider so that value can be written and read via model
    providers: [{ provide: NG_VALUE_ACCESSOR, multi: true, useExisting: SacWizardComponent }],
    standalone: true,
    imports: [NgFor, NgClass, NgStyle],
})
export class SacWizardComponent extends SacWizardCommon {
    // #region Properties

    @ContentChildren(SacWizardItemComponent)
    public _wizardItems: QueryList<SacWizardItemComponent>;

    // #endregion Properties

    // #region Public Methods

    public wizardItems(): QueryList<SacWizardItemCommon> {
        return this._wizardItems as QueryList<SacWizardItemCommon>;
    }

    // #endregion Public Methods
}
