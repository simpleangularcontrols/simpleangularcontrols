import { NgIf } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
    SACBootstrap4ButtonModule,
    SACBootstrap4DateTimeModule,
    SACBootstrap4FormModule,
    SACBootstrap4ValidationSummaryModule,
    SacFormDirective,
} from '@simpleangularcontrols/sac-bootstrap4';

@Component({
    selector: 'app-datetime',
    templateUrl: './datetime.component.html',
    standalone: true,
    imports: [
        FormsModule,
        SACBootstrap4FormModule,
        SACBootstrap4ButtonModule,
        SACBootstrap4ValidationSummaryModule,
        SACBootstrap4DateTimeModule,
        NgIf,
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
        datumzeit7: '2024-11-18T07:54:28.870Z',
        datumzeit7visible: true,
    };

    // #endregion Properties

    // #region Public Methods

    public debugAction(): void {
        this.myForm.markAsTouched();
        alert('Action');
    }

    public hideDatumzeit7(): void {
        this.values.datumzeit7visible = false;
    }

    // #endregion Public Methods
}
