import { DatetimeRoutingModule } from './datetime-routing.module';
import { DemoDatetimeComponent } from './datetime.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
    SACBootstrap5ButtonModule,
    SACBootstrap5DateTimeModule,
    SACBootstrap5FormModule,
    SACBootstrap5ValidationSummaryModule,
} from '@simpleangularcontrols/sac-bootstrap5';

@NgModule({
    declarations: [DemoDatetimeComponent],
    imports: [
        CommonModule,
        FormsModule,
        DatetimeRoutingModule,
        SACBootstrap5FormModule,
        SACBootstrap5ButtonModule,
        SACBootstrap5ValidationSummaryModule,
        SACBootstrap5DateTimeModule,
    ],
})
export class DatetimeModule {}
