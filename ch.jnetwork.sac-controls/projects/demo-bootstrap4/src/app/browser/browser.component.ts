import { Component } from '@angular/core';
import { SACBootstrap4BrowserModule } from '@simpleangularcontrols/sac-bootstrap4';

@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  standalone: true,
  imports: [SACBootstrap4BrowserModule],
})
export class DemoBrowserComponent {
  // #region Public Methods

  public debugAction1(): void {
    alert('Action 1');
  }

  // #endregion Public Methods
}
