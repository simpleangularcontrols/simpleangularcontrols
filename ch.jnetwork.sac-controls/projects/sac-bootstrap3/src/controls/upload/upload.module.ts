import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SACBootstrap3LayoutModule } from '../layout/layout.module';
import { SacUploadComponent } from './upload';
import { SacUploadMultipleComponent } from './uploadmultiple';

@NgModule({
  declarations: [SacUploadComponent, SacUploadMultipleComponent],
  imports: [CommonModule, FormsModule, SACBootstrap3LayoutModule],
  exports: [SacUploadComponent, SacUploadMultipleComponent],
})
export class SACBootstrap3UploadModule {}
