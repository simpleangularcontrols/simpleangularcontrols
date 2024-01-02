import { Component } from '@angular/core';
import { ServiceConfirm, SACBootstrap3FormModule, SACBootstrap3ButtonModule } from '@simpleangularcontrols/sac-bootstrap3';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-confirm',
    templateUrl: './confirm.component.html',
    standalone: true,
    imports: [
        FormsModule,
        SACBootstrap3FormModule,
        SACBootstrap3ButtonModule,
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
