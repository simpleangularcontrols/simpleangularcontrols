import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  SACBootstrap5ButtonModule,
  SACBootstrap5InputModule,
  SACBootstrap5ValidationSummaryModule,
  SACBootstrap5CheckboxModule,
  SACBootstrap5DateTimeModule,
} from '@simpleangularcontrols/sac-bootstrap5';
import { ReactiveFormRoutingModule } from './reactiveform-routing.module';
import { DemoRectiveFormComponent } from './reactiveform.component';
@NgModule({
  declarations: [DemoRectiveFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveFormRoutingModule,
    SACBootstrap5InputModule,
    SACBootstrap5CheckboxModule,
    SACBootstrap5ValidationSummaryModule,
    SACBootstrap5ButtonModule,
    SACBootstrap5DateTimeModule
  ],
})
export class ReactiveFormModule {}
