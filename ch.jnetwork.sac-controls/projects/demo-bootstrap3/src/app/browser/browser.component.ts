import { Component } from '@angular/core';

@Component({
    selector: 'app-browser',
    templateUrl: './browser.component.html',
    standalone: true,
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
