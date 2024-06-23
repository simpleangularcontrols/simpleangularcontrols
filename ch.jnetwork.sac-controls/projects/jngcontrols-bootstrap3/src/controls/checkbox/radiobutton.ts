import { Component, Host } from '@angular/core';
import { SacRadiobuttonCommon } from '@simpleangularcontrols/sac-common';
import { SacRadiobuttonsComponent } from './radiobuttons';

@Component({
  selector: 'sac-radiobutton',
  templateUrl: './radiobutton.html',
  styleUrls: ['./radiobutton.scss'],
})
export class SacRadiobuttonComponent extends SacRadiobuttonCommon {
  constructor(@Host() sacRadioButtons: SacRadiobuttonsComponent) {
    super(sacRadioButtons);
  }
}
