import { Component } from '@angular/core';
import { DemoSubFormComponent } from './subform.component';
import { SACBootstrap4FormModule, SACBootstrap4ValidationSummaryModule, SACBootstrap4InputModule, SACBootstrap4ButtonModule } from '@simpleangularcontrols/sac-bootstrap4';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    standalone: true,
    imports: [
        FormsModule,
        SACBootstrap4FormModule,
        SACBootstrap4ValidationSummaryModule,
        SACBootstrap4InputModule,
        DemoSubFormComponent,
        SACBootstrap4ButtonModule,
    ],
})
export class DemoFormComponent {
  public model = { field1: '', field2: '' };

  public onAction(): void {
    alert(JSON.stringify(this.model));
  }
}
