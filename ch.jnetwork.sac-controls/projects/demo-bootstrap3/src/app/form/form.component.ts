import { Component } from '@angular/core';
import { DemoSubFormComponent } from './subform.component';
import { SACBootstrap3FormModule, SACBootstrap3ValidationSummaryModule, SACBootstrap3InputModule, SACBootstrap3ButtonModule } from '@simpleangularcontrols/sac-bootstrap3';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    standalone: true,
    imports: [
        FormsModule,
        SACBootstrap3FormModule,
        SACBootstrap3ValidationSummaryModule,
        SACBootstrap3InputModule,
        DemoSubFormComponent,
        SACBootstrap3ButtonModule,
    ],
})
export class DemoFormComponent {
  public model = { field1: '', field2: '' };

  public onAction(): void {
    alert(JSON.stringify(this.model));
  }
}
