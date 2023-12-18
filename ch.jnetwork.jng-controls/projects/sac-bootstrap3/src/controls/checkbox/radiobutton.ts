import { Component, Host } from '@angular/core';
import { SacRadiobuttonCommon } from '@jnetwork/sac-common';
import { SacRadiobuttonsComponent } from './radiobuttons';


@Component({
  selector: 'sac-radiobutton',
  templateUrl: './radiobutton.html',
})
export class SacRadiobuttonComponent extends SacRadiobuttonCommon {

  constructor(@Host() sacRadioButtons: SacRadiobuttonsComponent) {
    super(sacRadioButtons);
  }

}
