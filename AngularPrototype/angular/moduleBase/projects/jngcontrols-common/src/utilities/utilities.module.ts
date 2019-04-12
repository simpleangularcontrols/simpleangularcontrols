import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ClickStopPropagation } from "./stopPropagationDirective";

@NgModule({
  declarations: [ClickStopPropagation],
  imports: [
    BrowserModule
  ],
  exports: [ClickStopPropagation]
})
export class ExanicCommonUtilitiesModule { }
