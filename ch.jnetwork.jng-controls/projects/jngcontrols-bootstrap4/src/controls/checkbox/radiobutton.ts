import { Component, Host } from '@angular/core';
import { NgRadiobuttonCommon } from '@jnetwork/jngcontrols-common';
import { NgRadiobuttonsComponent } from './radiobuttons';

/**
 * Radiobutton Komponente
 */
@Component({
  selector: 'ng-radiobutton,ngRadiobutton',
  templateUrl: './radiobutton.html',
})
export class NgRadiobuttonComponent extends NgRadiobuttonCommon {
  /**
   * Konstruktor
   * @param ngRadioButtons Radio Buttons Group Komponente
   */
  constructor(@Host() ngRadioButtons: NgRadiobuttonsComponent) {
    super(ngRadioButtons);
  }
}
