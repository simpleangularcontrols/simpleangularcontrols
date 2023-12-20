import { Component, ContentChildren, QueryList } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  SacWizardCommon,
  SacWizardItemCommon,
} from '@simpleangularcontrols/sac-common';
import { SacWizardItemComponent } from './wizarditem';

/**
 * Wizard Komponente
 */
@Component({
  selector: 'sac-wizard',
  templateUrl: './wizard.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: SacWizardComponent },
  ],
})
export class SacWizardComponent extends SacWizardCommon {
  /**
   * Wizard Items
   */
  @ContentChildren(SacWizardItemComponent)
  _wizardItems: QueryList<SacWizardItemComponent>;

  /**
   * Gibt die Wizard Items zurück
   * @returns Collection von WizardItems
   */
  wizardItems(): QueryList<SacWizardItemCommon> {
    return this._wizardItems as QueryList<SacWizardItemCommon>;
  }
}
