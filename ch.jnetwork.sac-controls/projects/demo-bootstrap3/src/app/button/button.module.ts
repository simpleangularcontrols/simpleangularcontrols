import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  SACBootstrap3FormModule,
  SACBootstrap3ButtonModule,
  SACBootstrap3ValidationSummaryModule,
} from '@simpleangularcontrols/sac-bootstrap3';
import { ButtonRoutingModule } from './button-routing.module';
import { DemoButtonComponent } from './button.component';
@NgModule({
  declarations: [DemoButtonComponent],
  imports: [
    CommonModule,
    FormsModule,
    ButtonRoutingModule,
    SACBootstrap3FormModule,
    SACBootstrap3ButtonModule,
    SACBootstrap3ValidationSummaryModule,
  ],
})
export class ButtonModule {}
