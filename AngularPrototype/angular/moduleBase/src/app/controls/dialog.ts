import { Component } from "@angular/core";
import { ServiceConfirm } from "@jnetwork/jngcontrols-bootstrap4";

@Component({
  selector: "ngExampleDialog",
  templateUrl: "./dialog.html",
})
export class ExampleDialog {
  constructor(private confirmService: ServiceConfirm) {}

  public confirmExample(): void {
    this.confirmService
      .ConfirmMessage("Benutzer löschen", "Soll der Benutzer gelöscht werden?")
      .subscribe((result) => {
        console.log("Action called");
        if (result === "yes") alert("True");
        else alert("False");
      });
  }

  public isdialogvisible = false;

  public showdialog() {
    this.isdialogvisible = true;
  }
  public hidedialog() {
    this.isdialogvisible = false;
  }

  public isdialogvisible2 = false;

  public showdialog2() {
    this.isdialogvisible2 = true;
  }
  public hidedialog2() {
    this.isdialogvisible2 = false;
  }
}
