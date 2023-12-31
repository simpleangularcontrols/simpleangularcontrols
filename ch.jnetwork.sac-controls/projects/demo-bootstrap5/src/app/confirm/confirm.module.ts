import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  SACBootstrap5ButtonModule,
  SACBootstrap5ConfirmModule,
  SACBootstrap5FormModule,
  SACBootstrap5ValidationSummaryModule,
} from '@simpleangularcontrols/sac-bootstrap5';
import { ConfirmRoutingModule } from './confirm-routing.module';
import { DemoConfirmComponent } from './confirm.component';
@NgModule({
  declarations: [DemoConfirmComponent],
  imports: [
    CommonModule,
    FormsModule,
    ConfirmRoutingModule,
    SACBootstrap5FormModule,
    SACBootstrap5ValidationSummaryModule,
    SACBootstrap5ButtonModule,
    SACBootstrap5ConfirmModule.forRoot(),
  ],
})
export class ConfirmModule {}
