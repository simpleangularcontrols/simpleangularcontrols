import { Component, Host } from '@angular/core';
import { SacRadiobuttonCommon } from '@simpleangularcontrols/sac-common';
import { SacRadiobuttonsComponent } from './radiobuttons';
import { NgIf, NgTemplateOutlet } from '@angular/common';

/**
 * Radiobutton Komponente
 */
@Component({
    selector: 'sac-radiobutton',
    templateUrl: './radiobutton.html',
    styleUrls: ['./radiobutton.scss'],
    standalone: true,
    imports: [NgIf, NgTemplateOutlet],
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
