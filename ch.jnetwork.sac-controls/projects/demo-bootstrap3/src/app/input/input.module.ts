import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  SACBootstrap3ButtonModule,
  SACBootstrap3FormModule,
  SACBootstrap3InputModule,
  SACBootstrap3StaticLabelModule,
  SACBootstrap3ValidationSummaryModule,
} from '@simpleangularcontrols/sac-bootstrap3';
import { InputRoutingModule } from './input-routing.module';
import { DemoInputComponent } from './input.component';

@NgModule({
  declarations: [DemoInputComponent],
  imports: [
    CommonModule,
    FormsModule,
    InputRoutingModule,
    SACBootstrap3FormModule,
    SACBootstrap3ButtonModule,
    SACBootstrap3ValidationSummaryModule,
    SACBootstrap3InputModule,
    SACBootstrap3StaticLabelModule,
  ],
})
export class InputModule {}
