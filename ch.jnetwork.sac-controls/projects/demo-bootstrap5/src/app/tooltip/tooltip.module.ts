import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  SACBootstrap5ButtonModule,
  SACBootstrap5FormModule,
  SACBootstrap5TooltipModule,
  SACBootstrap5ValidationSummaryModule,
} from '@simpleangularcontrols/sac-bootstrap5';
import { TooltipRoutingModule } from './tooltip-routing.module';
import { DemoTooltipComponent } from './tooltip.component';
@NgModule({
  declarations: [DemoTooltipComponent],
  imports: [
    CommonModule,
    FormsModule,
    TooltipRoutingModule,
    SACBootstrap5FormModule,
    SACBootstrap5ButtonModule,
    SACBootstrap5ValidationSummaryModule,
    SACBootstrap5TooltipModule,
  ],
})
export class TooltipModule {}
