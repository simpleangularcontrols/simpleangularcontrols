import { ListRoutingModule } from './list-routing.module';
import { DemoListComponent } from './list.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
    SACBootstrap5ButtonModule,
    SACBootstrap5DropdownModule,
    SACBootstrap5FormModule,
    SACBootstrap5ListModule,
    SACBootstrap5ValidationSummaryModule,
} from '@simpleangularcontrols/sac-bootstrap5';

@NgModule({
    declarations: [DemoListComponent],
    imports: [
        CommonModule,
        FormsModule,
        ListRoutingModule,
        SACBootstrap5FormModule,
        SACBootstrap5ButtonModule,
        SACBootstrap5ValidationSummaryModule,
        SACBootstrap5ListModule,
        SACBootstrap5DropdownModule,
    ],
})
export class ListModule {}
