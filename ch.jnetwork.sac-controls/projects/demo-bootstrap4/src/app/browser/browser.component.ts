import { Component, ViewChild } from '@angular/core';
import { SacFormDirective, SACBootstrap4BrowserModule } from '@simpleangularcontrols/sac-bootstrap4';

@Component({
    selector: 'app-browser',
    templateUrl: './browser.component.html',
    standalone: true,
    imports: [SACBootstrap4BrowserModule],
})
export class DemoBrowserComponent {
  public debugAction1(): void {
    alert('Action 1');
  }
}
