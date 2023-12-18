import { Component, ViewChild } from '@angular/core';
import { SacFormDirective } from '@jnetwork/sac-bootstrap4';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class DemoButtonComponent {
  public debugAction1(): void {
    alert('Action 1');
  }
}
