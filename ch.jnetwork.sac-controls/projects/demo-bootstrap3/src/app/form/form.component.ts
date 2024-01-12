import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  SACBootstrap3ButtonModule,
  SACBootstrap3FormModule,
  SACBootstrap3InputModule,
  SACBootstrap3LayoutModule,
  SACBootstrap3ValidationSummaryModule,
} from '@simpleangularcontrols/sac-bootstrap3';
import { DemoSubFormComponent } from './subform.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  standalone: true,
  imports: [
    FormsModule,
    SACBootstrap3FormModule,
    SACBootstrap3ValidationSummaryModule,
    SACBootstrap3InputModule,
    SACBootstrap3LayoutModule,
    DemoSubFormComponent,
    SACBootstrap3ButtonModule,
  ],
})
export class DemoFormComponent {
  // #region Properties

  public model = { field1: '', field2: '' };

  // #endregion Properties

  // #region Public Methods

  public onAction(): void {
    alert(JSON.stringify(this.model));
  }

  // #endregion Public Methods
}
