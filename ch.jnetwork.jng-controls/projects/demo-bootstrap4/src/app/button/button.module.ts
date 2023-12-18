import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  JNetworkBootstrap4FormModule,
  JNetworkBootstrap4ButtonModule,
  JNetworkBootstrap4ValidationSummaryModule,
} from '@jnetwork/sac-bootstrap4';
import { ButtonRoutingModule } from './button-routing.module';
import { DemoButtonComponent } from './button.component';
@NgModule({
  declarations: [DemoButtonComponent],
  imports: [
    CommonModule,
    FormsModule,
    ButtonRoutingModule,
    JNetworkBootstrap4FormModule,
    JNetworkBootstrap4ButtonModule,
    JNetworkBootstrap4ValidationSummaryModule,
    JNetworkBootstrap4ButtonModule,
  ],
})
export class ButtonModule {}
