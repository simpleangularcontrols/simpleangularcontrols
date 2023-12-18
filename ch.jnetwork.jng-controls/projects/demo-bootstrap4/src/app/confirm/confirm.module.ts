import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  JNetworkBootstrap4ButtonModule,
  JNetworkBootstrap4ConfirmModule,
  JNetworkBootstrap4FormModule,
  JNetworkBootstrap4ValidationSummaryModule,
} from '@jnetwork/sac-bootstrap4';
import { ConfirmRoutingModule } from './confirm-routing.module';
import { DemoConfirmComponent } from './confirm.component';
@NgModule({
  declarations: [DemoConfirmComponent],
  imports: [
    CommonModule,
    FormsModule,
    ConfirmRoutingModule,
    JNetworkBootstrap4FormModule,
    JNetworkBootstrap4ConfirmModule,
    JNetworkBootstrap4ValidationSummaryModule,
    JNetworkBootstrap4ButtonModule,
    JNetworkBootstrap4ConfirmModule.forRoot(),
  ],
})
export class ConfirmModule {}
