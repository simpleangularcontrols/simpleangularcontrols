import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgUploadComponent } from './upload';
import { NgUploadMultipleComponent } from './uploadmultiple';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NgUploadComponent, NgUploadMultipleComponent],
  imports: [
    BrowserModule, FormsModule
  ],
  exports: [NgUploadComponent, NgUploadMultipleComponent]
})
export class JNetworkBootstrap3UploadModule { }
