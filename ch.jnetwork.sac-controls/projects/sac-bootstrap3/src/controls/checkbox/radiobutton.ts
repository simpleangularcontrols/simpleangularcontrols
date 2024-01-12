import { NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, Host } from '@angular/core';
import { SacRadiobuttonCommon } from '@simpleangularcontrols/sac-common';
import { SacRadiobuttonsComponent } from './radiobuttons';

@Component({
  selector: 'sac-radiobutton',
  templateUrl: './radiobutton.html',
  standalone: true,
  imports: [NgIf, NgTemplateOutlet],
})
export class SacRadiobuttonComponent extends SacRadiobuttonCommon {
  // #region Constructors

  constructor(@Host() sacRadioButtons: SacRadiobuttonsComponent) {
    super(sacRadioButtons);
  }

  // #endregion Constructors
}
