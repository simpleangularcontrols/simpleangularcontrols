import { BrowserRoutingModule } from './browser-routing.module';
import { DemoBrowserComponent } from './browser.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
    SACBootstrap4BrowserModule,
    SACBootstrap4FormModule,
    SACBootstrap4ValidationSummaryModule,
} from '@simpleangularcontrols/sac-bootstrap4';

@NgModule({
    declarations: [DemoBrowserComponent],
    imports: [
        CommonModule,
        FormsModule,
        BrowserRoutingModule,
        SACBootstrap4FormModule,
        SACBootstrap4BrowserModule,
        SACBootstrap4ValidationSummaryModule,
    ],
})
export class BrowserModule {}
