import { NgModule } from "@angular/core";
import { ExanicTinyMceEditorModule } from "@jnetwork/jngcontrols-common";
import { BrowserModule } from "@angular/platform-browser";
import { NgTinyMce } from "./tinymce";

@NgModule({
  declarations: [NgTinyMce],
  imports: [
    BrowserModule, ExanicTinyMceEditorModule
  ],
  exports: [NgTinyMce]
})
export class ExanicBootstrap4TinyMceModule { }
