import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SACBootstrap3ContextmenuModule, SACBootstrap3FormModule } from '@simpleangularcontrols/sac-bootstrap3';

@Component({
    selector: 'app-contextmenu',
    templateUrl: './contextmenu.component.html',
    standalone: true,
    imports: [FormsModule, SACBootstrap3ContextmenuModule, SACBootstrap3FormModule],
})
export class DemoContextmenuComponent {
    // #region Public Methods

    public debugAction1(): void {
        alert('Action 1');
    }

    // #endregion Public Methods
}
