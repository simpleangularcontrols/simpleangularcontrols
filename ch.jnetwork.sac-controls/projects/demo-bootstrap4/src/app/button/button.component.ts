import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SACBootstrap4ButtonModule, SACBootstrap4FormModule } from '@simpleangularcontrols/sac-bootstrap4';

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
