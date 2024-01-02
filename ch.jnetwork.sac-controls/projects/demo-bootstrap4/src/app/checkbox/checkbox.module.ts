import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  SACBootstrap4FormModule,
  SACBootstrap4CheckboxModule,
  SACBootstrap4ButtonModule,
  SACBootstrap4ValidationSummaryModule,
} from '@simpleangularcontrols/sac-bootstrap4';
import { CheckboxRoutingModule } from './checkbox-routing.module';
import { DemoCheckboxComponent } from './checkbox.component';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CheckboxRoutingModule,
        SACBootstrap4FormModule,
        SACBootstrap4ButtonModule,
        SACBootstrap4ValidationSummaryModule,
        SACBootstrap4CheckboxModule,
        DemoCheckboxComponent,
    ],
})
export class CheckboxModule {}
