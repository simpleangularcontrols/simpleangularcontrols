import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  JNetworkBootstrap4FormModule,
  JNetworkBootstrap4BrowserModule,
  JNetworkBootstrap4ValidationSummaryModule,
} from '@jnetwork/sac-bootstrap4';
import { BrowserRoutingModule } from './browser-routing.module';
import { DemoBrowserComponent } from './browser.component';
@NgModule({
  declarations: [DemoBrowserComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserRoutingModule,
    JNetworkBootstrap4FormModule,
    JNetworkBootstrap4BrowserModule,
    JNetworkBootstrap4ValidationSummaryModule,
  ],
})
export class BrowserModule {}
