import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  SACBootstrap4ButtonModule,
  SACBootstrap4ConfirmModule,
  SACBootstrap4FormModule,
  ServiceConfirm,
} from '@simpleangularcontrols/sac-bootstrap4';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  standalone: true,
  imports: [
    FormsModule,
    SACBootstrap4FormModule,
    SACBootstrap4ButtonModule,
    SACBootstrap4ConfirmModule,
  ],
})
export class DemoConfirmComponent {
  // #region Constructors

  constructor(private confirmService: ServiceConfirm) {}

  // #endregion Constructors

  // #region Public Methods

  public confirmExample(): void {
    this.confirmService
      .ConfirmMessage('Benutzer löschen', 'Soll der Benutzer gelöscht werden?')
      .subscribe((result) => {
        console.log('Action called');
        if (result === 'yes') {
          alert('True');
        } else {
          alert('False');
        }
      });
  }

  // #endregion Public Methods
}
