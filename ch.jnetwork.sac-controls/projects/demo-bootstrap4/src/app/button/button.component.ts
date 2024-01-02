import { Component, ViewChild } from '@angular/core';
import { SacFormDirective, SACBootstrap4FormModule, SACBootstrap4ButtonModule } from '@simpleangularcontrols/sac-bootstrap4';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    standalone: true,
    imports: [
        FormsModule,
        SACBootstrap4FormModule,
        SACBootstrap4ButtonModule,
    ],
})
export class DemoButtonComponent {
  public debugAction1(): void {
    alert('Action 1');
  }
}
