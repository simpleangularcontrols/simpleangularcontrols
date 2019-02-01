import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgTinyMce } from "./tinymce";
import { jNetworkTinyMceEditorModule } from '@jnetwork/jngcontrols-common';

@NgModule({
  declarations: [NgTinyMce],
  imports: [
    BrowserModule, jNetworkTinyMceEditorModule
  ],
  exports: [NgTinyMce]
})
export class jNetworkBootstrap3TinyMceModule { }
