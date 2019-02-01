import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgTinyMce } from "./tinymce";
import { ExanicTinyMceEditorModule } from '@jnetwork/jngcontrols-common';

@NgModule({
  declarations: [NgTinyMce],
  imports: [
    BrowserModule, ExanicTinyMceEditorModule
  ],
  exports: [NgTinyMce]
})
export class ExanicBootstrap3TinyMceModule { }
