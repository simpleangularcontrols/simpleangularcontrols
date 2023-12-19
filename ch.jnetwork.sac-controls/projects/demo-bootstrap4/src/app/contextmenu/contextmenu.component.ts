import { Component } from '@angular/core';

@Component({
  selector: 'app-contextmenu',
  templateUrl: './contextmenu.component.html',
})
export class DemoContextmenuComponent {
  public debugAction1(): void {
    alert('Action 1');
  }
}
