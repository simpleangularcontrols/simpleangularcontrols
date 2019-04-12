import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgUpload } from "./upload";
import { NgUploadMultiple } from "./uploadmultiple";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [NgUpload, NgUploadMultiple],
  imports: [
    BrowserModule, FormsModule
  ],
  exports: [NgUpload, NgUploadMultiple]
})
export class jNetworkBootstrap3UploadModule { }
