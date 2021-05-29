import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgUploadComponent } from './upload';
import { NgUploadMultipleComponent } from './uploadmultiple';

@NgModule({
  declarations: [NgUploadComponent, NgUploadMultipleComponent],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [NgUploadComponent, NgUploadMultipleComponent]
})
export class JNetworkBootstrap4UploadModule { }
