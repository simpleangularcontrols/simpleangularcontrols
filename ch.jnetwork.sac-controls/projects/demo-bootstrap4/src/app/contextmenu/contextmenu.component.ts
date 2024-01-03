import { Component } from '@angular/core';
import { SACBootstrap4FormModule, SACBootstrap4ContextmenuModule } from '@simpleangularcontrols/sac-bootstrap4';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-contextmenu',
    templateUrl: './contextmenu.component.html',
    standalone: true,
    imports: [
        FormsModule,
        SACBootstrap4FormModule,
        SACBootstrap4ContextmenuModule,
    ],
})
export class DemoContextmenuComponent {
  public debugAction1(): void {
    alert('Action 1');
  }
}
