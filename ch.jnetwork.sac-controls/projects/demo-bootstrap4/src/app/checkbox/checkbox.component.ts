import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  SACBootstrap4ButtonModule,
  SACBootstrap4CheckboxModule,
  SACBootstrap4FormModule,
  SACBootstrap4StaticLabelModule,
  SACBootstrap4ValidationSummaryModule,
  SacFormDirective,
} from '@simpleangularcontrols/sac-bootstrap4';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  standalone: true,
  imports: [
    FormsModule,
    SACBootstrap4FormModule,
    SACBootstrap4ButtonModule,
    SACBootstrap4ValidationSummaryModule,
    SACBootstrap4CheckboxModule,
    SACBootstrap4StaticLabelModule,
  ],
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
