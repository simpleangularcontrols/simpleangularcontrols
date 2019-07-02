import { NgModule } from "@angular/core";
import { ProvideParentNgFormular } from "./ngformularinherit.directive";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  declarations: [ProvideParentNgFormular],
  imports: [
    BrowserModule
  ],
  exports: [ProvideParentNgFormular]
})
export class jNetworkBootstrap3DirectiveModule { }
