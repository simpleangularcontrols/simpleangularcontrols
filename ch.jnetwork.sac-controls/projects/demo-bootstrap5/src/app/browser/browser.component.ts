import { Component } from '@angular/core';
import { SACBootstrap5BrowserModule } from '@simpleangularcontrols/sac-bootstrap5';

@Component({
    selector: 'app-browser',
    templateUrl: './browser.component.html',
    standalone: true,
    imports: [SACBootstrap5BrowserModule],
})
export class DemoBrowserComponent {
    // #region Public Methods

    /**
     * Executes the first demo browser action.
     */
    public debugAction1(): void {
        alert('Action 1');
    }

    // #endregion Public Methods
}
