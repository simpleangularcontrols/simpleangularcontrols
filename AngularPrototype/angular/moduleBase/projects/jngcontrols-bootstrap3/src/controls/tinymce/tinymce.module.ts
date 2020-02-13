import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgTinyMceComponent } from './tinymce';
import { jNetworkTinyMceEditorModule } from '@jnetwork/jngcontrols-common';

@NgModule({
  declarations: [NgTinyMceComponent],
  imports: [
    BrowserModule, jNetworkTinyMceEditorModule
  ],
  exports: [NgTinyMceComponent]
})
export class JNetworkBootstrap3TinyMceModule { }
