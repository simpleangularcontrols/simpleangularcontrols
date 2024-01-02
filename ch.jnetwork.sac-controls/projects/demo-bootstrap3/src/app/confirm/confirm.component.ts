import { Component } from '@angular/core';
import {
  ServiceConfirm,
  SACBootstrap3FormModule,
  SACBootstrap3ButtonModule,
  SACBootstrap3ConfirmModule,
} from '@simpleangularcontrols/sac-bootstrap3';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DemoConfirmComponent,
    SACBootstrap3FormModule,
    SACBootstrap3ConfirmModule,
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
