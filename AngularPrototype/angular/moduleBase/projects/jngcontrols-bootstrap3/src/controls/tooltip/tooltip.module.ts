import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgTooltip } from "./tooltip";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [NgTooltip],
  imports: [
    BrowserModule, CommonModule
  ],
  exports: [NgTooltip]
})
export class jNetworkBootstrap3TooltipModule { }
