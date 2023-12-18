import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  SACBootstrap4FormModule,
  SACBootstrap4InputModule,
  SACBootstrap4ButtonModule,
  SACBootstrap4ValidationSummaryModule,
} from '@jnetwork/sac-bootstrap4';
import { InputRoutingModule } from './input-routing.module';
import { DemoInputComponent } from './input.component';
@NgModule({
  declarations: [DemoInputComponent],
  imports: [
    CommonModule,
    FormsModule,
    InputRoutingModule,
    SACBootstrap4FormModule,
    SACBootstrap4ButtonModule,
    SACBootstrap4ValidationSummaryModule,
    SACBootstrap4InputModule,
  ],
})
export class InputModule {}
