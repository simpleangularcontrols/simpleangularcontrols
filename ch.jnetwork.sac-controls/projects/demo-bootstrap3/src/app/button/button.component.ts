import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class DemoButtonComponent {
  public debugAction1(): void {
    alert('Action 1');
  }
}
