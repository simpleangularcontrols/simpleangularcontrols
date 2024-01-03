import { Component } from '@angular/core';
import { SACBootstrap3FormModule, SACBootstrap3ButtonModule } from '@simpleangularcontrols/sac-bootstrap3';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    standalone: true,
    imports: [
        FormsModule,
        SACBootstrap3FormModule,
        SACBootstrap3ButtonModule,
    ],
})
export class DemoButtonComponent {
  public debugAction1(): void {
    alert('Action 1');
  }
}
