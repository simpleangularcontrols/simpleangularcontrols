import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgUploadComponent } from './upload';
import { NgUploadMultipleComponent } from './uploadmultiple';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NgUploadComponent, NgUploadMultipleComponent],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [NgUploadComponent, NgUploadMultipleComponent]
})
export class JNetworkBootstrap3UploadModule { }
