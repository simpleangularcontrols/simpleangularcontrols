import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  SACBootstrap5ButtonModule,
  SACBootstrap5FormModule,
  SACBootstrap5InputModule,
  SACBootstrap5LayoutModule,
  SACBootstrap5ValidationSummaryModule,
} from '@simpleangularcontrols/sac-bootstrap5';
import { FormRoutingModule } from './form-routing.module';
import { DemoFormComponent } from './form.component';
import { DemoSubFormComponent } from './subform.component';
@NgModule({
  declarations: [DemoFormComponent, DemoSubFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    FormRoutingModule,
    SACBootstrap5FormModule,
    SACBootstrap5InputModule,
    SACBootstrap5LayoutModule,
    SACBootstrap5ValidationSummaryModule,
    SACBootstrap5ButtonModule,
  ],
})
export class FormModule {}
