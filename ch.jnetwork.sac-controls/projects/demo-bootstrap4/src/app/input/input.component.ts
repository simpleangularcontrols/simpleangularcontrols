import { Component, ViewChild } from '@angular/core';
import { SacFormDirective, SACBootstrap4FormModule, SACBootstrap4ButtonModule, SACBootstrap4ValidationSummaryModule, SACBootstrap4InputModule } from '@simpleangularcontrols/sac-bootstrap4';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    standalone: true,
    imports: [
        FormsModule,
        SACBootstrap4FormModule,
        SACBootstrap4ButtonModule,
        SACBootstrap4ValidationSummaryModule,
        SACBootstrap4InputModule,
    ],
})
export class DemoInputComponent {
  public values: any = {
    field1: '',
    field2: '',
    field3: '',
    field4: '',
    field5: '',
    field6: '',
    field7: '',
    fieldarea1: '',
    fieldarea2: '',
    fieldarea3: '',
    fieldarea4: '',
    fieldd1: 0,
    fieldd2: 0,
    fieldd3: 0,
    fieldi1: 0,
    fieldi2: 0,
    fieldi3: 0,
    fieldcurrency1: 0,
    fieldcurrency2: 0,
    fieldcurrency3: null,
    fieldemail1: '',
    fieldemail2: '',
    fieldemail3: '',
    fieldpassword1: '',
    fieldpassword2: '',
    fieldpassword3: '',
    fieldpassword4: '',
  };

  @ViewChild('myForm') myForm: SacFormDirective;

  public debugAction(): void {
    this.myForm.markAsTouched();
    alert('Action');
  }
}
