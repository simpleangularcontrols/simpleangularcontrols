import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  JNetworkBootstrap4FormModule,
  JNetworkBootstrap4CheckboxModule,
  JNetworkBootstrap4ButtonModule,
  JNetworkBootstrap4ValidationSummaryModule,
} from '@jnetwork/jngcontrols-bootstrap4';
import { CheckboxRoutingModule } from './checkbox-routing.module';
import { DemoCheckboxComponent } from './checkbox.component';
@NgModule({
  declarations: [DemoCheckboxComponent],
  imports: [
    CommonModule,
    FormsModule,
    CheckboxRoutingModule,
    JNetworkBootstrap4FormModule,
    JNetworkBootstrap4ButtonModule,
    JNetworkBootstrap4ValidationSummaryModule,
    JNetworkBootstrap4CheckboxModule,
  ],
})
export class CheckboxModule {}
