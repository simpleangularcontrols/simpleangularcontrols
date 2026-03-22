import { Component } from '@angular/core';

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
})
export class DemoDialogComponent {
    // #region Properties

    public datevalue = new Date().getDate();
    public isvisible1 = false;
    public isvisible2 = false;

    // #endregion Properties

    // #region Public Methods

    /**
     * Hides the first dialog.
     */
    public hideVisibile1() {
        this.isvisible1 = false;
    }

    /**
     * Hides the second dialog.
     */
    public hideVisibile2() {
        this.isvisible2 = false;
    }

    /**
     * Shows the first dialog.
     */
    public showVisibile1(): void {
        this.isvisible1 = true;
    }

    /**
     * Shows the second dialog.
     */
    public showVisibile2(): void {
        this.isvisible2 = true;
    }

    // #endregion Public Methods
}
