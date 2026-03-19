import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SACBootstrap5ButtonModule, SACBootstrap5FormModule } from '@simpleangularcontrols/sac-bootstrap5';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    standalone: true,
    imports: [FormsModule, SACBootstrap5FormModule, SACBootstrap5ButtonModule],
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
