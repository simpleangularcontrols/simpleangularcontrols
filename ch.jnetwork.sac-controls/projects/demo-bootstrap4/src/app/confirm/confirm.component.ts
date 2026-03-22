import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
    SACBootstrap4ButtonModule,
    SACBootstrap4ConfirmModule,
    SACBootstrap4FormModule,
    ServiceConfirm,
} from '@simpleangularcontrols/sac-bootstrap4';
import { take } from 'rxjs/operators';

@Component({
    selector: 'app-confirm',
    templateUrl: './confirm.component.html',
    standalone: true,
    imports: [FormsModule, SACBootstrap4FormModule, SACBootstrap4ButtonModule, SACBootstrap4ConfirmModule],
})
export class DemoConfirmComponent {
    // #region Constructors

    /**
     * Creates the confirm demo component.
     * @param confirmService Service used to open confirm dialogs.
     */
    constructor(private confirmService: ServiceConfirm) {}

    // #endregion Constructors

    // #region Public Methods

    /**
     * Opens a confirmation dialog with default buttons.
     */
    public confirmExample(): void {
        this.confirmService.ConfirmMessage('Delete user', 'Do you want to delete the user?').subscribe((result) => {
            console.log('Action called');
            if (result === 'yes') {
                alert('True');
            } else {
                alert('False');
            }
        });
    }

    /**
     * Opens a confirmation dialog with custom buttons.
     */
    public confirmExample2(): void {
        this.confirmService
            .ConfirmMessage('Delete user', 'Do you want to delete the user?', [
                { key: 'ok', text: 'OK', role: 'primary' },
                { key: 'cancel', text: 'Cancel' },
            ])
            .pipe(take(1))
            .subscribe((result) => {
                console.log('Action called');
                if (result === 'ok') {
                    alert('True');
                } else {
                    alert('False');
                }
            });
    }

    // #endregion Public Methods
}
