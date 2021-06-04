import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgDropzoneMultipleComponent } from './dropzonemultiple';
import { NgDropzoneSingleComponent } from './dropzonesingle';
import { NgUploadComponent } from './upload';
import { NgUploadMultipleComponent } from './uploadmultiple';

@NgModule({
  declarations: [
    NgUploadComponent,
    NgUploadMultipleComponent,
    NgDropzoneSingleComponent,
    NgDropzoneMultipleComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    NgUploadComponent,
    NgUploadMultipleComponent,
    NgDropzoneSingleComponent,
    NgDropzoneMultipleComponent,
  ],
})
export class JNetworkBootstrap4UploadModule {}
