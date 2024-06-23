import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  SACBootstrap3ButtonModule,
  SACBootstrap3ConfirmModule,
  SACBootstrap3FormModule,
  SACBootstrap3ValidationSummaryModule,
} from '@simpleangularcontrols/sac-bootstrap3';
import { ConfirmRoutingModule } from './confirm-routing.module';
import { DemoConfirmComponent } from './confirm.component';
@NgModule({
  declarations: [DemoConfirmComponent],
  imports: [
    CommonModule,
    FormsModule,
    ConfirmRoutingModule,
    SACBootstrap3FormModule,
    SACBootstrap3ConfirmModule,
    SACBootstrap3ValidationSummaryModule,
    SACBootstrap3ButtonModule,
    SACBootstrap3ConfirmModule.forRoot(),
  ],
})
export class ConfirmModule {}
