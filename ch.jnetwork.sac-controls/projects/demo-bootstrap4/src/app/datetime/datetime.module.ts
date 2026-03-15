import { DatetimeRoutingModule } from './datetime-routing.module';
import { DemoDatetimeComponent } from './datetime.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
    SACBootstrap4ButtonModule,
    SACBootstrap4DateTimeModule,
    SACBootstrap4FormModule,
    SACBootstrap4ValidationSummaryModule,
} from '@simpleangularcontrols/sac-bootstrap4';

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
