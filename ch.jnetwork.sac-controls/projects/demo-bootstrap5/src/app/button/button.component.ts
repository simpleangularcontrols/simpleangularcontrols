import { Component } from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
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
