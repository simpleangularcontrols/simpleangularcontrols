import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  SACBootstrap4ButtonModule,
  SACBootstrap4FormModule,
  SACBootstrap4TooltipModule,
  SACBootstrap4ValidationSummaryModule,
} from '@simpleangularcontrols/sac-bootstrap4';
import { TooltipRoutingModule } from './tooltip-routing.module';
import { DemoTooltipComponent } from './tooltip.component';
@NgModule({
  declarations: [DemoTooltipComponent],
  imports: [
    CommonModule,
    FormsModule,
    TooltipRoutingModule,
    SACBootstrap4FormModule,
    SACBootstrap4ButtonModule,
    SACBootstrap4ValidationSummaryModule,
    SACBootstrap4TooltipModule,
  ],
})
export class TooltipModule {}
