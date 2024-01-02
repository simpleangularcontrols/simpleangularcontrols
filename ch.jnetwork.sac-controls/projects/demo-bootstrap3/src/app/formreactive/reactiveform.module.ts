import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  SACBootstrap3ButtonModule,
  SACBootstrap3InputModule,
  SACBootstrap3ValidationSummaryModule,
  SACBootstrap3CheckboxModule,
  SACBootstrap3DateTimeModule,
} from '@simpleangularcontrols/sac-bootstrap3';
import { ReactiveFormRoutingModule } from './reactiveform-routing.module';
import { DemoRectiveFormComponent } from './reactiveform.component';
@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ReactiveFormRoutingModule,
        SACBootstrap3InputModule,
        SACBootstrap3CheckboxModule,
        SACBootstrap3ValidationSummaryModule,
        SACBootstrap3ButtonModule,
        SACBootstrap3DateTimeModule,
        DemoRectiveFormComponent,
    ],
})
export class ReactiveFormModule {}
