import { Component, ViewChild } from '@angular/core';
import {
  SacFormDirective,
  SACBootstrap5FormModule,
  SACBootstrap5ButtonModule,
  SACBootstrap5ValidationSummaryModule,
  SACBootstrap5InputModule,
  SACBootstrap5StaticLabelModule,
} from '@simpleangularcontrols/sac-bootstrap5';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  standalone: true,
  imports: [
    FormsModule,
    SACBootstrap5FormModule,
    SACBootstrap5ButtonModule,
    SACBootstrap5ValidationSummaryModule,
    SACBootstrap5InputModule,
    SACBootstrap5StaticLabelModule,
  ],
})
export class DemoInputComponent {
  // #region Properties

  @ViewChild('myForm') public myForm: SacFormDirective;

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

  // #endregion Properties

  // #region Public Methods

  public debugAction(): void {
    this.myForm.markAsTouched();
    alert('Action');
  }

  // #endregion Public Methods
}
