import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  SACBootstrap3ButtonModule,
  SACBootstrap3CheckboxModule,
  SACBootstrap3FormModule,
  SACBootstrap3StaticLabelModule,
  SACBootstrap3ValidationSummaryModule,
  SacFormDirective,
} from '@simpleangularcontrols/sac-bootstrap3';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  standalone: true,
  imports: [
    FormsModule,
    SACBootstrap3FormModule,
    SACBootstrap3ButtonModule,
    SACBootstrap3ValidationSummaryModule,
    SACBootstrap3CheckboxModule,
    SACBootstrap3StaticLabelModule,
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
