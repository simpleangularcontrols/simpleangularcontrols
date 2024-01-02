import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  SACBootstrap5FormModule,
  SACBootstrap5DateTimeModule,
  SACBootstrap5ButtonModule,
  SACBootstrap5ValidationSummaryModule,
} from '@simpleangularcontrols/sac-bootstrap5';
import { DatetimeRoutingModule } from './datetime-routing.module';
import { DemoDatetimeComponent } from './datetime.component';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        DatetimeRoutingModule,
        SACBootstrap5FormModule,
        SACBootstrap5ButtonModule,
        SACBootstrap5ValidationSummaryModule,
        SACBootstrap5DateTimeModule,
        DemoDatetimeComponent,
    ],
})
export class DatetimeModule {}
