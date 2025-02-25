import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
    SACBootstrap5ButtonModule,
    SACBootstrap5DateTimeModule,
    SACBootstrap5DialogModule,
    SACBootstrap5FormModule,
} from '@simpleangularcontrols/sac-bootstrap5';

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    standalone: true,
    imports: [
        FormsModule,
        SACBootstrap5FormModule,
        SACBootstrap5ButtonModule,
        SACBootstrap5DialogModule,
        SACBootstrap5DateTimeModule,
    ],
})
export class DemoDialogComponent {
    // #region Properties

    public datevalue = new Date().getDate();
    public isvisible1 = false;
    public isvisible2 = false;

    // #endregion Properties

    // #region Public Methods

    public hideVisibile1() {
        this.isvisible1 = false;
    }

    public hideVisibile2() {
        this.isvisible2 = false;
    }

    public showVisibile1(): void {
        this.isvisible1 = true;
    }

    public showVisibile2(): void {
        this.isvisible2 = true;
    }

    // #endregion Public Methods
}
