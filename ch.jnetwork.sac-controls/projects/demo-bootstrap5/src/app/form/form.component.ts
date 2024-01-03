import { Component } from '@angular/core';
import { DemoSubFormComponent } from './subform.component';
import { SACBootstrap5FormModule, SACBootstrap5ValidationSummaryModule, SACBootstrap5InputModule, SACBootstrap5ButtonModule } from '@simpleangularcontrols/sac-bootstrap5';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    standalone: true,
    imports: [
        FormsModule,
        SACBootstrap5FormModule,
        SACBootstrap5ValidationSummaryModule,
        SACBootstrap5InputModule,
        DemoSubFormComponent,
        SACBootstrap5ButtonModule,
    ],
})
export class DemoFormComponent {
  public model = { field1: '', field2: '' };

  public onAction(): void {
    alert(JSON.stringify(this.model));
  }
}
