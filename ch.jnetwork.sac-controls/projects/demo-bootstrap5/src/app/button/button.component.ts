import { Component } from '@angular/core';
import { SACBootstrap5FormModule, SACBootstrap5ButtonModule } from '@simpleangularcontrols/sac-bootstrap5';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    standalone: true,
    imports: [
        FormsModule,
        SACBootstrap5FormModule,
        SACBootstrap5ButtonModule,
    ],
})
export class DemoButtonComponent {
  public debugAction1(): void {
    alert('Action 1');
  }
}
