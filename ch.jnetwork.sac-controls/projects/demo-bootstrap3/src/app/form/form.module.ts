import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  SACBootstrap3ButtonModule,
  SACBootstrap3FormModule,
  SACBootstrap3InputModule,
  SACBootstrap3LayoutModule,
  SACBootstrap3ValidationSummaryModule,
} from '@simpleangularcontrols/sac-bootstrap3';
import { FormRoutingModule } from './form-routing.module';
import { DemoFormComponent } from './form.component';
import { DemoSubFormComponent } from './subform.component';
@NgModule({
  declarations: [DemoFormComponent, DemoSubFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    FormRoutingModule,
    SACBootstrap3FormModule,
    SACBootstrap3InputModule,
    SACBootstrap3ValidationSummaryModule,
    SACBootstrap3LayoutModule,
    SACBootstrap3ButtonModule,
  ],
})
export class FormModule {}
