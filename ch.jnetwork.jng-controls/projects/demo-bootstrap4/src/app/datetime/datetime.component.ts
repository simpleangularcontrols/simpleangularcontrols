import { Component, ViewChild } from '@angular/core';
import { SacFormDirective } from '@simpleangularcontrols/sac-bootstrap4';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.component.html',
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
