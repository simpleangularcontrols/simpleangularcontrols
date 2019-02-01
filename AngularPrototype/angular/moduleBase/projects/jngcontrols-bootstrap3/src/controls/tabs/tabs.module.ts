import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgTab } from "./tab";
import { NgTabItem } from "./tabitem";

@NgModule({
  declarations: [NgTab, NgTabItem],
  imports: [
    BrowserModule
  ],
  exports: [NgTab, NgTabItem]
})
export class ExanicBootstrap3TabsModule { }
