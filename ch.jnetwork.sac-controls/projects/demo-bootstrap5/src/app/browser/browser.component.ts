import { Component } from '@angular/core';

@Component({
    selector: 'app-browser',
    templateUrl: './browser.component.html',
})
export class DemoBrowserComponent {
    // #region Public Methods

    public debugAction1(): void {
        alert('Action 1');
    }

    // #endregion Public Methods
}
