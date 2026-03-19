import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-contextmenu-repeat',
    templateUrl: './repeat.component.html',
})
export class RepeatComponent {
    // #region Properties

    @Input()
    public index = 0;
    @Input()
    public name = '';

    // #endregion Properties

    // #region Public Methods

    /**
     * Displays the given message as dialog.
     * @param message Message text to display.
     */
    public showdialog(message: string): void {
        alert(message);
    }

    // #endregion Public Methods
}
