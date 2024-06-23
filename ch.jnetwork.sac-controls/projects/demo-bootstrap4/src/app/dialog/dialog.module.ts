import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  SACBootstrap4ButtonModule,
  SACBootstrap4DialogModule,
  SACBootstrap4FormModule,
  SACBootstrap4ValidationSummaryModule
} from '@simpleangularcontrols/sac-bootstrap4';
import { DialogRoutingModule } from './dialog-routing.module';
import { DemoDialogComponent } from './dialog.component';
@NgModule({
  declarations: [DemoDialogComponent],
  imports: [
    CommonModule,
    FormsModule,
    DialogRoutingModule,
    SACBootstrap4FormModule,
    SACBootstrap4DialogModule,
    SACBootstrap4ValidationSummaryModule,
    SACBootstrap4ButtonModule,
    SACBootstrap4DialogModule,
  ],
})
export class DialogModule {}
