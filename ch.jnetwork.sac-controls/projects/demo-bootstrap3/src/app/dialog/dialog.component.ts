import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
    SACBootstrap3ButtonModule,
    SACBootstrap3DateTimeModule,
    SACBootstrap3DialogModule,
    SACBootstrap3FormModule,
} from '@simpleangularcontrols/sac-bootstrap3';

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    standalone: true,
    imports: [
        FormsModule,
        SACBootstrap3FormModule,
        SACBootstrap3ButtonModule,
        SACBootstrap3DialogModule,
        SACBootstrap3DateTimeModule,
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
