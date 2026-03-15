import { ListRoutingModule } from './list-routing.module';
import { DemoListComponent } from './list.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
    SACBootstrap3ButtonModule,
    SACBootstrap3FormModule,
    SACBootstrap3ListModule,
    SACBootstrap3ValidationSummaryModule,
} from '@simpleangularcontrols/sac-bootstrap3';

@NgModule({
    declarations: [DemoListComponent],
    imports: [
        CommonModule,
        FormsModule,
        ListRoutingModule,
        SACBootstrap3FormModule,
        SACBootstrap3ButtonModule,
        SACBootstrap3ValidationSummaryModule,
        SACBootstrap3ListModule,
        // SACBootstrap3DropdownModule,
    ],
})
export class ListModule {}
