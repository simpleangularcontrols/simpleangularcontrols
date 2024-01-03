import { Component, ViewChild } from '@angular/core';
import { SacFormDirective, SACBootstrap3FormModule, SACBootstrap3ButtonModule, SACBootstrap3ValidationSummaryModule, SACBootstrap3DateTimeModule } from '@simpleangularcontrols/sac-bootstrap3';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-datetime',
    templateUrl: './datetime.component.html',
    standalone: true,
    imports: [
        FormsModule,
        SACBootstrap3FormModule,
        SACBootstrap3ButtonModule,
        SACBootstrap3ValidationSummaryModule,
        SACBootstrap3DateTimeModule,
    ],
})
export class DemoDatetimeComponent {
  public values: any = {
    datum1: '',
    datum2: Date.now(),
    datum3: '',
    datum4: '',
    datum5: '',
    time1: '',
    time2: '',
    time3: '',
    time4: '',
    time5: Date.now(),
    time6: '',
    datumzeit1: Date.now(),
    datumzeit2: '',
    datumzeit3: '',
    datumzeit4: '',
    datumzeit5: '',
  };

  @ViewChild('myForm') myForm: SacFormDirective;

  public debugAction(): void {
    this.myForm.markAsTouched();
    alert('Action');
  }
}
