import { Component, ViewChild } from '@angular/core';
import { SacFormDirective } from '@jnetwork/sac-bootstrap4';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
})
export class DemoCheckboxComponent {
  public values: any = {
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false,
    radiobuttons1: '1',
    radiobuttons2: '2',
  };

  @ViewChild('myForm') myForm: SacFormDirective;

  public debugAction(): void {
    this.myForm.markAsTouched();
    alert('Action');
  }
}
