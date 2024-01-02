import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  SACBootstrap5FormModule,
  SACBootstrap5ButtonModule,
  SACBootstrap5ValidationSummaryModule,
} from '@simpleangularcontrols/sac-bootstrap5';
import { ButtonRoutingModule } from './button-routing.module';
import { DemoButtonComponent } from './button.component';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ButtonRoutingModule,
        SACBootstrap5FormModule,
        SACBootstrap5ButtonModule,
        SACBootstrap5ValidationSummaryModule,
        SACBootstrap5ButtonModule,
        DemoButtonComponent,
    ],
})
export class ButtonModule {}
