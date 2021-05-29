import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  JNetworkBootstrap4FormModule,
  JNetworkBootstrap4DateTimeModule,
  JNetworkBootstrap4ButtonModule,
  JNetworkBootstrap4ValidationSummaryModule,
} from '@jnetwork/jngcontrols-bootstrap4';
import { DatetimeRoutingModule } from './datetime-routing.module';
import { DemoDatetimeComponent } from './datetime.component';
@NgModule({
  declarations: [DemoDatetimeComponent],
  imports: [
    CommonModule,
    FormsModule,
    DatetimeRoutingModule,
    JNetworkBootstrap4FormModule,
    JNetworkBootstrap4ButtonModule,
    JNetworkBootstrap4ValidationSummaryModule,
    JNetworkBootstrap4DateTimeModule,
  ],
})
export class DatetimeModule {}
