import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgDate } from "./date";
import { NgDateTime } from "./datetime";
import { NgDateSelector } from "./dateselector";
import { NgTime } from "./time";
import { TextMaskModule } from "angular2-text-mask";

@NgModule({
  declarations: [NgDate, NgDateTime, NgTime, NgDateSelector],
  imports: [
    BrowserModule, TextMaskModule
  ],
  exports: [NgDate, NgDateTime, NgTime, NgDateSelector]
})
export class jNetworkBootstrap4DateTimeModule { }
