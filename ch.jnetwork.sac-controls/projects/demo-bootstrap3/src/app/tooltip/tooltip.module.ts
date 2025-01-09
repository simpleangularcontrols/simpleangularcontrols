import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  SACBootstrap3ButtonModule,
  SACBootstrap3FormModule,
  SACBootstrap3TooltipModule,
  SACBootstrap3ValidationSummaryModule,
} from '@simpleangularcontrols/sac-bootstrap3';
import { TooltipRoutingModule } from './tooltip-routing.module';
import { DemoTooltipComponent } from './tooltip.component';
@NgModule({
  declarations: [DemoTooltipComponent],
  imports: [
    CommonModule,
    FormsModule,
    TooltipRoutingModule,
    SACBootstrap3FormModule,
    SACBootstrap3ButtonModule,
    SACBootstrap3ValidationSummaryModule,
    SACBootstrap3TooltipModule,
  ],
})
export class TooltipModule {}
