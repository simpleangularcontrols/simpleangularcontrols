import { Component } from '@angular/core';
import { SACBootstrap5FormModule, SACBootstrap5ContextmenuModule } from '@simpleangularcontrols/sac-bootstrap5';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-contextmenu',
    templateUrl: './contextmenu.component.html',
    standalone: true,
    imports: [
        FormsModule,
        SACBootstrap5FormModule,
        SACBootstrap5ContextmenuModule,
    ],
})
export class DemoContextmenuComponent {
  public debugAction1(): void {
    alert('Action 1');
  }
}
