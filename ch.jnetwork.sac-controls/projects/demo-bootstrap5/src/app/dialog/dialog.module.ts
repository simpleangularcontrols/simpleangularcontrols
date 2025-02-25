import { DialogRoutingModule } from './dialog-routing.module';
import { DemoDialogComponent } from './dialog.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
    SACBootstrap5ButtonModule,
    SACBootstrap5DateTimeModule,
    SACBootstrap5DialogModule,
    SACBootstrap5FormModule,
    SACBootstrap5ValidationSummaryModule,
} from '@simpleangularcontrols/sac-bootstrap5';

@NgModule({
    declarations: [DemoDialogComponent],
    imports: [
        CommonModule,
        FormsModule,
        DialogRoutingModule,
        SACBootstrap5FormModule,
        SACBootstrap5DialogModule,
        SACBootstrap5DateTimeModule,
        SACBootstrap5ValidationSummaryModule,
        SACBootstrap5ButtonModule,
        SACBootstrap5DialogModule,
    ],
})
export class DialogModule {}
