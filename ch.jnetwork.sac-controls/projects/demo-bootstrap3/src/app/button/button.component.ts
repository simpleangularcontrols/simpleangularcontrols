import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SACBootstrap3ButtonModule, SACBootstrap3FormModule } from '@simpleangularcontrols/sac-bootstrap3';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    standalone: true,
    imports: [FormsModule, SACBootstrap3FormModule, SACBootstrap3ButtonModule],
})
export class DemoButtonComponent {
    // #region Public Methods

    /**
     * Executes the first demo button action.
     */
    public debugAction1(): void {
        alert('Action 1');
    }

    // #endregion Public Methods
}
