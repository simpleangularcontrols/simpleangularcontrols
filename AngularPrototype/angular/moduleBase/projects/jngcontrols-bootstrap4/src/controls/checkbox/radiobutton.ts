import { Component, Host } from '@angular/core';
import { NgRadiobuttonCommon } from '@jnetwork/jngcontrols-common';
import { NgRadiobuttons } from './radiobuttons';

@Component({
  selector: 'ngRadiobutton',
  templateUrl: './radiobutton.html',
})
export class NgRadiobutton extends NgRadiobuttonCommon {

  constructor(@Host() ngRadioButtons: NgRadiobuttons) {
    super(ngRadioButtons);
  }

}
