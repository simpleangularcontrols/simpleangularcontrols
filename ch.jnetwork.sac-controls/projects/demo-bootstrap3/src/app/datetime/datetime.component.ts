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
  // #region Properties

  @ViewChild('myForm') public myForm: SacFormDirective;

  public values: any = {
    datum1: '',
    datum2: new Date(Date.now()),
    datum3: '',
    datum4: '',
    datum5: '',
    time1: new Date(Date.now()),
    time2: '',
    time3: '',
    time4: '',
    time5: new Date(Date.now()),
    time6: '',
    datumzeit1: new Date(Date.now()),
    datumzeit2: '2024-11-22T17:10:00+01:00',
    datumzeit3: '',
    datumzeit4: '',
    datumzeit5: '',
    datumzeit6: '2024-11-18T07:54:28.870Z',
  };

  // #endregion Properties

  // #region Public Methods

  public debugAction(): void {
    this.myForm.markAsTouched();
    alert('Action');
  }

  // #endregion Public Methods
}
