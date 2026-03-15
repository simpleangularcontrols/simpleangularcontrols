import { SacWizardItemComponent } from './wizarditem';
import { Component, ContentChildren, QueryList } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { SacWizardCommon, SacWizardItemCommon } from '@simpleangularcontrols/sac-common';

@Component({
    selector: 'sac-wizard',
    templateUrl: './wizard.html',
    // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
    providers: [{ provide: NG_VALUE_ACCESSOR, multi: true, useExisting: SacWizardComponent }],
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
