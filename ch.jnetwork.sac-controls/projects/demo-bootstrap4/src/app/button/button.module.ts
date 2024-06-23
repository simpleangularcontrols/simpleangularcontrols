import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  SACBootstrap4FormModule,
  SACBootstrap4ButtonModule,
  SACBootstrap4ValidationSummaryModule,
} from '@simpleangularcontrols/sac-bootstrap4';
import { ButtonRoutingModule } from './button-routing.module';
import { DemoButtonComponent } from './button.component';
@NgModule({
  declarations: [DemoButtonComponent],
  imports: [
    CommonModule,
    FormsModule,
    ButtonRoutingModule,
    SACBootstrap4FormModule,
    SACBootstrap4ButtonModule,
    SACBootstrap4ValidationSummaryModule,
    SACBootstrap4ButtonModule,
  ],
})
export class ButtonModule {}
