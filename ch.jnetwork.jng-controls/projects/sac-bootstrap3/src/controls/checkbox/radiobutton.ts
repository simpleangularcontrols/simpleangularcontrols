import { Component, Host } from '@angular/core';
import { NgRadiobuttonCommon } from '@jnetwork/jngcontrols-common';
import { NgRadiobuttonsComponent } from './radiobuttons';


@Component({
  selector: 'sac-radiobutton',
  templateUrl: './radiobutton.html',
})
export class NgRadiobuttonComponent extends NgRadiobuttonCommon {

  constructor(@Host() ngRadioButtons: NgRadiobuttonsComponent) {
    super(ngRadioButtons);
  }

}
