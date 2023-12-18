import { Component, ContentChildren, QueryList } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgWizardItemComponent } from './wizarditem';
import { NgWizardCommon, NgWizardItemCommon } from '@jnetwork/jngcontrols-common';

@Component({
  selector: 'sac-wizard',
  templateUrl: './wizard.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: NgWizardComponent }
  ],
})

export class NgWizardComponent extends NgWizardCommon {

  @ContentChildren(NgWizardItemComponent)
  _wizardItems: QueryList<NgWizardItemComponent>;

  wizardItems(): QueryList<NgWizardItemCommon> {
    return this._wizardItems as QueryList<NgWizardItemCommon>;
  }

}
