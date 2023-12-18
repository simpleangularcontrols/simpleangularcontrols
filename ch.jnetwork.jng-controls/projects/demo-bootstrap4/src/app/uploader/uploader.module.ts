import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  SACBootstrap4FormModule,
  SACBootstrap4UploadModule,
  SACBootstrap4ButtonModule,
  SACBootstrap4ValidationSummaryModule,
} from '@jnetwork/sac-bootstrap4';
import { UploaderRoutingModule } from './uploader-routing.module';
import { DemoUploaderComponent } from './uploader.component';
@NgModule({
  declarations: [DemoUploaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    UploaderRoutingModule,
    SACBootstrap4FormModule,
    SACBootstrap4ButtonModule,
    SACBootstrap4ValidationSummaryModule,
    SACBootstrap4UploadModule,
  ],
})
export class UploaderModule {}
