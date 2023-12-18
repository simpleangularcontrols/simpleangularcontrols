import { Component, ContentChildren, QueryList } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  NgWizardCommon,
  NgWizardItemCommon,
} from '@jnetwork/sac-common';
import { NgWizardItemComponent } from './wizarditem';

/**
 * Wizard Komponente
 */
@Component({
  selector: 'sac-wizard',
  templateUrl: './wizard.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: NgWizardComponent },
  ],
})
export class NgWizardComponent extends NgWizardCommon {
  /**
   * Wizard Items
   */
  @ContentChildren(NgWizardItemComponent)
  _wizardItems: QueryList<NgWizardItemComponent>;

  /**
   * Gibt die Wizard Items zurück
   * @returns Collection von WizardItems
   */
  wizardItems(): QueryList<NgWizardItemCommon> {
    return this._wizardItems as QueryList<NgWizardItemCommon>;
  }
}
