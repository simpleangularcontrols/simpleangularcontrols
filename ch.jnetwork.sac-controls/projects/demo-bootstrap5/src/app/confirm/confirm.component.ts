import { Component } from '@angular/core';
import { ServiceConfirm } from '@simpleangularcontrols/sac-bootstrap5';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
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
