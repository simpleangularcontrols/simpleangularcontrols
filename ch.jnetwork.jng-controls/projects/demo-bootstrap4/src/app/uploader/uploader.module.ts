import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  JNetworkBootstrap4FormModule,
  JNetworkBootstrap4UploadModule,
  JNetworkBootstrap4ButtonModule,
  JNetworkBootstrap4ValidationSummaryModule,
} from '@jnetwork/jngcontrols-bootstrap4';
import { UploaderRoutingModule } from './uploader-routing.module';
import { DemoUploaderComponent } from './uploader.component';
@NgModule({
  declarations: [DemoUploaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    UploaderRoutingModule,
    JNetworkBootstrap4FormModule,
    JNetworkBootstrap4ButtonModule,
    JNetworkBootstrap4ValidationSummaryModule,
    JNetworkBootstrap4UploadModule,
  ],
})
export class UploaderModule {}
