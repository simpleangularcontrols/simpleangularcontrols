import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  SACBootstrap4FormModule,
  SACBootstrap4BrowserModule,
  SACBootstrap4ValidationSummaryModule,
} from '@simpleangularcontrols/sac-bootstrap4';
import { BrowserRoutingModule } from './browser-routing.module';
import { DemoBrowserComponent } from './browser.component';
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
