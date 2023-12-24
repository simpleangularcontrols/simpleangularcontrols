import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  SACBootstrap3FormModule,
  SACBootstrap3UploadModule,
  SACBootstrap3ButtonModule,
  SACBootstrap3ValidationSummaryModule,
} from '@simpleangularcontrols/sac-bootstrap3';
import { UploaderRoutingModule } from './uploader-routing.module';
import { DemoUploaderComponent } from './uploader.component';
@NgModule({
  declarations: [DemoUploaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    UploaderRoutingModule,
    SACBootstrap3FormModule,
    SACBootstrap3ButtonModule,
    SACBootstrap3ValidationSummaryModule,
    SACBootstrap3UploadModule,
  ],
})
export class UploaderModule {}
