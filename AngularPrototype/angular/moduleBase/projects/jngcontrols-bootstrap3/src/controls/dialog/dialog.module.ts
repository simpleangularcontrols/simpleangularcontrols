import { NgModule } from "@angular/core";
// import { ExanicCommonFormModule } from "../form/form.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgDialog } from "./dialog";

@NgModule({
  declarations: [NgDialog],
  imports: [
    BrowserModule
  ],
  exports: [NgDialog]
})
export class ExanicBootstrap3DialogModule { }
