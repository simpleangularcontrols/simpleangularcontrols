import { Component, Host } from '@angular/core';
import { SacRadiobuttonCommon } from '@simpleangularcontrols/sac-common';
import { SacRadiobuttonsComponent } from './radiobuttons';

/**
 * Radiobutton Komponente
 */
@Component({
  selector: 'sac-radiobutton',
  templateUrl: './radiobutton.html',
})
export class SacRadiobuttonComponent extends SacRadiobuttonCommon {
  /**
   * Konstruktor
   * @param SacRadioButtons Radio Buttons Group Komponente
   */
  constructor(@Host() sacRadioButtons: SacRadiobuttonsComponent) {
    super(sacRadioButtons);
  }
}
