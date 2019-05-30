import { NgModule } from "@angular/core";
import { NgFormular } from "./form";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [NgFormular],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    NgFormular
  ]
})
export class jNetworkBootstrap3FormModule { }
