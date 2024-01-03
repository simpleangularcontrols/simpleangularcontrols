import { Component, ViewChild } from '@angular/core';
import { SacFormDirective, SACBootstrap5BrowserModule } from '@simpleangularcontrols/sac-bootstrap5';

@Component({
    selector: 'app-browser',
    templateUrl: './browser.component.html',
    standalone: true,
    imports: [SACBootstrap5BrowserModule],
})
export class DemoBrowserComponent {
  public debugAction1(): void {
    alert('Action 1');
  }
}
