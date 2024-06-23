import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SACBootstrap5LayoutModule } from '../layout/layout.module';
import { SacDropzoneMultipleComponent } from './dropzonemultiple';
import { SacDropzoneSingleComponent } from './dropzonesingle';
import { SacUploadComponent } from './upload';
import { SacUploadMultipleComponent } from './uploadmultiple';

@NgModule({
  declarations: [
    SacUploadComponent,
    SacUploadMultipleComponent,
    SacDropzoneSingleComponent,
    SacDropzoneMultipleComponent,
  ],
  imports: [CommonModule, FormsModule, SACBootstrap5LayoutModule],
  exports: [
    SacUploadComponent,
    SacUploadMultipleComponent,
    SacDropzoneSingleComponent,
    SacDropzoneMultipleComponent,
  ],
})
export class SACBootstrap5UploadModule {}
