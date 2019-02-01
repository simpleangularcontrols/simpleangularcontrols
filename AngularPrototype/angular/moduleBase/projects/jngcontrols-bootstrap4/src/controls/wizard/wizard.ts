import { Component, ContentChildren, QueryList } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgWizardItem } from './wizarditem';
import { NgWizardCommon, NgWizardItemCommon } from '@jnetwork/jngcontrols-common';

@Component({
  selector: 'ngWizard',
  templateUrl: './wizard.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: NgWizard }
  ],
})

export class NgWizard extends NgWizardCommon {

  @ContentChildren(NgWizardItem)
  _wizardItems: QueryList<NgWizardItem>;

  wizardItems(): QueryList<NgWizardItemCommon> {
    return this._wizardItems as QueryList<NgWizardItemCommon>;
  }

}
