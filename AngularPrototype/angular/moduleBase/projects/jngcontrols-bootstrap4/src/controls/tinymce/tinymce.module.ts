import { NgModule } from "@angular/core";
import { jNetworkTinyMceEditorModule } from "@jnetwork/jngcontrols-common";
import { BrowserModule } from "@angular/platform-browser";
import { NgTinyMce } from "./tinymce";

@NgModule({
  declarations: [NgTinyMce],
  imports: [
    BrowserModule, jNetworkTinyMceEditorModule
  ],
  exports: [NgTinyMce]
})
export class jNetworkBootstrap4TinyMceModule { }