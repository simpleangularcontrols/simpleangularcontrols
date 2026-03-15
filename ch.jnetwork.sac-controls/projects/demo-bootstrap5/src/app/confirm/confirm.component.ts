import { Component } from '@angular/core';
import { ServiceConfirm } from '@simpleangularcontrols/sac-bootstrap5';
import { take } from 'rxjs/operators';

@Component({
    selector: 'app-confirm',
    templateUrl: './confirm.component.html',
})
export class DemoConfirmComponent {
    // #region Constructors

    constructor(private confirmService: ServiceConfirm) {}

    // #endregion Constructors

    // #region Public Methods

    public confirmExample(): void {
        this.confirmService
            .ConfirmMessage('Delete user', 'Do you want to delete the user?')
            .subscribe((result) => {
                console.log('Action called');
                if (result === 'yes') {
                    alert('True');
                } else {
                    alert('False');
                }
            });
    }

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
