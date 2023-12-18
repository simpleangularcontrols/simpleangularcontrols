import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  SACBootstrap4ButtonModule,
  SACBootstrap4ConfirmModule,
  SACBootstrap4FormModule,
  SACBootstrap4ValidationSummaryModule,
} from '@jnetwork/sac-bootstrap4';
import { ConfirmRoutingModule } from './confirm-routing.module';
import { DemoConfirmComponent } from './confirm.component';
@NgModule({
  declarations: [DemoConfirmComponent],
  imports: [
    CommonModule,
    FormsModule,
    ConfirmRoutingModule,
    SACBootstrap4FormModule,
    SACBootstrap4ConfirmModule,
    SACBootstrap4ValidationSummaryModule,
    SACBootstrap4ButtonModule,
    SACBootstrap4ConfirmModule.forRoot(),
  ],
})
export class ConfirmModule {}
