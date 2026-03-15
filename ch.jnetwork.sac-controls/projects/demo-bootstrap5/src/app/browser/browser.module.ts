import { BrowserRoutingModule } from './browser-routing.module';
import { DemoBrowserComponent } from './browser.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
    SACBootstrap5BrowserModule,
    SACBootstrap5FormModule,
    SACBootstrap5ValidationSummaryModule,
} from '@simpleangularcontrols/sac-bootstrap5';

@NgModule({
    declarations: [DemoBrowserComponent],
    imports: [
        CommonModule,
        FormsModule,
        BrowserRoutingModule,
        SACBootstrap5FormModule,
        SACBootstrap5BrowserModule,
        SACBootstrap5ValidationSummaryModule,
    ],
})
export class BrowserModule {}
