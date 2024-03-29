import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  SACBootstrap3ButtonModule,
  SACBootstrap3CheckboxModule,
  SACBootstrap3FormModule,
  SACBootstrap3StaticLabelModule,
  SACBootstrap3ValidationSummaryModule,
} from '@simpleangularcontrols/sac-bootstrap3';
import { CheckboxRoutingModule } from './checkbox-routing.module';
import { DemoCheckboxComponent } from './checkbox.component';
@NgModule({
  declarations: [DemoCheckboxComponent],
  imports: [
    CommonModule,
    FormsModule,
    CheckboxRoutingModule,
    SACBootstrap3FormModule,
    SACBootstrap3ButtonModule,
    SACBootstrap3ValidationSummaryModule,
    SACBootstrap3CheckboxModule,
    SACBootstrap3StaticLabelModule,
  ],
})
export class CheckboxModule {}
