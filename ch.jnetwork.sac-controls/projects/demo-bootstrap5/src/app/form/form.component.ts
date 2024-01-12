import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  SACBootstrap5ButtonModule,
  SACBootstrap5FormModule,
  SACBootstrap5InputModule,
  SACBootstrap5LayoutModule,
  SACBootstrap5ValidationSummaryModule,
} from '@simpleangularcontrols/sac-bootstrap5';
import { DemoSubFormComponent } from './subform.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  standalone: true,
  imports: [
    FormsModule,
    SACBootstrap5FormModule,
    SACBootstrap5ValidationSummaryModule,
    SACBootstrap5InputModule,
    SACBootstrap5LayoutModule,
    DemoSubFormComponent,
    SACBootstrap5ButtonModule,
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
