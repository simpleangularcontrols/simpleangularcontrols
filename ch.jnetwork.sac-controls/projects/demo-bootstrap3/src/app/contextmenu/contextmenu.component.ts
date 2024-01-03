import { Component } from '@angular/core';
import { SACBootstrap3FormModule } from '@simpleangularcontrols/sac-bootstrap3';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-contextmenu',
    templateUrl: './contextmenu.component.html',
    standalone: true,
    imports: [FormsModule, SACBootstrap3FormModule],
})
export class DemoContextmenuComponent {
  public debugAction1(): void {
    alert('Action 1');
  }
}
