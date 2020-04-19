import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgUploadComponent } from './upload';
import { NgUploadMultipleComponent } from './uploadmultiple';

@NgModule({
  declarations: [NgUploadComponent, NgUploadMultipleComponent],
  imports: [
    BrowserModule, FormsModule
  ],
  exports: [NgUploadComponent, NgUploadMultipleComponent]
})
export class JNetworkBootstrap4UploadModule { }
