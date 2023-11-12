import { Component } from '@angular/core';
import { ServiceConfirm } from '@jnetwork/jngcontrols-bootstrap4';

@Component({
  selector: 'app-example-dialog',
  templateUrl: './dialog.html',
})
export class ExampleDialogComponent {
  isdialogvisible = false;
  isdialogvisible2 = false;
  hidedialog() {
    this.isdialogvisible = false;
  }
  showdialog() {
    this.isdialogvisible = true;
  }
  showdialog2() {
    this.isdialogvisible2 = true;
  }

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
