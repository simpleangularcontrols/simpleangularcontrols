import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  SACBootstrap3ButtonModule,
  SACBootstrap3DialogModule,
  SACBootstrap3FormModule,
  SACBootstrap3ValidationSummaryModule
} from '@simpleangularcontrols/sac-bootstrap3';
import { DialogRoutingModule } from './dialog-routing.module';
import { DemoDialogComponent } from './dialog.component';
@NgModule({
  declarations: [DemoDialogComponent],
  imports: [
    CommonModule,
    FormsModule,
    DialogRoutingModule,
    SACBootstrap3FormModule,
    SACBootstrap3DialogModule,
    SACBootstrap3ValidationSummaryModule,
    SACBootstrap3ButtonModule,
    SACBootstrap3DialogModule,
  ],
})
export class DialogModule {}
