import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SacUploadComponent } from './upload';
import { SacUploadMultipleComponent } from './uploadmultiple';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SacUploadComponent, SacUploadMultipleComponent],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [SacUploadComponent, SacUploadMultipleComponent]
})
export class SACBootstrap3UploadModule { }
