import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  JNetworkBootstrap4ButtonModule,
  JNetworkBootstrap4DialogModule,
  JNetworkBootstrap4FormModule,
  JNetworkBootstrap4ValidationSummaryModule
} from '@jnetwork/sac-bootstrap4';
import { DialogRoutingModule } from './dialog-routing.module';
import { DemoDialogComponent } from './dialog.component';
@NgModule({
  declarations: [DemoDialogComponent],
  imports: [
    CommonModule,
    FormsModule,
    DialogRoutingModule,
    JNetworkBootstrap4FormModule,
    JNetworkBootstrap4DialogModule,
    JNetworkBootstrap4ValidationSummaryModule,
    JNetworkBootstrap4ButtonModule,
    JNetworkBootstrap4DialogModule,
  ],
})
export class DialogModule {}
