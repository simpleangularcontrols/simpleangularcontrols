import { Component, ViewChild } from '@angular/core';
import { SacFormDirective } from '@simpleangularcontrols/sac-bootstrap3';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
})
export class DemoTooltipComponent {
  // #region Properties

  @ViewChild('myForm') public myForm: SacFormDirective;

  // #endregion Properties

  // #region Public Methods

  public debugAction(): void {
    this.myForm.markAsTouched();
    alert('Action');
  }

  // #endregion Public Methods
}
