import { Component } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
})
export class DemoDialogComponent {
  public isvisible1 = false;

  public showVisibile1(): void {
    this.isvisible1 = true;
  }

  public hideVisibile1() {
    this.isvisible1 = false;
  }

  public isvisible2 = false;

  public showVisibile2(): void {
    this.isvisible2 = true;
  }

  public hideVisibile2() {
    this.isvisible2 = false;
  }
}
