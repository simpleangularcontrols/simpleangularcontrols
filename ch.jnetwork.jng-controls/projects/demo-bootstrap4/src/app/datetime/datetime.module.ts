import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  SACBootstrap4FormModule,
  SACBootstrap4DateTimeModule,
  SACBootstrap4ButtonModule,
  SACBootstrap4ValidationSummaryModule,
} from '@jnetwork/sac-bootstrap4';
import { DatetimeRoutingModule } from './datetime-routing.module';
import { DemoDatetimeComponent } from './datetime.component';
@NgModule({
  declarations: [DemoDatetimeComponent],
  imports: [
    CommonModule,
    FormsModule,
    DatetimeRoutingModule,
    SACBootstrap4FormModule,
    SACBootstrap4ButtonModule,
    SACBootstrap4ValidationSummaryModule,
    SACBootstrap4DateTimeModule,
  ],
})
export class DatetimeModule {}
