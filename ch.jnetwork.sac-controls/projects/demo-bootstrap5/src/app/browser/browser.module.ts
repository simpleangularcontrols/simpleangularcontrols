import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  SACBootstrap5FormModule,
  SACBootstrap5BrowserModule,
  SACBootstrap5ValidationSummaryModule,
} from '@simpleangularcontrols/sac-bootstrap5';
import { BrowserRoutingModule } from './browser-routing.module';
import { DemoBrowserComponent } from './browser.component';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        BrowserRoutingModule,
        SACBootstrap5FormModule,
        SACBootstrap5BrowserModule,
        SACBootstrap5ValidationSummaryModule,
        DemoBrowserComponent,
    ],
})
export class BrowserModule {}
