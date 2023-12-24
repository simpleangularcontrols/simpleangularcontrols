import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  SACBootstrap3FormModule,
  // SACBootstrap3BrowserModule,
  SACBootstrap3ValidationSummaryModule,
} from '@simpleangularcontrols/sac-bootstrap3';
import { BrowserRoutingModule } from './browser-routing.module';
import { DemoBrowserComponent } from './browser.component';
@NgModule({
  declarations: [DemoBrowserComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserRoutingModule,
    SACBootstrap3FormModule,
    // SACBootstrap3BrowserModule,
    SACBootstrap3ValidationSummaryModule,
  ],
})
export class BrowserModule {}
