import { NgModule } from "@angular/core";
import { NgButton } from "./button";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  declarations: [NgButton],
  imports: [
    BrowserModule
  ],
  exports: [NgButton]
})
export class ExanicBootstrap3ButtonModule { }
