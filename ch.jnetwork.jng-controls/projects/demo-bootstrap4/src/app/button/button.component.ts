import { Component, ViewChild } from '@angular/core';
import { NgFormularDirective } from '@jnetwork/jngcontrols-bootstrap4';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class DemoButtonComponent {
  public debugAction1(): void {
    alert('Action 1');
  }
}
