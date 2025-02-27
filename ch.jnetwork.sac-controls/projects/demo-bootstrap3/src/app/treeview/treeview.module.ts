import { TreeviewRoutingModule } from './treeview-routing.module';
import { DemoTreeviewComponent } from './treeview.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
    SACBootstrap3ButtonModule,
    SACBootstrap3ContextmenuModule,
    SACBootstrap3FormModule,
    SACBootstrap3TreeviewModule,
    SACBootstrap3ValidationSummaryModule,
} from '@simpleangularcontrols/sac-bootstrap3';

@NgModule({
    declarations: [DemoTreeviewComponent],
    imports: [
        CommonModule,
        FormsModule,
        TreeviewRoutingModule,
        SACBootstrap3FormModule,
        SACBootstrap3ButtonModule,
        SACBootstrap3ValidationSummaryModule,
        SACBootstrap3TreeviewModule,
        SACBootstrap3ContextmenuModule,
    ],
})
export class TreeviewModule {}
