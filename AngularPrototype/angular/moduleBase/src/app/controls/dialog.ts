import { Component } from "@angular/core";
import { ServiceConfirm } from "@jnetwork/jngcontrols-bootstrap3";

@Component({
  selector: 'ngExampleDialog',
  templateUrl: './dialog.html'
})
export class ExampleDialog {

  constructor(private confirmService: ServiceConfirm) {

  }

  public confirmExample(): void {
    this.confirmService.ConfirmMessage('Benutzer löschen','Soll der Benutzer gelöscht werden?').subscribe(result => {
      console.log('Action called');
      if (result === 'yes')
        alert('True');
      else
        alert('False');
    });
  }

}
