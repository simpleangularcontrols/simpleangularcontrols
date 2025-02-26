import { Component } from '@angular/core';

@Component({
    selector: 'app-contextmenu',
    templateUrl: './contextmenu.component.html',
})
export class DemoContextmenuComponent {
    // #region Public Methods

    public debugAction1(): void {
        alert('Action 1');
    }

    // #endregion Public Methods
}
