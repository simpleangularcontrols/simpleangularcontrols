import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SacTooltipComponent } from '../tooltip/tooltip';
import { SacUploadComponent } from './upload';
import { SacUploadMultipleComponent } from './uploadmultiple';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SacUploadComponent,
    SacUploadMultipleComponent,
    SacTooltipComponent,
  ],
  exports: [SacUploadComponent, SacUploadMultipleComponent],
})
export class SACBootstrap3UploadModule {}
