import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  SACBootstrap4ButtonModule,
  SACBootstrap4ConfirmModule,
  SACBootstrap4FormModule,
  SACBootstrap4ValidationSummaryModule,
} from '@simpleangularcontrols/sac-bootstrap4';
import { ConfirmRoutingModule } from './confirm-routing.module';
import { DemoConfirmComponent } from './confirm.component';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ConfirmRoutingModule,
        SACBootstrap4FormModule,
        SACBootstrap4ValidationSummaryModule,
        SACBootstrap4ButtonModule,
        SACBootstrap4ConfirmModule.forRoot(),
        DemoConfirmComponent,
    ],
})
export class ConfirmModule {}
