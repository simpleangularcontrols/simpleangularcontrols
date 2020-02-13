import { NgModule } from '@angular/core';
import { jNetworkTinyMceEditorModule } from '@jnetwork/jngcontrols-common';
import { BrowserModule } from '@angular/platform-browser';
import { NgTinyMceComponent } from './tinymce';

@NgModule({
  declarations: [NgTinyMceComponent],
  imports: [
    BrowserModule, jNetworkTinyMceEditorModule
  ],
  exports: [NgTinyMceComponent]
})
export class JNetworkBootstrap4TinyMceModule { }
