import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  SACBootstrap5ButtonModule,
  SACBootstrap5FormModule,
  SACBootstrap5InputModule,
  SACBootstrap5StaticLabelModule,
  SACBootstrap5ValidationSummaryModule,
} from '@simpleangularcontrols/sac-bootstrap5';
import { InputRoutingModule } from './input-routing.module';
import { DemoInputComponent } from './input.component';
@NgModule({
  declarations: [DemoInputComponent],
  imports: [
    CommonModule,
    FormsModule,
    InputRoutingModule,
    SACBootstrap5FormModule,
    SACBootstrap5ButtonModule,
    SACBootstrap5ValidationSummaryModule,
    SACBootstrap5InputModule,
    SACBootstrap5StaticLabelModule,
  ],
})
export class InputModule {}
