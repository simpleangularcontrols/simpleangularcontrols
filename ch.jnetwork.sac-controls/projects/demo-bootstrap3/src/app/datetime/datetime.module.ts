import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  SACBootstrap3FormModule,
  SACBootstrap3DateTimeModule,
  SACBootstrap3ButtonModule,
  SACBootstrap3ValidationSummaryModule,
} from '@simpleangularcontrols/sac-bootstrap3';
import { DatetimeRoutingModule } from './datetime-routing.module';
import { DemoDatetimeComponent } from './datetime.component';
@NgModule({
  declarations: [DemoDatetimeComponent],
  imports: [
    CommonModule,
    FormsModule,
    DatetimeRoutingModule,
    SACBootstrap3FormModule,
    SACBootstrap3ButtonModule,
    SACBootstrap3ValidationSummaryModule,
    SACBootstrap3DateTimeModule,
  ],
})
export class DatetimeModule {}
