import { TreeviewRoutingModule } from './treeview-routing.module';
import { DemoTreeviewComponent } from './treeview.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
    SACBootstrap5ButtonModule,
    SACBootstrap5ContextmenuModule,
    SACBootstrap5FormModule,
    SACBootstrap5TreeviewModule,
    SACBootstrap5ValidationSummaryModule,
} from '@simpleangularcontrols/sac-bootstrap5';

@NgModule({
    declarations: [DemoTreeviewComponent],
    imports: [
        CommonModule,
        FormsModule,
        TreeviewRoutingModule,
        SACBootstrap5FormModule,
        SACBootstrap5ButtonModule,
        SACBootstrap5ValidationSummaryModule,
        SACBootstrap5TreeviewModule,
        SACBootstrap5ContextmenuModule,
    ],
})
export class TreeviewModule {}
