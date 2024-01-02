import { Component, Host } from '@angular/core';
import { SacRadiobuttonCommon } from '@simpleangularcontrols/sac-common';
import { SacRadiobuttonsComponent } from './radiobuttons';
import { NgIf, NgTemplateOutlet } from '@angular/common';


@Component({
    selector: 'sac-radiobutton',
    templateUrl: './radiobutton.html',
    standalone: true,
    imports: [NgIf, NgTemplateOutlet],
})
export class SacRadiobuttonComponent extends SacRadiobuttonCommon {

  constructor(@Host() sacRadioButtons: SacRadiobuttonsComponent) {
    super(sacRadioButtons);
  }

}
