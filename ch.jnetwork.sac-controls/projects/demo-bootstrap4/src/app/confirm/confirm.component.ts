import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SACBootstrap3ConfirmModule } from '@simpleangularcontrols/sac-bootstrap3';
import {
  SACBootstrap4ButtonModule,
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
    SACBootstrap3ConfirmModule,
  ],
})
export class DemoConfirmComponent {
  constructor(private confirmService: ServiceConfirm) {}
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
}
