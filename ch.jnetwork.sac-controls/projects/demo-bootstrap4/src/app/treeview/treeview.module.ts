import { TreeviewRoutingModule } from './treeview-routing.module';
import { DemoTreeviewComponent } from './treeview.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
    SACBootstrap4ButtonModule,
    SACBootstrap4FormModule,
    SACBootstrap4TreeviewModule,
    SACBootstrap4ValidationSummaryModule,
} from '@simpleangularcontrols/sac-bootstrap4';

@NgModule({
    declarations: [DemoTreeviewComponent],
    imports: [
        CommonModule,
        FormsModule,
        TreeviewRoutingModule,
        SACBootstrap4FormModule,
        SACBootstrap4ButtonModule,
        SACBootstrap4ValidationSummaryModule,
        SACBootstrap4TreeviewModule,
    ],
})
export class TreeviewModule {}
