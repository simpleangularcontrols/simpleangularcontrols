import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  SACBootstrap4ButtonModule,
  SACBootstrap4FormModule,
  SACBootstrap4InputModule,
  SACBootstrap4LayoutModule,
  SACBootstrap4ValidationSummaryModule,
} from '@simpleangularcontrols/sac-bootstrap4';
import { DemoSubFormComponent } from './subform.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  standalone: true,
  imports: [
    FormsModule,
    SACBootstrap4FormModule,
    SACBootstrap4ValidationSummaryModule,
    SACBootstrap4InputModule,
    SACBootstrap4LayoutModule,
    DemoSubFormComponent,
    SACBootstrap4ButtonModule,
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
