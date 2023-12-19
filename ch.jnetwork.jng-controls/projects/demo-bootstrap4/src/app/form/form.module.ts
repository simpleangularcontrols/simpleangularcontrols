import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  SACBootstrap4ButtonModule,
  SACBootstrap4FormModule,
  SACBootstrap4InputModule,
  SACBootstrap4ValidationSummaryModule,
} from '@simpleangularcontrols/sac-bootstrap4';
import { FormRoutingModule } from './form-routing.module';
import { DemoFormComponent } from './form.component';
import { DemoSubFormComponent } from './subform.component';
@NgModule({
  declarations: [
    DemoFormComponent,
    DemoSubFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    FormRoutingModule,
    SACBootstrap4FormModule,
    SACBootstrap4InputModule,
    SACBootstrap4ValidationSummaryModule,
    SACBootstrap4ButtonModule,
  ],
})
export class FormModule {}
