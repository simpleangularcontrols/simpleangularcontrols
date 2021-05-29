import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  JNetworkBootstrap4FormModule,
  JNetworkBootstrap4InputModule,
  JNetworkBootstrap4ButtonModule,
  JNetworkBootstrap4ValidationSummaryModule,
} from '@jnetwork/jngcontrols-bootstrap4';
import { InputRoutingModule } from './input-routing.module';
import { DemoInputComponent } from './input.component';
@NgModule({
  declarations: [DemoInputComponent],
  imports: [
    CommonModule,
    FormsModule,
    InputRoutingModule,
    JNetworkBootstrap4FormModule,
    JNetworkBootstrap4ButtonModule,
    JNetworkBootstrap4ValidationSummaryModule,
    JNetworkBootstrap4InputModule,
  ],
})
export class InputModule {}
