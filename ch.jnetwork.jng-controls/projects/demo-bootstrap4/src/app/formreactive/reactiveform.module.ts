import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  SACBootstrap4ButtonModule,
  SACBootstrap4InputModule,
  SACBootstrap4ValidationSummaryModule,
  SACBootstrap4CheckboxModule,
  SACBootstrap4DateTimeModule,
} from '@simpleangularcontrols/sac-bootstrap4';
import { ReactiveFormRoutingModule } from './reactiveform-routing.module';
import { DemoRectiveFormComponent } from './reactiveform.component';
@NgModule({
  declarations: [DemoRectiveFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveFormRoutingModule,
    SACBootstrap4InputModule,
    SACBootstrap4CheckboxModule,
    SACBootstrap4ValidationSummaryModule,
    SACBootstrap4ButtonModule,
    SACBootstrap4DateTimeModule
  ],
})
export class ReactiveFormModule {}
