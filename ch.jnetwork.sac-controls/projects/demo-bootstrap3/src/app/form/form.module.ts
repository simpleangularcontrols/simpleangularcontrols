import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  SACBootstrap3ButtonModule,
  SACBootstrap3FormModule,
  SACBootstrap3InputModule,
  SACBootstrap3ValidationSummaryModule,
} from '@simpleangularcontrols/sac-bootstrap3';
import { FormRoutingModule } from './form-routing.module';
import { DemoFormComponent } from './form.component';
import { DemoSubFormComponent } from './subform.component';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        FormRoutingModule,
        SACBootstrap3FormModule,
        SACBootstrap3InputModule,
        SACBootstrap3ValidationSummaryModule,
        SACBootstrap3ButtonModule,
        DemoFormComponent, DemoSubFormComponent,
    ],
})
export class FormModule {}
