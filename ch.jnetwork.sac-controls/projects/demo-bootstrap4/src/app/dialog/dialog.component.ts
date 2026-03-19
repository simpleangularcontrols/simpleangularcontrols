import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
    SACBootstrap4ButtonModule,
    SACBootstrap4DateTimeModule,
    SACBootstrap4DialogModule,
    SACBootstrap4FormModule,
} from '@simpleangularcontrols/sac-bootstrap4';

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    standalone: true,
    imports: [
        FormsModule,
        SACBootstrap4FormModule,
        SACBootstrap4ButtonModule,
        SACBootstrap4DialogModule,
        SACBootstrap4DateTimeModule,
    ],
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
