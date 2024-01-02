import { Component } from '@angular/core';
import { SACBootstrap3FormModule, SACBootstrap3ButtonModule, SACBootstrap3DialogModule } from '@simpleangularcontrols/sac-bootstrap3';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    standalone: true,
    imports: [
        FormsModule,
        SACBootstrap3FormModule,
        SACBootstrap3ButtonModule,
        SACBootstrap3DialogModule,
    ],
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
