import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputRoutingModule } from './input-routing.module';
import { DemoInputComponent } from './input.component';
import {
  SACBootstrap3FormModule,
  SACBootstrap3InputModule,
  SACBootstrap3ButtonModule,
  SACBootstrap3ValidationSummaryModule,
} from '@simpleangularcontrols/sac-bootstrap3';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        InputRoutingModule,
        SACBootstrap3FormModule,
        SACBootstrap3ButtonModule,
        SACBootstrap3ValidationSummaryModule,
        SACBootstrap3InputModule,
        DemoInputComponent,
    ],
})
export class InputModule {}
